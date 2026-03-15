# Topics Jiaxun

## 模块目标
承接钱氏家训专题的内容数据与页面实现。

## 输入
家训导读、原句案例、图解素材与来源信息。

## 输出
`JiaxunTopicPage` 与专题内容数据。

## 关键职责
- 管理家训专题的唯一内容源。
- 输出专题页面与案例子组件。
- 保持 `/heritage/jiafeng-jiaxun/` 与 `/topics/jiaxun/` 同源。

## 依赖
- `src/shared/ui`
- `src/modules/portal-shell/types.ts`

## 对外暴露接口
- `JiaxunTopicPage`
- `content.ts`

## 不该做什么
- 不定义全站导航。
- 不承担家谱、活动、礼品内容。
