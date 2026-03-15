# task-002-home-shell-micro-split

## Goal
继续拆分首页与频道大页面，降低单文件体量

## Why
当前首页与部分频道页仍然过大，影响 AI 局部理解效率

## Scope
- 将 `src/app/genealogy/page.tsx` 收窄为路由壳，页面主体迁入 `src/modules/genealogy/GenealogyPage.tsx`
- 将 `src/app/events/page.tsx` 收窄为路由壳，页面主体迁入 `src/modules/events/EventsPage.tsx`
- 将 `src/modules/portal-home/PortalHomePage.tsx` 拆为若干首页 section 组件
- 同步更新技术债与索引产物

## Out of Scope
- 不改变门户信息架构与公开路径，除非任务显式要求。

## Constraints
- 保持静态导出站点边界。
- 新增逻辑必须伴随清理或迁移说明。

## Related Modules
- `portal-home`
- `genealogy`
- `events`

## Acceptance Criteria
- `npm run typecheck`
- `npm run build`
- 相关 docs / memory / code_index 已同步更新

## Risks
- 首页 section 拆分后若导入边界处理不当，容易形成模块循环引用
- 频道页虽然已下沉到模块层，但局部页面组件仍可能继续偏大，后续仍需二次细拆

## Status
- completed
