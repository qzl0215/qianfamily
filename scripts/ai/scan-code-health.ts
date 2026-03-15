import path from "node:path";

import {
  getLineCount,
  getModuleDirs,
  getTimestamp,
  listFiles,
  parseArgs,
  readText,
  relativeRepoPath,
  resolveRepoPath,
  writeText,
} from "./lib";

const args = parseArgs(process.argv.slice(2));
const writeTarget = typeof args.write === "string" ? resolveRepoPath(args.write) : null;

const codeFiles = listFiles(resolveRepoPath("src"), (filePath) => /\.(ts|tsx|md)$/.test(filePath));
const scriptFiles = listFiles(resolveRepoPath("scripts"), (filePath) => /\.(ts|tsx|sh)$/.test(filePath));
const allFiles = [...codeFiles, ...scriptFiles];

const largeFiles = allFiles
  .map((filePath) => ({
    file: relativeRepoPath(filePath),
    lines: getLineCount(filePath),
  }))
  .filter((entry) => entry.lines >= 180)
  .sort((left, right) => right.lines - left.lines);

const todoHits = listFiles(resolveRepoPath("."), (filePath) =>
  /\.(ts|tsx|js|jsx|md|sh)$/.test(filePath),
)
  .filter((filePath) => !filePath.endsWith("scripts/ai/scan-code-health.ts"))
  .flatMap((filePath) =>
    readText(filePath)
      .split("\n")
      .map((line, index) => ({ line, index: index + 1 }))
      .filter(({ line }) => /(TODO|FIXME|XXX|HACK|待删除)/.test(line))
      .map(({ line, index }) => `${relativeRepoPath(filePath)}:${index} ${line.trim()}`),
  );

const requiredModuleDirs = [
  ...listFiles(resolveRepoPath("src/modules"), (filePath) => /\.(ts|tsx)$/.test(filePath)).map((filePath) =>
    path.dirname(filePath),
  ),
]
  .filter((dirPath) => {
    const relative = relativeRepoPath(dirPath);
    const segments = relative.split("/");
    return (
      segments.length === 3 ||
      (segments.length === 4 && segments[2] === "topics")
    );
  })
  .filter((dirPath, index, items) => items.indexOf(dirPath) === index)
  .sort();

const moduleDirsWithDocs = new Set(getModuleDirs().map(relativeRepoPath));
const missingModuleDocs = requiredModuleDirs
  .map(relativeRepoPath)
  .filter((dirPath) => !moduleDirsWithDocs.has(dirPath));

const suspiciousNames = listFiles(resolveRepoPath("src"), (filePath) => /\.(ts|tsx)$/.test(filePath))
  .map(relativeRepoPath)
  .filter((filePath) => /(^|\/)(utils?|helpers?|common|misc|temp|final|new|v2)(\/|\.|$)/i.test(filePath));

const duplicateBasenames = Object.entries(
  listFiles(resolveRepoPath("src/modules"), (filePath) => /\.(ts|tsx)$/.test(filePath)).reduce<Record<string, string[]>>(
    (accumulator, filePath) => {
      const baseName = path.basename(filePath, path.extname(filePath));
      if (["index", "content"].includes(baseName)) {
        return accumulator;
      }
      accumulator[baseName] ??= [];
      accumulator[baseName].push(relativeRepoPath(filePath));
      return accumulator;
    },
    {},
  ),
)
  .filter(([, files]) => files.length > 1)
  .map(([name, files]) => ({ name, files }));

const report = `# Code Health Report

Generated at: ${getTimestamp()}

## Large Files
${largeFiles.length > 0 ? largeFiles.map((entry) => `- \`${entry.file}\` (${entry.lines} lines)`).join("\n") : "- none"}

## TODO / FIXME
${todoHits.length > 0 ? todoHits.map((hit) => `- ${hit}`).join("\n") : "- none"}

## Missing module.md
${missingModuleDocs.length > 0 ? missingModuleDocs.map((dirPath) => `- \`${dirPath}\``).join("\n") : "- none"}

## Suspicious Names
${suspiciousNames.length > 0 ? suspiciousNames.map((filePath) => `- \`${filePath}\``).join("\n") : "- none"}

## Duplicate Basenames
${
  duplicateBasenames.length > 0
    ? duplicateBasenames
        .map((entry) => `- \`${entry.name}\`: ${entry.files.map((filePath) => `\`${filePath}\``).join("、")}`)
        .join("\n")
    : "- none"
}
`;

if (writeTarget) {
  writeText(writeTarget, report);
}

console.log(report);
