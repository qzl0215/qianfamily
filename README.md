# qianfamily

`qianfamily.online` 当前是静态中文宗亲门户站。本仓库已经完成 AI-Native 第一版结构升级，目标是让后续 Codex / Cursor / 多 agent 能在清晰模块边界内持续演进，而不是每次从零理解整仓库。

## 先读什么
1. `AGENTS.md`
2. `docs/PROJECT_RULES.md`
3. `docs/ARCHITECTURE.md`
4. 对应任务文件 `tasks/queue/*.md`
5. 相关 `src/modules/**/module.md`
6. `code_index/*`
7. `memory/*`

## 当前能力边界
- 已有：
  - `/`
  - `/genealogy/`
  - `/heritage/`
  - `/events/`
  - `/gifts/`
  - `/topics/[slug]/` 兼容专题入口
- 仍未接入：
  - 登录
  - 数据库
  - 后台审核
  - 真实提交表单
  - 在线支付
  - 小程序

## 目录骨架
```text
.
├── src/
│   ├── app/
│   ├── modules/
│   └── shared/
├── docs/
├── memory/
├── code_index/
├── tasks/
├── scripts/
│   └── ai/
├── public/
├── deploy/
└── .github/
```

## 关键目录职责
- `src/app`
  - 路由入口、metadata、兼容路由适配
- `src/modules`
  - 频道模块、首页模块、专题模块、导航模块、页面壳模块
- `src/shared/ui`
  - 无业务归属的基础 UI
- `docs`
  - 规则、架构、工作流、AI operating model、重构计划
- `memory`
  - 当前状态、技术债、经验、ADR
- `code_index`
  - 模块索引、依赖图、函数索引
- `tasks`
  - 任务模板、队列、归档
- `scripts/ai`
  - 健康扫描、模块索引、上下文构建、任务生成

## 开发命令
```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run ai:scan-health
npm run ai:gen-index
```

## 最小验证门槛
- `npm run typecheck`
- `npm run build`

这是静态导出站点，`npm run build` 仍是上线前最关键的回归门槛。

## AI 工作流
```bash
npm run ai:build-context -- --task task-001-repo-refactor
npm run ai:create-task -- --title "..." --goal "..." --why "..." --modules "portal-home,genealogy"
```

## Legacy 文档
- 历史迭代日志、预览链接、机会池、merge readiness 已迁到 `docs/legacy/`。
- 这些文件只保留历史参考价值，不再作为 AI 主入口。

## 部署
- 继续使用 Next.js 静态导出 + Nginx。
- 线上域名保持：
  - `https://qianfamily.online`
  - `https://www.qianfamily.online` -> 301 到主站
- 生产部署工作流仍由 `.github/workflows/deploy.yml` 驱动。
- 版本说明统一存放在 `docs/releases/`，tag 推送后由 `.github/workflows/release.yml` 自动生成或更新 GitHub Release。

初始化一次：

```bash
export AGENT_ID=<your-agent-id>
bash scripts/setup_agent_workflow.sh
```

日常固定流程：

```bash
bash scripts/task_start.sh <topic>
bash scripts/task_check.sh
bash scripts/task_commit.sh "中文备注"
bash scripts/task_pr.sh
```

说明：

1. 目标分支策略是 `dev` 集成、`main` 发布。
2. 当前远端若还没有 `dev`，脚本会临时回退到 `main` 作为 base，并给出提示。
3. 等 `dev` 正式建立后，工作流会自然切换到 `dev -> main` 的结构，不需要再重写脚本。

## 未来演进

未来如果真实启动小程序，再把仓库升级为双端结构，例如：

```text
apps/web
apps/miniapp
packages/shared
```

在那之前，仓库继续保持单体 Next.js 结构。不要为了“未来可能会做小程序”而提前引入空目录、空脚手架或复杂工程层级。
