import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { cp, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const repositoryRoot = path.resolve(import.meta.dirname, "..");
const fixedSha = "0123456789abcdef0123456789abcdef01234567";

async function createBuildFixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), "hands-on-build-"));
  await mkdir(path.join(root, "scripts"));
  await mkdir(path.join(root, "site", "assets"), { recursive: true });
  await mkdir(path.join(root, "2026.2", "handson-01"), { recursive: true });

  for (const relative of [
    "course.config.schema.json",
    "schedule.schema.json",
    "scripts/build-site.mjs",
    "scripts/sync-schedule-links.mjs",
    "site/assets/site.css",
  ]) {
    await cp(path.join(repositoryRoot, relative), path.join(root, relative));
  }

  const config = {
    $schema: "./course.config.schema.json",
    schemaVersion: 1,
    course: {
      name: "Disciplina",
      acronym: "DIS",
      code: "COD001",
      program: "Curso",
      institution: {
        name: "Instituição",
        campus: "Campus",
        url: "https://example.com/instituicao",
      },
      modality: "Presencial",
      workloadHours: 60,
      instructor: { name: "Docente", url: "https://example.com/docente" },
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
      templateRepository: "git@github.com:filipefernandesphd/my-slidev-template.git",
      templateRevision: "5dc52cd82013de4012c33c03f46e9aa9a25e5ab2",
    },
  };
  const schedule = {
    $schema: "../schedule.schema.json",
    schemaVersion: 1,
    semester: "2026.2",
    source: { tab: "Program" },
    entries: [
      {
        day: "Segunda",
        date: "03/08/2026",
        module: "Prática",
        topic: "Exercícios guiados",
        id: "handson-01",
      },
    ],
  };

  await writeFile(path.join(root, "course.config.json"), `${JSON.stringify(config, null, 2)}\n`);
  await writeFile(path.join(root, "README.md"), "# Disciplina (DIS)\n");
  await writeFile(
    path.join(root, "2026.2", "README.md"),
    [
      "# Disciplina (DIS) — 2026/2",
      "",
      "## Cronograma",
      "",
      "| Dia | Data | Módulo | Tópico |",
      "|---|---|---|---|",
      "| Segunda | 03/08/2026 | Prática | [Exercícios guiados](handson-01/) |",
      "",
    ].join("\n"),
  );
  await writeFile(
    path.join(root, "2026.2", "schedule.json"),
    `${JSON.stringify(schedule, null, 2)}\n`,
  );
  await writeFile(
    path.join(root, "2026.2", "handson-01", "README.md"),
    "# Laboratório de testes\n\nResolva os exercícios.\n",
  );
  await writeFile(
    path.join(root, "2026.2", "handson-01", "exercicio-01.md"),
    "# Exercício 1\n",
  );
  return root;
}

test("builds a hands-on page with SHA-pinned Markdown links and no copied sources", async (t) => {
  const root = await createBuildFixture();
  t.after(() => rm(root, { recursive: true, force: true }));

  await execFileAsync(
    process.execPath,
    [path.join(root, "scripts", "build-site.mjs"), "--sha", fixedSha],
    { cwd: root },
  );

  const output = path.join(root, "_site", "2026.2", "handson-01");
  assert.deepEqual(await readdir(output), ["index.html"]);
  const html = await readFile(path.join(output, "index.html"), "utf8");
  assert.match(html, /<title>Laboratório de testes · Disciplina<\/title>/u);
  assert.match(html, /Hands-on 01/u);
  assert.match(
    html,
    new RegExp(
      `https://github\\.com/example/course/blob/${fixedSha}/2026\\.2/handson-01/exercicio-01\\.md`,
      "u",
    ),
  );
  assert.doesNotMatch(html, /slides\//u);
});
