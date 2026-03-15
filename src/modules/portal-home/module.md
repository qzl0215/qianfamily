# Portal Home

## 模块目标
承接门户首页的主逻辑、首屏推荐和首页专属内容配置。

## 输入
首页导向文案、动态卡片、频道预览与主线顺序。

## 输出
`PortalHomePage`、首页内容配置、首页推荐逻辑、首页 section 组件。

## 关键职责
- 输出首页主线与状态分流内容。
- 收敛首页专属推荐逻辑。
- 将首页大页面拆为可独立理解的 section 组件。
- 作为首页唯一模块入口，避免在路由文件内堆叠内容。

## 依赖
- `src/modules/portal-shell`
- `src/modules/heritage`
- `src/modules/genealogy`
- `src/modules/events`
- `src/modules/gifts`

## 对外暴露接口
- `PortalHomePage`
- `content.ts`
- `recommendations.ts`

## 不该做什么
- 不承载其他频道的内部流程实现。
- 不定义全站导航与站点元信息。
