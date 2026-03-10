# Merge Readiness

Last updated: 2026-03-10 17:37:26 CST
Current status: Preview only, not ready for main

## 本轮改动摘要
- 首页删除 Hero 次要提示、侧栏建议卡、首次来站建议路径段与动作后回流段。
- 首页关键文案继续保持用户导向，只保留直接服务于决策的内容。
- 已生成首页桌面端与移动端截图证据（`output/playwright/iteration-13/`）。
- 本地 preview 可访问（`http://127.0.0.1:4173`）。

## 风险说明
- 代码风险低：仅首页静态内容减法，无路由与依赖变更。
- 体验风险低：首页信息密度下降，主路径更直接。
- 工具风险低：截图已通过 `npx playwright screenshot` 稳定产出。

## 验证结果
- `npm run typecheck`: pass
- `npm run build`: pass

## 待确认项
- 缺少本轮分支对应的稳定线上 preview（当前为本地临时链接）。
- 缺少一次基于首页双端截图的人工视觉终审结论（通过/需微调）。

## 合并建议
- 当前建议：暂不合并 main。
- 达到以下条件后可切换为 `Ready for main`：
  1. 生成稳定线上预览链接并完成快速走查。
  2. 对 `output/playwright/iteration-12/` 证据包完成人工终审并确认无需额外微调。
