# Topics Wuyue

## 模块目标
承接钱王与吴越专题的内容数据与页面实现。

## 输入
历史时间线、历史判断与参考来源。

## 输出
`WuyueTopicPage` 与专题内容数据。

## 关键职责
- 统一吴越专题内容与页面。
- 为正式频道页与兼容专题页提供同源实现。

## 依赖
`src/shared/ui/TimelineItem`

## 对外暴露接口
- `WuyueTopicPage`
- `content.ts`

## 不该做什么
- 不承载其他专题正文。
- 不混入站点级配置。
