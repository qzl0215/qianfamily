# Heritage

## 模块目标
承接文化传承频道的核心导读内容，包括家训、吴越、人物和故事入口。

## 输入
文化主线文案与内容回流入口设计。

## 输出
`homeNarrativeCards`、`cultureHighlightCards`、`storyCards`、`heritageOverviewFacts`。

## 关键职责
- 定义文化认同层的首页预览与频道入口。
- 为首页和 `/heritage/` 输出统一内容源。
- 维护故事栏目与其他频道的连接关系。

## 依赖
`src/modules/portal-shell/types.ts`

## 对外暴露接口
- `content.ts`

## 不该做什么
- 不承载家谱、活动、礼品流程数据。
- 不直接实现专题页面组件。
