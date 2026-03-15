# REFACTOR_PLAN

## 当前问题总览
- 旧结构以 `app/ + components/ + lib/` 为主，页面入口、共享 UI、领域内容没有清晰边界。
- `lib/portal-content.ts` 既存类型、又存导航、首页、频道内容、流程页、详情页，是最大理解与改动瓶颈。
- 首页与专题页存在巨型组件，AI 每次改动都要重读大量无关片段。
- 旧文档以迭代日志为中心，缺少规则层、记忆层、索引层和任务层。
- 旧 `scripts/task_*` 只覆盖 Git 流程，未覆盖 AI 上下文构建、健康扫描、任务生成。

## 最值得优先处理的 10 个问题
1. `lib/portal-content.ts` 巨型内容文件。
2. `components/portal/PortalHomePage.tsx` 巨型首页组件。
3. 专题内容与专题组件分散在 `components/topics/*` 与 `lib/*-content.ts`。
4. 根目录 `app/components/lib` 结构对 AI 不友好。
5. `/topics/[slug]/` 兼容路由缺少统一 registry。
6. `WorkflowPage` / `DetailPage` / `PageHero` 的内容类型绑在旧巨型文件上。
7. 旧 docs 缺少可执行规则与记忆。
8. 缺少 `module.md`、module index、dependency map、function index。
9. 缺少代码健康扫描和 AI 任务生成脚本。
10. 存在完全未使用的旧组件：`components/sections/*`。

## 目标目录结构建议
```text
src/
├─ app/
├─ modules/
│  ├─ navigation/
│  ├─ portal-shell/
│  ├─ portal-home/
│  ├─ genealogy/
│  ├─ events/
│  ├─ gifts/
│  ├─ heritage/
│  └─ topics/
│     ├─ registry/
│     ├─ jiaxun/
│     ├─ wuyue/
│     └─ figures/
└─ shared/
   └─ ui/
```

## 第一批建议拆分的模块
- `portal-shell`
- `portal-home`
- `genealogy`
- `events`
- `gifts`
- `heritage`
- `topics/registry`
- `topics/jiaxun`
- `topics/wuyue`
- `topics/figures`

## 高风险点
- `src/` 主迁移会同时影响 TypeScript 路径别名和 Tailwind 扫描路径。
- `/topics/[slug]/` 兼容入口必须保持可构建的 slug 列表与 metadata。
- 旧脏工作区改动需要被完整吸收，不能在迁移中误删。
- 删除 `components/sections/*` 时要确认无残余引用。

## 本次重构边界
- 做：
  - `src/` 主迁移
  - 内容模块拆分
  - 规则/记忆/索引/任务/脚本骨架
  - 旧死代码删除
- 不做：
  - 登录、数据库、后台审核
  - 小程序与多端结构
  - SSR/Node 常驻服务
  - 大面积业务文案重写

## 执行优先级
1. 先让新结构可运行。
2. 再让 AI 文档与脚本可用。
3. 再删除旧结构与 legacy 并完成收口。
