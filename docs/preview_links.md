# Preview Links

Last updated: 2026-03-10 16:03:00 CST

## Latest
- Status: 可访问（本地静态预览可访问）。
- URL: http://127.0.0.1:4173
- Branch: `codex/40af/evolution-11`
- Commit: `未提交（Iteration 11 工作区）`
- Scope: Iteration 11 活动页新增“报名前 2 分钟自检”模块，并补齐四页跨端截图证据包。
- Evidence: `curl -I http://127.0.0.1:4173` 返回 `HTTP/1.0 200 OK`。
- Screenshots:
  - `output/playwright/iteration-11/home-desktop.png`
  - `output/playwright/iteration-11/home-mobile.png`
  - `output/playwright/iteration-11/genealogy-desktop.png`
  - `output/playwright/iteration-11/genealogy-mobile.png`
  - `output/playwright/iteration-11/events-desktop.png`
  - `output/playwright/iteration-11/events-mobile.png`
  - `output/playwright/iteration-11/heritage-desktop.png`
  - `output/playwright/iteration-11/heritage-mobile.png`

## Notes
- 当前为本机临时预览链接，适合快速走查，不等同于稳定线上 preview。
- 本轮已通过 `npx playwright screenshot` 产出四页跨端截图证据包，替代受阻的 Playwright MCP 会话通道。
