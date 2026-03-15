# Migrate Runtime Into Src

## Context
旧仓库在根目录直接放 `app/components/lib`，AI 很难区分路由层、模块层和共享层。

## Decision
把运行时代码整体迁到 `src/`，同时借迁移机会完成模块边界重建。

## Why
如果先只建 docs，不迁运行时代码，仓库会长期处于“双结构并存”的高噪音状态。

## Impact
路径别名、Tailwind 扫描、路由入口和模块文档全部围绕 `src` 对齐。

## Reuse
未来若再做结构升级，应优先减少并存结构持续时间，而不是长时间保留新旧双轨。
