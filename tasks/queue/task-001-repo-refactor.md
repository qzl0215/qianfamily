# task-001-repo-refactor

## Goal
把仓库升级为 AI-Native Repo 第一版：完成 `src/` 迁移、模块拆分、规则层/记忆层/索引层/任务层/脚本层落地，并删除一批旧结构。

## Why
旧结构不适合 AI 长期协作、多 agent 并行和持续重构；必须先把仓库骨架搭正，再继续内容迭代。

## Scope
- 迁移运行时代码到 `src/`
- 拆除 `lib/portal-content.ts`
- 建立 docs / memory / code_index / tasks / scripts/ai
- 删除 dead code 与 legacy 并档

## Out of Scope
- 登录、数据库、后台审核
- 小程序与双端结构
- 大面积业务逻辑改写

## Constraints
- 公开路由保持稳定
- 站点继续静态导出
- 当前未提交改动需并入本次结构升级，不单独拆线程

## Related Modules
- `navigation`
- `portal-shell`
- `portal-home`
- `genealogy`
- `events`
- `gifts`
- `heritage`
- `topics/registry`
- `topics/jiaxun`
- `topics/wuyue`
- `topics/figures`

## Acceptance Criteria
- `npm run typecheck`
- `npm run build`
- `npm run ai:scan-health`
- `npm run ai:gen-index`
- 旧 `components/sections/*`、`lib/portal-content.ts`、旧 topic/portal 目录已删除或并档说明

## Risks
- `src/` 主迁移影响路径别名和 Tailwind 扫描
- 兼容专题路由需保持 static params 不变
- 当前脏工作区改动若收口不完整，容易出现遗漏

## Status
- in_progress
