# Topics Registry

## 模块目标
统一管理 `/topics/[slug]/` 兼容专题入口的 slug、元数据和路由映射。

## 输入
兼容专题 slug 与对应正式专题页面。

## 输出
`topicRoutes`、`getTopicRoute`、`TopicSlug`

## 关键职责
- 维护兼容专题入口的唯一注册表。
- 为动态路由提供稳定 static params。
- 明确兼容入口与正式频道之间的映射关系。

## 依赖
无

## 对外暴露接口
- `topic-routes.ts`

## 不该做什么
- 不承载专题正文内容。
- 不替代正式频道路由。
