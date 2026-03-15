# PROJECT_RULES

## 项目定位
- `qianfamily` 当前是 `qianfamily.online` 的静态中文宗亲门户站。
- 本轮重构目标是让仓库更适合 AI 长期协作，不是把项目升级成后台系统、小程序工程或多端平台。
- 公开契约保持稳定：`/`、`/genealogy/`、`/heritage/`、`/events/`、`/gifts/`、`/topics/[slug]/`。

## AI-Native 基本规则
- 先读 `docs/PROJECT_RULES.md`，再读 `docs/ARCHITECTURE.md`，再读 task、`module.md`、`code_index/*`、`memory/*`。
- `src/app/**` 只负责路由与元数据适配，不承载大段频道正文与复杂判断。
- 新增逻辑必须优先放入 `src/modules/<module-id>/`；共享基础能力放入 `src/shared/`。
- 模块对外暴露优先通过 `index.ts`；禁止跨模块直接依赖另一个模块的内部私有文件。
- 新增抽象必须有清晰职责，不能为了“以后可能需要”提前搭平台层。

## 文件与模块治理
- 代码文件建议控制在 200 行以内；超过 300 行必须说明为何未继续拆分。
- `module.md` 是模块的必需品；新模块没有 `module.md` 视为未完成。
- 禁止继续扩张 `utils`、`helpers`、`common`、`misc`、`temp`、`final`、`new`、`v2` 这类模糊承载层。
- 重复逻辑要向内容模块、页面壳模块或共享组件收敛，不允许复制一份“差不多”的实现继续演化。
- 临时兼容逻辑必须显式标注目的、去向和删除条件。

## 结构边界
- `src/modules/navigation` 负责站点级导航与元信息。
- `src/modules/portal-shell` 负责通用页面壳与内容类型。
- `src/modules/portal-home` 负责首页内容与首页推荐逻辑。
- `src/modules/genealogy`、`events`、`gifts`、`heritage` 各自负责频道内容与流程数据。
- `src/modules/topics/*` 负责专题内容；`src/modules/topics/registry` 负责兼容专题路由注册。
- `src/shared/ui` 只放无频道归属的基础 UI。

## 验证门槛
- 最小必跑验证仍然只有：
  - `npm run typecheck`
  - `npm run build`
- 新增 AI 脚本的最小验证：
  - `npm run ai:scan-health`
  - `npm run ai:gen-index`
- 未执行的验证不能写成“已完成全量验证”。

## 文档与记忆
- 规则、架构、任务、记忆、索引都属于仓库运行基础设施，不是可有可无的附属文档。
- 做完结构性改动后，必须同步更新：
  - `docs/ARCHITECTURE.md`
  - `memory/project/current-state.md`
  - `memory/project/tech-debt.md`
  - `code_index/*`
- 历史迭代记录只放在 `docs/legacy/`，不再作为 AI 主入口。
