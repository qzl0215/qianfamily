import path from "node:path";

import {
  parseArgs,
  readText,
  relativeRepoPath,
  resolveRepoPath,
} from "./lib";

const args = parseArgs(process.argv.slice(2));
const taskId = typeof args.task === "string" ? args.task : "task-001-repo-refactor";
const explicitModules =
  typeof args.modules === "string"
    ? args.modules.split(",").map((item) => item.trim()).filter(Boolean)
    : [];

const queueTaskPath = resolveRepoPath("tasks/queue", `${taskId}.md`);
const archiveTaskPath = resolveRepoPath("tasks/archive", `${taskId}.md`);
const taskPath = explicitModules.length >= 0 && pathExists(queueTaskPath) ? queueTaskPath : archiveTaskPath;

function pathExists(filePath: string) {
  try {
    return Boolean(readText(filePath));
  } catch {
    return false;
  }
}

function extractRelatedModules(taskContent: string) {
  const lines = taskContent.split("\n");
  const start = lines.findIndex((line) => line.trim() === "## Related Modules");
  if (start === -1) {
    return [];
  }

  const modules: string[] = [];
  for (const line of lines.slice(start + 1)) {
    if (line.startsWith("## ")) {
      break;
    }
    const match = line.match(/`([^`]+)`/);
    if (match) {
      modules.push(match[1]);
    }
  }
  return modules;
}

const taskContent = readText(taskPath);
const moduleIds = explicitModules.length > 0 ? explicitModules : extractRelatedModules(taskContent);

const moduleBlocks = moduleIds.map((moduleId) => {
  const moduleDocPath = resolveRepoPath("src/modules", moduleId, "module.md");
  const moduleContent = pathExists(moduleDocPath) ? readText(moduleDocPath) : "Missing module.md";
  return `## Module: ${moduleId}\n\n${moduleContent}`;
});

const relevantCode = moduleIds.map((moduleId) => `- src/modules/${moduleId}/`).join("\n");

const output = `# AI Context Bundle

## Rules

${readText(resolveRepoPath("docs/PROJECT_RULES.md"))}

## Architecture

${readText(resolveRepoPath("docs/ARCHITECTURE.md"))}

## Task

${taskContent}

## Index

${readText(resolveRepoPath("code_index/module-index.md"))}

## Memory

${readText(resolveRepoPath("memory/project/current-state.md"))}

${readText(resolveRepoPath("memory/architecture/system-overview.md"))}

${moduleBlocks.join("\n\n")}

## Relevant Code

${relevantCode || "- No modules resolved"}
`;

console.log(output);
