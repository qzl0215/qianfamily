# System Overview

## Context
`qianfamily` 当前是静态中文宗亲门户站，目标是稳定承接“文化认同、谱系归属、宗亲连接、参与行动、内容回流”五段主线。

## 系统目标
- 让门户站在保持静态导出的前提下，具备清晰的模块边界。
- 让 AI 在局部上下文内完成改动，而不是重读全仓。
- 让经验、任务、索引和决策能持续沉淀。

## 核心模块
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

## 数据流
1. `src/app/**` 进入路由。
2. 路由读取模块导出内容或模块页面组件。
3. `portal-shell` 负责通用页面壳。
4. `shared/ui` 提供无业务归属的基础组件。
5. `scripts/ai/*` 读取 docs、tasks、memory、index，为 AI 构建上下文。

## 关键边界
- 路由层不定义频道正文。
- 频道模块不定义全站导航。
- 兼容专题入口必须通过 registry。
- 共享 UI 不能掺入频道业务语义。

## 禁止的调用方式
- 禁止模块跨目录读取其他模块的内部实现文件。
- 禁止重新创建巨型内容总表。
- 禁止把频道专属逻辑放回 `src/shared/`。
