# qianfamily 协作约定

本文件用于让新线程或新协作者进入仓库后，先理解项目定位、开发边界和协作习惯，再开始动代码。

## 1. 项目定位

1. `qianfamily` 当前是 `qianfamily.online` 的静态中文宗亲门户站。
2. 技术形态是单体 Next.js 静态导出站点，不是已经接入真实登录、数据库和后台审核的业务系统，也还没有小程序。
3. 当前站点主逻辑是：
   - 文化认同
   - 谱系归属
   - 宗亲连接
   - 参与行动
   - 内容回流
4. 任何会把仓库升级为多端工程、小程序工程、后台工程的改动，都不属于默认范围。

## 2. 沟通格式

每次回复默认使用以下顺序：
1. `【一句话结论】`
2. `【本轮新增价值】`
3. `【对目标的影响】`
4. `【下一步】`
5. `【需我决策】`

附加要求：
1. 结论优先，不要先汇报过程。
2. 默认使用高密度、决策导向表达，不写流水账。
3. 不要默认汇报“看了几个文件、跑了几个命令、调用了什么工具”，除非这些信息直接影响判断。
4. 不要使用“已完成清单 / 超预期完成清单 / 计划下阶段待办 / 已浏览若干文件”这一类流水账结构。
5. 只有当真实存在阻塞、策略分叉或用户必须拍板时，才写 `【需我决策】`；否则明确写“无”。
6. 除非用户明确要求详细过程，否则优先讲判断、边界、影响和下一步。

## 3. Git 与协作规则

1. 目标流程是：
   - `dev` 作为集成分支
   - `main` 作为发布分支
   - 日常开发分支固定为 `codex/<agent-id>/<topic>`
2. 当前远端事实仍可能只有 `main`，`dev` 还未建立；仓库内的轻量 `task_*` 流程已补齐，并会在无 `dev` 时临时回退到 `main`。
3. 在 Git 流程补齐前，不要在 `main` 上直接提交功能改动；优先从当前基线切出 `codex/<agent-id>/<topic>` 工作分支。
4. 当后续补齐 `dev` 后，默认从 `dev` 起分支，不再从 `main` 直接开工。
5. 任何涉及分支治理、PR 模板、轻量工作流脚本的改动，都应单独成一次初始化任务，不要和页面内容改动混在一起。

## 4. 当前代码泳道

单次任务默认只触达一个主泳道；如需补文档或测试，可额外触达 `lane-docs-tests`。

- `lane-home-shell`
  - `app/layout.tsx`
  - `app/page.tsx`
  - `components/portal/**`
  - `components/sections/**`
  - `components/ui/**`
  - `lib/portal-content.ts`
  - `lib/site-meta.ts`
- `lane-portal-pages`
  - `app/genealogy/**`
  - `app/heritage/**`
  - `app/events/**`
  - `app/gifts/**`
- `lane-topics-compat`
  - `app/topics/**`
  - `components/topics/**`
  - `lib/*-content.ts`
  - `lib/topic-routes.ts`
- `lane-style-assets`
  - `app/globals.css`
  - `tailwind.config.ts`
  - `app/materials/**`
  - `public/**`
- `lane-deploy-ci`
  - `.github/**`
  - `deploy/**`
- `lane-docs-tests`
  - `AGENTS.md`
  - `README.md`
  - `docs/**`
  - 后续测试文件

默认不要跨泳道顺手改动无关内容。

## 5. 对外契约边界

1. 当前公开内容路径至少包括：
   - `/`
   - `/genealogy/`
   - `/heritage/`
   - `/events/`
   - `/gifts/`
   - `/topics/[slug]/`（兼容专题入口）
2. 当前专题集合以 `lib/topic-routes.ts` 为准。
3. 当前线上域名为：
   - `https://qianfamily.online`
   - `https://www.qianfamily.online` 仅做 301 跳转
4. 非明确授权，不要默认修改：
   - 门户信息架构
   - 域名策略
   - 路由结构
   - 静态导出部署方式
   - Nginx 发布模型

## 6. 验证规则

1. 当前最小验证闭环只有：
   - `npm run typecheck`
   - `npm run build`
2. 这是静态导出站点，`npm run build` 直接对应上线前最关键的验证。
3. 当前仓库还没有正式接入 lint / test 流程；若未执行，不要表述成“已完成全量验证”。
4. 若任务只改文档，可说明未运行构建，并明确原因。

## 7. 产物与临时文件

1. `.next/`、`out/`、本地预览截图、`output/` 默认视为本地验证或导出产物。
2. 除非任务明确要求，不要把这些产物当作功能交付内容。
3. 若任务需要截图或导出结果，优先说明其用途，不要把临时产物和源码改动混为一谈。

## 8. 小程序与结构升级边界

1. 当前仓库没有小程序目录，也没有 `apps/miniapp`、`miniprogram`、`taro`、`uni-app` 工具链。
2. 任何引入小程序结构、双端目录、共享包目录的改动，都视为“结构升级任务”。
3. 结构升级任务必须单独线程、单独 PR，不允许在当前网站内容迭代里顺手带入。
4. 在小程序真实启动前，仓库继续保持单体 Next.js 静态站结构，不为了“未来可能”提前制造迁移成本。
