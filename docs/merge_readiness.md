# Merge Readiness

Last updated: 2026-03-09 14:08:46 CST
Current status: Needs one more iteration

## 本轮改动摘要
- 首页分流卡增加“轻量投入预期”（耗时/准备量）。
- 家谱页新增“常见退回原因 TOP5 + 修正建议”模块。
- 活动页新增“本月关键时间点”微时间轴模块。

## 风险说明
- 代码风险低：均为静态内容与模块增量，无路由与依赖变更。
- 体验风险中低：新增信息密度提升，需通过移动端实机截图再次确认阅读压力。

## 验证结果
- `npm run typecheck`: pass
- `npm run build`: pass

## 待确认项
- 缺少本轮对应的线上预览链接。
- 缺少桌面端/移动端截图证据用于视觉终审。

## 合并建议
- 当前建议：暂不合并 main。
- 达到以下条件后可切换为 `Ready for main`：
  1. 生成可访问预览链接并完成快速走查。
  2. 补齐首页、/genealogy/、/events/ 的桌面和移动端截图确认。
