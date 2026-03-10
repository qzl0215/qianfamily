# Merge Readiness

Last updated: 2026-03-10 11:28:12 CST
Current status: Needs one more iteration

## 本轮改动摘要
- 首页“本周推荐”升级为三步执行清单，并补齐“完成后去寻根”的二跳入口。
- 首页“四个主动作”改为差异化 CTA 文案，减少入口语义重复。
- 首页状态分流区新增默认起步提示，降低首次访客决策犹豫。
- 本地 preview 可访问（`http://127.0.0.1:4173`）。

## 风险说明
- 代码风险低：均为静态内容与文案层增量，无路由与依赖变更。
- 体验风险中低：首页信息密度提升后，仍需跨端截图确认可读性与按钮可达性。
- 工具风险中：Playwright MCP 与本机浏览器现有会话冲突，导致截图任务中断。

## 验证结果
- `npm ci`: pass
- `npm run typecheck`: pass
- `npm run build`: pass

## 待确认项
- 缺少稳定线上 preview（当前为本地临时链接）。
- 缺少 `/`、`/genealogy/`、`/events/` 与 `/heritage/` 的桌面端/移动端截图证据用于视觉终审（本轮截图执行被会话冲突阻断）。

## 合并建议
- 当前建议：暂不合并 main。
- 达到以下条件后可切换为 `Ready for main`：
  1. 生成稳定线上预览链接并完成快速走查。
  2. 补齐 `/`、`/genealogy/`、`/events/`、`/heritage/` 的桌面和移动端截图确认。
