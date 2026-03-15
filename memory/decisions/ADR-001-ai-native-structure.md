# ADR-001 AI Native Structure

## Status
Accepted

## Context
旧仓库在根目录直接混放 `app`、`components`、`lib`，内容模块、共享组件、路由入口和历史文档都没有稳定边界，AI 每次进入仓库都要重新建模。

## Decision
- 运行时代码迁入 `src/`。
- 建立 `docs / memory / code_index / tasks / scripts/ai` 五个 AI 基础设施目录。
- 禁止继续扩张巨型 `util/content` 总表，改为按模块维护内容与接口。

## Why
- `src/` 能显式区分运行时代码与仓库基础设施。
- `memory`、`code_index`、`tasks` 能降低重复理解成本。
- 巨型总表会把未来所有变更继续耦合在一起，和 AI-Native 目标相反。

## Consequences
- 路由层必须保持轻量。
- 每个模块需要维护自己的 `module.md`。
- 历史文档要降级为 legacy，不能继续占据主入口。
