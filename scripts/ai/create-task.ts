import fs from "node:fs";

import {
  parseArgs,
  readText,
  resolveRepoPath,
  slugify,
  writeText,
} from "./lib";

const args = parseArgs(process.argv.slice(2));
const title = typeof args.title === "string" ? args.title : "new-task";
const goal = typeof args.goal === "string" ? args.goal : "待补充";
const why = typeof args.why === "string" ? args.why : "待补充";
const relatedModules =
  typeof args.modules === "string"
    ? args.modules
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item) => `- \`${item}\``)
        .join("\n")
    : "- `待补充`";

const templatePath = resolveRepoPath("tasks/templates/task-template.md");
const template = readText(templatePath);

const existingIds = [...fs.readdirSync(resolveRepoPath("tasks/queue")), ...fs.readdirSync(resolveRepoPath("tasks/archive"))]
  .map((fileName) => fileName.match(/^task-(\d+)-/))
  .filter((match): match is RegExpMatchArray => Boolean(match))
  .map((match) => Number(match[1]));

const nextId = String((existingIds.length > 0 ? Math.max(...existingIds) : 0) + 1).padStart(3, "0");
const slug = slugify(title);
const taskId = `task-${nextId}-${slug}`;
const outputPath = resolveRepoPath("tasks/queue", `${taskId}.md`);

const content = template
  .replaceAll("{{TASK_ID}}", taskId)
  .replaceAll("{{TITLE}}", title)
  .replaceAll("{{GOAL}}", goal)
  .replaceAll("{{WHY}}", why)
  .replaceAll("{{RELATED_MODULES}}", relatedModules);

writeText(outputPath, content);

console.log(`Created ${outputPath}`);
