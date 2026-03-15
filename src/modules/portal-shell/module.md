# Portal Shell

## 模块目标
承接门户站通用页面壳层，统一 Hero、卡片区、FAQ、流程页与详情页模板。

## 输入
`PortalCard`、`PortalFact`、`WorkflowPageContent`、`DetailPageContent`。

## 输出
可在频道页、流程页、详情页复用的稳定页面组件。

## 关键职责
- 统一门户页面模板与信息层级。
- 提供内容模块可复用的展示壳。
- 收敛跨频道重复 UI 结构。

## 依赖
`src/shared/ui/*`

## 对外暴露接口
- `PageHero`
- `CardSection`
- `FaqSection`
- `WorkflowPage`
- `DetailPage`
- `types.ts`

## 不该做什么
- 不承载具体频道文案。
- 不直接定义业务路由与内容数据。
- 不新增频道专属判断分支。
