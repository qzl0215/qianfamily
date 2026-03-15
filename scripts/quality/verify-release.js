#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

function parseArgs(argv) {
  const result = {};

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === "--tag") {
      result.tag = argv[index + 1];
      index += 1;
      continue;
    }

    if (token === "--allow-version-mismatch") {
      result.allowVersionMismatch = true;
    }
  }

  return result;
}

const repoRoot = process.cwd();
const packageJsonPath = path.join(repoRoot, "package.json");

if (!fs.existsSync(packageJsonPath)) {
  fail("package.json not found");
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const args = parseArgs(process.argv.slice(2));
const expectedTag = args.tag || `v${packageJson.version}`;

if (!/^v\d+\.\d+\.\d+$/.test(expectedTag)) {
  fail(`invalid tag format: ${expectedTag}`);
}

const expectedVersion = expectedTag.slice(1);

if (!args.allowVersionMismatch && packageJson.version !== expectedVersion) {
  fail(
    `package.json version (${packageJson.version}) does not match release tag (${expectedTag})`,
  );
}

const releaseNotesPath = path.join(repoRoot, "docs", "releases", `${expectedTag}.md`);

if (!fs.existsSync(releaseNotesPath)) {
  fail(`missing release notes file: docs/releases/${expectedTag}.md`);
}

const releaseNotes = fs.readFileSync(releaseNotesPath, "utf8");
const lines = releaseNotes.split(/\r?\n/);
const titleLine = lines.find((line) => line.trim().length > 0) || "";
const expectedTitle = `# qianfamily ${expectedTag}`;

if (titleLine.trim() !== expectedTitle) {
  fail(
    `release title mismatch: expected "${expectedTitle}", got "${titleLine.trim() || "<empty>"}"`,
  );
}

const requiredSections = [
  "## 本版主题",
  "## 重点变化",
  "## 已解决的问题",
  "## 保持不变的对外契约",
  "## 验证结果",
  "## 已知后续项",
];

const missingSections = requiredSections.filter((section) => !releaseNotes.includes(section));

if (missingSections.length > 0) {
  fail(`release notes missing sections: ${missingSections.join(", ")}`);
}

console.log(
  JSON.stringify(
    {
      status: "ok",
      tag: expectedTag,
      version: packageJson.version,
      allowVersionMismatch: Boolean(args.allowVersionMismatch),
      releaseNotes: `docs/releases/${expectedTag}.md`,
    },
    null,
    2,
  ),
);
