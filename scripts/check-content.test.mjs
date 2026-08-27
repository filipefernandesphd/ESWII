import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, symlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  discoverSemesterContents,
  findRepositoryRoot,
  validateAgainstSchema,
  validateHandsOnStructure,
  validateSlideStructure,
} from "./check-content.mjs";

const repositoryRoot = path.resolve(import.meta.dirname, "..");

test("finds a versioned repository checkout without AGENTS.md", async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "content-root-"));
  const nested = path.join(root, "scripts", "fixtures");
  t.after(() => rm(root, { recursive: true, force: true }));

  await mkdir(nested, { recursive: true });
  await writeFile(path.join(root, "course.config.json"), "{}\n");

  assert.equal(await findRepositoryRoot(nested), root);
});

test("schedule schema accepts handson-NN and rejects spelling variations", async () => {
  const schema = JSON.parse(
    await readFile(path.join(repositoryRoot, "schedule.schema.json"), "utf8"),
  );
  const idSchema = schema.properties.entries.items.properties.id;

  assert.doesNotThrow(() =>
    validateAgainstSchema("handson-01", idSchema, "schedule.schema.json"),
  );
  for (const invalid of [
    "hands-on-01",
    "handson-1",
    "Handson-01",
    "handson-01/",
    "aula-1",
    "Aula-01",
  ]) {
    assert.throws(
      () => validateAgainstSchema(invalid, idSchema, "schedule.schema.json"),
      /formato inválido/u,
    );
  }
});

async function createHandsOnFixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), "hands-on-content-"));
  const semester = "2026.2";
  const semesterDirectory = path.join(root, semester);
  const handsOn = "handson-01";
  const handsOnDirectory = path.join(semesterDirectory, handsOn);
  await mkdir(handsOnDirectory, { recursive: true });
  return { handsOn, handsOnDirectory, root, semester, semesterDirectory };
}

test("validates a hands-on with a non-empty README and Markdown files", async (t) => {
  const fixture = await createHandsOnFixture();
  t.after(() => rm(fixture.root, { recursive: true, force: true }));
  await writeFile(path.join(fixture.handsOnDirectory, "README.md"), "# Prática\n");
  await writeFile(path.join(fixture.handsOnDirectory, "exercicio-01.md"), "Exercício\n");

  await assert.doesNotReject(
    validateHandsOnStructure(fixture.root, fixture.semester, fixture.handsOn),
  );
});

test("rejects hands-ons with absent or empty README", async (t) => {
  const fixture = await createHandsOnFixture();
  t.after(() => rm(fixture.root, { recursive: true, force: true }));
  await assert.rejects(
    validateHandsOnStructure(fixture.root, fixture.semester, fixture.handsOn),
    /README\.md: arquivo obrigatório ausente/u,
  );
  await writeFile(path.join(fixture.handsOnDirectory, "README.md"), " \n");
  await assert.rejects(
    validateHandsOnStructure(fixture.root, fixture.semester, fixture.handsOn),
    /README\.md: arquivo vazio/u,
  );
});

test("rejects non-Markdown files, subdirectories, hidden files and symlinks", async (t) => {
  const invalidEntries = [
    ["arquivo.txt", async (target) => writeFile(target, "texto")],
    ["anexos", async (target) => mkdir(target)],
    [".oculto.md", async (target) => writeFile(target, "texto")],
    ["atalho.md", async (target, fixture) =>
      symlink(path.join(fixture.handsOnDirectory, "README.md"), target)],
  ];

  for (const [name, create] of invalidEntries) {
    const fixture = await createHandsOnFixture();
    await writeFile(path.join(fixture.handsOnDirectory, "README.md"), "# Prática\n");
    await create(path.join(fixture.handsOnDirectory, name), fixture);
    await assert.rejects(
      validateHandsOnStructure(fixture.root, fixture.semester, fixture.handsOn),
    );
    await rm(fixture.root, { recursive: true, force: true });
  }
});

test("rejects invalid hands-on directory spellings and non-directories", async (t) => {
  const fixture = await createHandsOnFixture();
  t.after(() => rm(fixture.root, { recursive: true, force: true }));
  await mkdir(path.join(fixture.semesterDirectory, "hands-on-01"));
  await assert.rejects(
    discoverSemesterContents(fixture.semesterDirectory, fixture.semester),
    /use exatamente handson-NN/u,
  );

  await rm(path.join(fixture.semesterDirectory, "hands-on-01"), { recursive: true });
  await rm(fixture.handsOnDirectory, { recursive: true });
  await writeFile(fixture.handsOnDirectory, "arquivo");
  await assert.rejects(
    discoverSemesterContents(fixture.semesterDirectory, fixture.semester),
    /diretório real esperado/u,
  );
});

test("continues requiring slides for aula-NN", async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "lesson-content-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(path.join(root, "2026.2", "aula-01"), { recursive: true });

  await assert.rejects(
    validateSlideStructure(
      root,
      "2026.2",
      "aula-01",
      "5dc52cd82013de4012c33c03f46e9aa9a25e5ab2",
    ),
    /aula-01\/slides: diretório obrigatório ausente/u,
  );
});
