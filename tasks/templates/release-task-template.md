# {{TASK_ID}}

## Goal
完成一次可发布版本的收口、验证、打 tag 与 release 同步。

## Why
避免“代码已发、版本未记”或“有 tag 但无仓库内版本说明”的失配。

## Scope
- 更新 `docs/releases/vX.Y.Z.md`
- 运行版本一致性检查
- 确认 `dev -> main` 合并状态
- 创建并推送 tag
- 确认 GitHub Release 与生产发布状态

## Out of Scope
- 不在发版任务里夹带新的业务功能开发。

## Constraints
- `package.json` 版本号、tag、release note 文件名必须一致。
- 发布说明只写已发生事实，不写未来猜测。
- 发布前至少确认 `npm run typecheck`、`npm run build`。

## Related Modules
- `docs/releases`
- `.github/workflows/release.yml`
- `.github/workflows/deploy.yml`
- `scripts/quality/verify-release.js`

## Acceptance Criteria
- `npm run release:check -- --tag vX.Y.Z`
- Git tag 已推送
- GitHub Release 已生成或更新
- 若触达 `main`，生产 deploy 已完成

## Risks
- tag 与 `package.json` 版本号不一致
- release note 缺节或内容过期
- 误把未验证提交直接推到 `main`

## Status
- planned
