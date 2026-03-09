# qianfamily 轻量工作流

目标：让协作者和 Codex 新线程进入仓库后，不需要重新确认分支、提交格式和最小验证入口。

## 1. 首次初始化

```bash
export AGENT_ID=<your-agent-id>
bash scripts/setup_agent_workflow.sh
```

会完成：

1. 配置 `core.hooksPath=.githooks`
2. 检查 `node`、`npm`、`git`、`gh auth`
3. 让 `task_*` 和 hooks 可直接执行

## 2. 日常固定流程

```bash
bash scripts/task_start.sh <topic>
bash scripts/task_check.sh
bash scripts/task_commit.sh "中文备注"
bash scripts/task_pr.sh
```

说明：

1. 目标流程是 `dev` 集成、`main` 发布。
2. 若远端还没有 `dev`，脚本会自动回退到 `main` 作为 base，并给出提示。
3. 当前最小验证仍然只有：
   - `npm run typecheck`
   - `npm run build`

## 3. 强制规则

1. 直接在 `dev/main` 上开发是违规行为。
2. 工作分支必须是 `codex/<agent-id>/<topic>`。
3. 提交标题必须符合 `YYYY-MM-DD HH:MM 中文备注`。
4. 直接 push 到 `dev/main` 会被 pre-push 拦截。

## 4. 当前不做的事

1. 当前不引入 preview 发布链路。
2. 当前不引入小程序目录与双端脚手架。
3. 当前不假装已经具备 lint/test 全套质量门禁。
