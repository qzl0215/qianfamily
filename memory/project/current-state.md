# Current State

## 当前仓库状态
- 运行时代码已迁到 `src/`。
- 站点仍是单体 Next.js 静态导出门户站。
- 公开路径保持不变，`/topics/[slug]/` 继续作为兼容入口。
- 旧 `lib/portal-content.ts` 已被内容模块替代，准备彻底删除。

## 当前目录重心
- `src/app`
  - 路由与 metadata 适配层。
- `src/modules`
  - 频道、首页、专题、导航、页面壳。
- `src/shared/ui`
  - 基础 UI。
- `docs`
  - 规则、架构、AI 工作流与重构计划。
- `memory`
  - 架构、项目状态、经验、ADR。
- `code_index`
  - 模块索引、依赖图、函数索引。
- `tasks`
  - 队列、归档、模板。
- `scripts/ai`
  - 上下文构建、健康扫描、模块索引、任务生成。

## 已解决问题
- 根目录运行时代码不再混放。
- 内容域按频道拆分。
- 兼容专题路由有统一 registry。
- 旧 section 组件已识别为待删死代码。

## 当前仍保留的现实约束
- 仍无数据库、无登录、无表单提交、无真实订单。
- 仍以 `npm run typecheck` 与 `npm run build` 作为最小验证闭环。
- 仍无正式 lint / test 流程。
