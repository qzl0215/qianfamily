# Navigation

## 模块目标
集中管理站点导航、页脚导航组和站点级元信息。

## 输入
站点公开路径与门户频道信息架构。

## 输出
`SiteHeader`、`SiteFooter`、导航配置、站点元信息。

## 关键职责
- 维护稳定的主导航。
- 管理页脚分组入口。
- 输出站点级 metadata 配置。

## 依赖
`src/shared/ui/Container`

## 对外暴露接口
- `mainNavItems`
- `footerLinkGroups`
- `SiteHeader`
- `SiteFooter`
- `siteMeta`

## 不该做什么
- 不承载频道正文内容。
- 不混入页面级业务判断。
