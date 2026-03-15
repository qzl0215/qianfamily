import path from "node:path";

import {
  extractModuleGoal,
  getModuleDirs,
  getTimestamp,
  listFiles,
  relativeRepoPath,
  resolveRepoPath,
  scanExports,
  writeText,
} from "./lib";

type ModuleEntry = {
  id: string;
  path: string;
  goal: string;
  publicFiles: string[];
  exports: { file: string; names: string[] }[];
};

function buildModuleEntries(): ModuleEntry[] {
  return getModuleDirs().map((moduleDir) => {
    const moduleId = relativeRepoPath(moduleDir).replace(/^src\/modules\//, "");
    const publicFiles = listFiles(moduleDir, (filePath) =>
      /\.(ts|tsx)$/.test(filePath) && !filePath.endsWith(".test.ts"),
    ).map(relativeRepoPath);

    const exports = publicFiles
      .map((relativePath) => {
        const absolutePath = resolveRepoPath(relativePath);
        return {
          file: relativePath,
          names: scanExports(absolutePath),
        };
      })
      .filter((entry) => entry.names.length > 0);

    return {
      id: moduleId,
      path: relativeRepoPath(moduleDir),
      goal: extractModuleGoal(path.join(moduleDir, "module.md")),
      publicFiles,
      exports,
    };
  });
}

function buildModuleIndexMarkdown(entries: ModuleEntry[]) {
  const rows = entries
    .map(
      (entry) =>
        `| \`${entry.id}\` | ${entry.goal || "待补充"} | \`${entry.path}\` | ${
          entry.publicFiles.length
        } |`,
    )
    .join("\n");

  const details = entries
    .map((entry) => {
      const exportedNames = entry.exports.flatMap((item) => item.names);
      return [
        `## \`${entry.id}\``,
        `- Goal: ${entry.goal || "待补充"}`,
        `- Path: \`${entry.path}\``,
        `- Public files: ${entry.publicFiles.map((file) => `\`${file}\``).join("、")}`,
        `- Exports: ${exportedNames.length > 0 ? exportedNames.map((name) => `\`${name}\``).join("、") : "无显式导出"}`,
      ].join("\n");
    })
    .join("\n\n");

  return `# Module Index

Generated at: ${getTimestamp()}

| Module | Goal | Path | Files |
| --- | --- | --- | --- |
${rows}

${details}
`;
}

function buildFunctionIndex(entries: ModuleEntry[]) {
  return {
    generatedAt: getTimestamp(),
    modules: Object.fromEntries(
      entries.map((entry) => [
        entry.id,
        {
          path: entry.path,
          exports: entry.exports.flatMap((item) =>
            item.names.map((name) => ({
              name,
              file: item.file,
            })),
          ),
        },
      ]),
    ),
  };
}

const entries = buildModuleEntries();

writeText(resolveRepoPath("code_index/module-index.md"), buildModuleIndexMarkdown(entries));
writeText(
  resolveRepoPath("code_index/function-index.json"),
  `${JSON.stringify(buildFunctionIndex(entries), null, 2)}\n`,
);

console.log(`Generated module index for ${entries.length} modules.`);
