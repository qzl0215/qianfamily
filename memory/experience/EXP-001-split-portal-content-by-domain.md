# Split Portal Content By Domain

## Context
旧 `lib/portal-content.ts` 同时承载首页、频道卡、流程页、详情页和共享类型，导致任何内容改动都必须通读 1000+ 行文件。

## Decision
按 `portal-home / genealogy / events / gifts / heritage / topics` 拆分内容源，把共享类型下沉到 `portal-shell/types.ts`。

## Why
内容域才是这个门户站最常改的部分，先按频道拆内容比继续扩大一个总表更有利于 AI 理解与多 agent 并行。

## Impact
频道页和详情页不再依赖单一巨型文件，路由适配层更清晰。

## Reuse
后续新增频道时，先建模块目录与 `module.md`，不要往任何全局内容总表追加。
