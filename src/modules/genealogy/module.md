# Genealogy

## 模块目标
承接家谱中心的总入口、流程页内容和权限说明。

## 输入
谱系归属主线、寻根/续谱/接谱/状态的流程定义。

## 输出
频道事实卡、入口卡、流程页内容、权限结构。

## 关键职责
- 管理家谱中心所有公开说明数据。
- 统一流程页内容结构。
- 为首页与 `/genealogy/**` 输出同源内容。

## 依赖
`src/modules/portal-shell/types.ts`

## 对外暴露接口
- `genealogyCenterCards`
- `genealogyFacts`
- `accessRoles`
- `genealogy*Content`

## 不该做什么
- 不承载活动、礼品、文化专题内容。
- 不实现真实登录与审核逻辑。
