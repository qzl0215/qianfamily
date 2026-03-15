# AI_OPERATING_MODEL

## AI 标准工作流
1. 读 `docs/PROJECT_RULES.md`
2. 读 `docs/ARCHITECTURE.md`
3. 读对应 task
4. 读相关 `module.md`
5. 读 `code_index/module-index.md`、`code_index/dependency-map.md`
6. 读 `memory/project/current-state.md` 与相关 ADR / experience
7. 构建最小上下文
8. 只修改任务涉及模块
9. 更新 docs / memory / index / task
10. 跑验证并提交 PR

## 上下文压缩原则
- 先模块，后文件，最后函数。
- 优先读 `module.md`、索引和记忆，再读源码。
- 一次只装载当前任务直接相关的模块，避免整仓库全文阅读。
- 对兼容入口如 `/topics/[slug]/`，先读 registry，再读对应专题模块。

## 多 agent 并行原则
- 每个 agent 绑定一个任务文件。
- 默认单任务只碰一个主模块组；结构升级任务除外。
- 公共约束改动必须同步更新规则、索引和记忆，避免其它 agent 在旧假设上继续工作。
- 需要兼容层时，必须写明删除条件，不允许“先留着以后再说”。

## Memory 与 Experience 的用法
- `memory/project/current-state.md`
  - 描述当前仓库真实状态和已落地结构。
- `memory/project/tech-debt.md`
  - 记录还没解决的问题，不把它们埋在代码注释里。
- `memory/experience/*.md`
  - 沉淀已验证经验，减少下一轮试错。
- `memory/decisions/*.md`
  - 沉淀不会频繁改动的架构决策。

## 不该做的事
- 不要跳过 task 直接在仓库里“顺手优化”。
- 不要绕过 `module.md` 从全局搜索开始理解模块。
- 不要创建没有公共职责说明的新抽象层。
- 不要把历史文档当成当前权威入口。
