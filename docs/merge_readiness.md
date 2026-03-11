# Merge Readiness

Last updated: 2026-03-11 19:56:00 CST
Current status: Ready for main

## 本轮改动摘要
- 首页继续做低风险收口：Hero 顶部标签层级改成单一内容锚点。
- `钱氏宗亲` 已替换为 `钱氏家训`。
- 标题下方重复的来源标签已删除，首屏不再双层标注。

## 风险说明
- 代码风险低：仅触达 `lane-home-shell` 与文档，没有改路由、依赖或部署方式。
- 体验风险极低：仅修改首屏标签层级，不改变布局与入口。
- 当前桌面截图已确认首屏更干净，没有引入新的视觉负担。

## 验证结果
- `npm run typecheck`: pass
- `npm run build`: pass
- 本地截图：`output/playwright/iteration-30/home-desktop.png`

## 待确认项
- 无阻塞项。

## 合并建议
- 当前建议：直接合并并发布生产。
- 原因：本轮属于首页 Hero 标签层级收口，且已通过类型检查、构建与截图验证。
