# ARCHITECTURE

## 系统目标
- 继续维护一个单体 Next.js 静态导出门户站。
- 把“文化认同 → 谱系归属 → 宗亲连接 → 参与行动 → 内容回流”固化为全站主线。
- 让 AI 在修改任一功能前，只需要读取小范围模块，而不是整仓库反复建模。

## 当前分层
- `src/app`
  - Next.js 路由层，只负责 route entry、`generateMetadata`、`generateStaticParams` 和页面装配。
- `src/modules/navigation`
  - 站点导航、页脚导航组、站点 metadata。
- `src/modules/portal-shell`
  - PageHero、CardSection、FaqSection、WorkflowPage、DetailPage 以及共享内容类型。
- `src/modules/portal-home`
  - 首页内容、首页动态推荐逻辑、首页主视图。
- `src/modules/genealogy`
  - 家谱中心概览、权限说明、寻根/续谱/接谱/状态流程页数据。
- `src/modules/events`
  - 活动概览、年度安排、回顾卡片、活动详情数据、个人活动工作台内容。
- `src/modules/gifts`
  - 礼品概览、场景卡、礼品详情、订单说明内容块。
- `src/modules/heritage`
  - 文化总频道概览、首页文化卡片、故事入口。
- `src/modules/topics/*`
  - 家训、吴越、人物专题页面与专题内容源。
- `src/shared/ui`
  - 无业务归属的基础 UI。

## 数据流
1. 路由从 `src/app/**` 进入。
2. 路由层选择对应模块页面或模块内容。
3. 模块内容进入 `portal-shell` 页面壳或专题页面组件。
4. 页面壳使用 `src/shared/ui` 基础组件输出静态页面。
5. AI 脚本读取 `docs`、`memory`、`tasks`、`module.md`、`code_index` 构建上下文。

## 第一批高价值微模块
- `portal-shell`
  - 解决跨频道重复页面壳。
- `portal-home`
  - 解决首页内容与推荐逻辑耦合。
- `genealogy/events/gifts/heritage`
  - 解决 `lib/portal-content.ts` 巨型内容仓库问题。
- `topics/registry`
  - 解决 `/topics/[slug]/` 兼容入口分散映射问题。
- `topics/jiaxun`、`topics/wuyue`、`topics/figures`
  - 解决专题内容与专题组件分散在 `components/`、`lib/` 两处的问题。

## 关键边界
- `/topics/[slug]/` 是兼容专题入口，不是主导航方向。
- 家谱、活动、礼品当前仍以“公开说明 + 未来登录后动作”为主，不接入真实业务状态。
- `docs/legacy/` 只保留历史记录，不作为未来 AI 工作流主入口。

## 禁止的调用方式
- 禁止 `src/app/**` 直接依赖多个频道模块的内部私有文件。
- 禁止模块从其他模块的非公开文件路径读取内容。
- 禁止新建新的巨型内容总表替代 `portal-content.ts`。
- 禁止把频道专属逻辑继续塞回 `src/shared/`。
