import fs from "node:fs";
import path from "node:path";

export const repoRoot = process.cwd();

const IGNORE_DIRS = new Set([
  ".git",
  ".next",
  "node_modules",
  "out",
  "output",
]);

export function resolveRepoPath(...parts: string[]) {
  return path.join(repoRoot, ...parts);
}

export function ensureDir(dirPath: string) {
  fs.mkdirSync(dirPath, { recursive: true });
}

export function readText(filePath: string) {
  return fs.readFileSync(filePath, "utf8");
}

export function writeText(filePath: string, content: string) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
}

export function fileExists(filePath: string) {
  return fs.existsSync(filePath);
}

export function listFiles(dirPath: string, predicate?: (filePath: string) => boolean) {
  const files: string[] = [];

  function walk(currentPath: string) {
    for (const entry of fs.readdirSync(currentPath, { withFileTypes: true })) {
      if (IGNORE_DIRS.has(entry.name)) {
        continue;
      }
      if (entry.name.startsWith(".next")) {
        continue;
      }

      const nextPath = path.join(currentPath, entry.name);
      if (entry.isDirectory()) {
        walk(nextPath);
        continue;
      }

      if (!predicate || predicate(nextPath)) {
        files.push(nextPath);
      }
    }
  }

  walk(dirPath);
  return files.sort();
}

export function relativeRepoPath(filePath: string) {
  return path.relative(repoRoot, filePath).replaceAll(path.sep, "/");
}

export function slugify(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

export function parseArgs(argv: string[]) {
  const args: Record<string, string | boolean> = {};

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith("--")) {
      continue;
    }

    const key = token.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }

    args[key] = next;
    index += 1;
  }

  return args;
}

export function getModuleDirs() {
  const moduleRoot = resolveRepoPath("src/modules");
  return listFiles(moduleRoot, (filePath) => path.basename(filePath) === "module.md")
    .map((filePath) => path.dirname(filePath))
    .sort();
}

export function extractModuleGoal(moduleDocPath: string) {
  const content = readText(moduleDocPath);
  const lines = content.split("\n");
  const goalIndex = lines.findIndex((line) => line.trim() === "## 模块目标");
  if (goalIndex === -1) {
    return "";
  }

  return lines
    .slice(goalIndex + 1)
    .find((line) => line.trim().length > 0) ?? "";
}

export function scanExports(filePath: string) {
  const content = readText(filePath);
  const matches = [...content.matchAll(/export\s+(?:async\s+)?(?:const|function|type|class)\s+([A-Za-z0-9_]+)/g)];
  return matches.map((match) => match[1]);
}

export function getTimestamp() {
  return new Date().toISOString();
}

export function isCodeFile(filePath: string) {
  return /\.(ts|tsx|js|jsx|md)$/.test(filePath);
}

export function getLineCount(filePath: string) {
  return readText(filePath).split("\n").length;
}
