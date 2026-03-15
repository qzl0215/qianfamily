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
