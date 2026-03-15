# Events

## 模块目标
承接祭祖活动频道的活动卡片、详情页数据和个人活动流程说明。

## 输入
宗亲连接主线、活动详情、年度安排与回顾信息。

## 输出
活动概览卡、年度/回顾卡、详情页数据、个人活动工作台内容。

## 关键职责
- 管理活动频道所有公开内容配置。
- 为详情路由提供统一 slug 数据源。
- 统一活动个人记录说明页内容。

## 依赖
`src/modules/portal-shell/types.ts`

## 对外暴露接口
- `upcomingEventCards`
- `eventsOverviewFacts`
- `eventCalendarCards`
- `eventHistoryCards`
- `eventDetails`
- `eventsMyContent`

## 不该做什么
- 不实现真实报名、签到和通知系统。
- 不承载文化专题与礼品数据。
