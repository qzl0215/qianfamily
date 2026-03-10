# Merge Readiness

Last updated: 2026-03-11 07:54:29 CST
Current status: Ready for main

## 本轮改动摘要
- 首页按四模块方案完成结构级重置。
- Hero 右侧面板、快速分流、活动预告、礼品预告、最近更新和三卡文化总览已全部删除。
- 家谱区改成真实线索 + 单一寻根主入口；文化区改成唯一锚点 `钱氏家训`。

## 风险说明
- 代码风险可控：仅触达 `lane-home-shell` 与文档，没有改路由、依赖或部署方式。
- 体验风险中低：首页信息密度明显下降，但活动与礼品已从首页主体移除，需要依赖导航进入。
- 当前桌面与移动端截图均已确认只剩四模块主叙事，没有残留旧区块。

## 验证结果
- `npm run typecheck`: pass
- `npm run build`: pass
- 本地截图：`output/playwright/iteration-25/home-desktop.png`、`output/playwright/iteration-25/home-mobile.png`

## 待确认项
- 无阻塞项。

## 合并建议
- 当前建议：直接合并并发布生产。
- 原因：首页结构已按确认方案收口，且已通过类型检查、构建与跨端截图验证。
