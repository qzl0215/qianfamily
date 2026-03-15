# Tech Debt

## 当前技术债
- 家训专题页仍是高体量页面，后续可继续把 anchor、hero、章节块拆为专题内子组件。
- `GenealogyPage` 与 `EventsPage` 已进入模块层，但页面本身仍偏大，后续可继续拆为频道内 section 组件。
- `portal-home` 已拆出 section 组件，但首屏 `HomeHeroSection` 仍是相对复杂的单文件。
- 当前没有正式测试文件，功能回归仍依赖 typecheck + build。
- `docs/legacy/` 中保留的历史记录尚未完全索引化，后续可按主题归档。

## 已显式收口但未继续推进的项
- `/topics/[slug]/` 仍保留兼容层，删除前提是外部链接与内容入口完成迁移。
- 礼品与活动仍是“公开说明优先”，真实用户工作台尚未上线。
- 代码健康扫描第一版为规则扫描，不做 AST 级深度分析。
