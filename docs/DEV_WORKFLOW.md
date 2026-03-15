# DEV_WORKFLOW

## 日常开发入口
1. 进入仓库后先读：
   - `AGENTS.md`
   - `docs/PROJECT_RULES.md`
   - `docs/ARCHITECTURE.md`
2. 选一个明确任务：
   - 已有任务：`tasks/queue/*.md`
   - 新建任务：`npm run ai:create-task -- --title "..." --goal "..." --why "..." --modules "..."`。

## Git / worktree 规则
- 默认分支模型：
  - `dev` 集成
  - `main` 发布
  - `codex/<agent-id>/<topic>` 开发
- 当前若远端缺失 `dev`，轻量脚本仍可回退到 `main` 作为基线。
- 结构升级任务必须走独立工作边界，不要和日常页面小改混在同一个任务里。

## 命令流
```bash
export AGENT_ID=<your-agent-id>
bash scripts/setup_agent_workflow.sh
bash scripts/task_start.sh <topic>
npm run ai:scan-health
npm run ai:gen-index
bash scripts/task_check.sh
bash scripts/task_commit.sh "中文备注"
bash scripts/task_pr.sh
```

## Release 流程
1. 在 `docs/releases/` 新建或更新版本说明文件，例如 `docs/releases/v0.1.1.md`。
2. 保持 `package.json` 的 `version` 与目标版本一致。
3. 运行：
   ```bash
   npm run release:check -- --tag v0.1.1
   ```
4. 完成 `dev -> main` 合并并验证生产构建。
5. 创建并推送 tag：
   ```bash
   git tag -a v0.1.1 -m "v0.1.1"
   git push origin v0.1.1
   ```
6. `.github/workflows/release.yml` 会按同名版本说明创建或更新 GitHub Release。

注意：
- tag 名与 release note 文件名必须一致。
- `package.json` 版本号也必须与 tag 一致。
- 若只修正文案，可手动触发 `release.yml` 重新同步 GitHub Release。

## AI 协作工作流
1. 读规则与架构。
2. 读当前任务。
3. 运行 `npm run ai:build-context -- --task task-xxx-...`。
4. 只在相关模块范围内改动。
5. 改完后更新：
   - task 状态
   - `memory/project/current-state.md`
   - `memory/project/tech-debt.md`
   - `code_index/*`
6. 运行 `npm run typecheck`、`npm run build`。

## Legacy 文档处理
- 老的迭代记录、预览记录、机会池、merge readiness 统一归入 `docs/legacy/`。
- `docs/WORKFLOW_AUTOPILOT.md` 的有效规则已吸收到本文件，不再保留并行版本。
