import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, symlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { synchronizeScheduleLinks } from "./sync-schedule-links.mjs";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

async function createFixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), "schedule-links-"));
  const semester = path.join(root, "2026.2");
  await mkdir(semester);
  for (const schemaName of [
    "course.config.schema.json",
    "schedule.schema.json",
  ]) {
    await writeFile(
      path.join(root, schemaName),
      await readFile(path.join(repositoryRoot, schemaName), "utf8"),
    );
  }
  await writeFile(
    path.join(root, "course.config.json"),
    JSON.stringify({
      schemaVersion: 1,
      course: {
        name: "Disciplina",
        acronym: "D",
        code: "COD",
        program: "Curso",
        institution: {
          name: "Instituição",
          campus: "Campus",
          url: "https://example.com",
        },
        modality: "Presencial",
        workloadHours: 60,
        instructor: {
          name: "Docente",
          url: "https://example.com/docente",
        },
      },
      repository: {
        provider: "github",
        owner: "example",
        name: "course",
        url: "https://github.com/example/course",
      },
      site: {
        currentSemester: "2026.2",
        locale: "pt-BR",
        timezone: "America/Sao_Paulo",
      },
      slides: {
        templateRepository:
          "git@github.com:filipefernandesphd/my-slidev-template.git",
        templateRevision: "5dc52cd82013de4012c33c03f46e9aa9a25e5ab2",
      },
    }),
  );
  await writeFile(
    path.join(semester, "schedule.json"),
    JSON.stringify({
      schemaVersion: 1,
      semester: "2026.2",
      source: { tab: "Program" },
      entries: [
        {
          day: "Segunda",
          date: "03/08/2026",
          module: "M1",
          topic: "Introdução",
          id: "aula-01",
        },
        {
          day: "Quarta",
          date: "05/08/2026",
          module: "M1",
          topic: "Prática [guiada]",
          id: "aula-01",
        },
        {
          day: "Segunda",
          date: "10/08/2026",
          module: "",
          topic: "Conteúdo futuro",
          id: "aula-02",
        },
        {
          day: "Quarta",
          date: "12/08/2026",
          module: "",
          topic: "Feriado",
          id: "",
        },
      ],
    }),
  );
  await writeFile(
    path.join(semester, "README.md"),
    "# Disciplina — 2026/2\n\n## Cronograma\n\nTabela antiga.\n\n## Observações\n\nPreservar.\n",
  );
  await mkdir(path.join(semester, "aula-01"));
  return { root, semester };
}

test("links only exact, existing, direct lesson directories", async (t) => {
  const fixture = await createFixture();
  t.after(() => rm(fixture.root, { recursive: true, force: true }));

  const first = await synchronizeScheduleLinks({ root: fixture.root });
  assert.equal(first.records, 4);
  assert.equal(first.links, 2);
  assert.deepEqual(first.missing, ["aula-02"]);
  assert.equal(first.changed, true);

  const readme = await readFile(path.join(fixture.semester, "README.md"), "utf8");
  assert.match(readme, /\[Introdução\]\(aula-01\/\)/u);
  assert.match(readme, /\[Prática \\\[guiada\\\]\]\(aula-01\/\)/u);
  assert.match(readme, /\| Conteúdo futuro \|/u);
  assert.doesNotMatch(readme, /\[Conteúdo futuro\]/u);
  assert.match(readme, /\| Feriado \|/u);
  assert.match(readme, /## Observações\n\nPreservar\./u);

  const second = await synchronizeScheduleLinks({
    root: fixture.root,
    write: false,
  });
  assert.equal(second.changed, false);

  await mkdir(path.join(fixture.semester, "aula-02"));
  const afterLessonCreation = await synchronizeScheduleLinks({
    root: fixture.root,
    write: false,
  });
  assert.equal(afterLessonCreation.changed, true);
});

test("links existing hands-ons and keeps planned hands-ons as text", async (t) => {
  const fixture = await createFixture();
  t.after(() => rm(fixture.root, { recursive: true, force: true }));
  const schedulePath = path.join(fixture.semester, "schedule.json");
  const schedule = JSON.parse(await readFile(schedulePath, "utf8"));
  schedule.entries.push(
    {
      day: "Quinta",
      date: "13/08/2026",
      module: "M1",
      topic: "Exercícios guiados",
      id: "handson-01",
    },
    {
      day: "Sexta",
      date: "14/08/2026",
      module: "M1",
      topic: "Prática futura",
      id: "handson-02",
    },
  );
  await writeFile(schedulePath, `${JSON.stringify(schedule, null, 2)}\n`);
  await mkdir(path.join(fixture.semester, "handson-01"));

  const result = await synchronizeScheduleLinks({ root: fixture.root });
  assert.equal(result.links, 3);
  assert.deepEqual(result.missing, ["aula-02", "handson-02"]);
  const readme = await readFile(path.join(fixture.semester, "README.md"), "utf8");
  assert.match(readme, /\[Exercícios guiados\]\(handson-01\/\)/u);
  assert.match(readme, /\| Prática futura \|/u);
  assert.doesNotMatch(readme, /\[Prática futura\]/u);
});

test("rejects a symbolic link named as a lesson", async (t) => {
  const fixture = await createFixture();
  t.after(() => rm(fixture.root, { recursive: true, force: true }));
  await symlink(path.join(fixture.semester, "aula-01"), path.join(fixture.semester, "aula-02"));

  await assert.rejects(
    synchronizeScheduleLinks({ root: fixture.root, write: false }),
    /link simbólico não pode representar um conteúdo/u,
  );
});

test("rejects a regular file named as a lesson", async (t) => {
  const fixture = await createFixture();
  t.after(() => rm(fixture.root, { recursive: true, force: true }));
  await writeFile(path.join(fixture.semester, "aula-02"), "not a directory");

  await assert.rejects(
    synchronizeScheduleLinks({ root: fixture.root, write: false }),
    /nome de um conteúdo deve ser um diretório/u,
  );
});

test("rejects a symbolic link named as a hands-on", async (t) => {
  const fixture = await createFixture();
  t.after(() => rm(fixture.root, { recursive: true, force: true }));
  await symlink(
    path.join(fixture.semester, "aula-01"),
    path.join(fixture.semester, "handson-01"),
  );

  await assert.rejects(
    synchronizeScheduleLinks({ root: fixture.root, write: false }),
    /link simbólico não pode representar um conteúdo/u,
  );
});

test("rejects a regular file named as a hands-on", async (t) => {
  const fixture = await createFixture();
  t.after(() => rm(fixture.root, { recursive: true, force: true }));
  await writeFile(path.join(fixture.semester, "handson-01"), "not a directory");

  await assert.rejects(
    synchronizeScheduleLinks({ root: fixture.root, write: false }),
    /nome de um conteúdo deve ser um diretório/u,
  );
});

test("compares TAB from .env literally", async (t) => {
  const fixture = await createFixture();
  t.after(() => rm(fixture.root, { recursive: true, force: true }));
  await writeFile(
    path.join(fixture.root, ".env"),
    [
      "SEMESTER=2026.2",
      "ANALYTICAL_PROGRAM=https://example.com/private-sheet",
      "TAB=program",
      "",
    ].join("\n"),
  );

  await assert.rejects(
    synchronizeScheduleLinks({ root: fixture.root, write: false }),
    /TAB diverge/u,
  );
});

test("requires the versioned schema contracts", async (t) => {
  const fixture = await createFixture();
  t.after(() => rm(fixture.root, { recursive: true, force: true }));
  await rm(path.join(fixture.root, "schedule.schema.json"));

  await assert.rejects(
    synchronizeScheduleLinks({ root: fixture.root, write: false }),
    /ENOENT/u,
  );
});
