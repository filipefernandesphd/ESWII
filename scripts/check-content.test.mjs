import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { findRepositoryRoot } from "./check-content.mjs";

test("finds a versioned repository checkout without AGENTS.md", async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "content-root-"));
  const nested = path.join(root, "scripts", "fixtures");
  t.after(() => rm(root, { recursive: true, force: true }));

  await mkdir(nested, { recursive: true });
  await writeFile(path.join(root, "course.config.json"), "{}\n");

  assert.equal(await findRepositoryRoot(nested), root);
});
