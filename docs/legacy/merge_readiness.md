# Merge Readiness

Last updated: 2026-03-09 18:20:57 CST
Current status: Needs one more iteration

## 本轮改动摘要
- 首页 Hero 侧栏新增移动端可折叠信息组，默认收起“最新动态 + 本周推荐”以降低首屏压力。
- 桌面端展示结构保持不变，确保改动范围限定在移动端体验层。

## 风险说明
- 代码风险低：均为展示层改动，无路由与依赖变更。
- 体验风险中低：移动端折叠交互仍需跨端截图验证点击可发现性。

## 验证结果
- `npm run typecheck`: pass
- `npm run build`: pass

## 待确认项
- 缺少稳定线上 preview（当前无可访问链接）。
- 缺少 `/`、`/genealogy/`、`/events/` 与 `/heritage/` 的桌面端/移动端截图证据用于视觉终审。

## 合并建议
- 当前建议：暂不合并 main。
- 达到以下条件后可切换为 `Ready for main`：
  1. 生成稳定线上预览链接并完成快速走查。
  2. 补齐 `/`、`/genealogy/`、`/events/`、`/heritage/` 的桌面和移动端截图确认。
