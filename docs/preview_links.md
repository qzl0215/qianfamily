# Preview Links

Last updated: 2026-03-10 16:50:47 CST

## Latest
- Status: 可访问（本地静态预览可访问）。
- URL: http://127.0.0.1:4173
- Branch: `codex/40af/evolution-12`
- Commit: `未提交（Iteration 12 工作区）`
- Scope: Iteration 12 首页增强（推荐卡跳过入口 + 状态分流区动作后回流三卡）。
- Evidence: `curl -I http://127.0.0.1:4173` 返回 `HTTP/1.0 200 OK`。
- Screenshots:
  - `output/playwright/iteration-12/home-desktop.png`
  - `output/playwright/iteration-12/home-mobile.png`

## Notes
- 当前为本机临时预览链接，适合快速走查，不等同于稳定线上 preview。
- 本轮已通过 `npx playwright screenshot` 产出首页跨端截图证据，重点用于首屏与状态分流区终审。
