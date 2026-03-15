# Releases

## 目标
`docs/releases/` 是版本发布的唯一正文来源。Git tag、GitHub Release 和仓库内版本说明应保持同名、同内容、同版本号。

## 命名规则
- 正式版本文件：`docs/releases/vX.Y.Z.md`
- 模板文件：`docs/releases/_template.md`
- 第一行必须是版本标题，例如：

```md
# qianfamily v0.1.0
```

## 最小内容要求
- 发布日期
- 本版主题
- 重点变化
- 已解决的问题
- 保持不变的对外契约
- 验证结果
- 已知后续项

## 发布顺序
1. 更新 `docs/releases/vX.Y.Z.md`
2. 确保 `package.json` 的 `version` 与目标版本一致
3. 运行：
   ```bash
   npm run release:check -- --tag vX.Y.Z
   ```
4. 将待发布代码合并到 `main`
5. 创建 tag：`git tag -a vX.Y.Z -m "vX.Y.Z"`
6. 推送 tag：`git push origin vX.Y.Z`
7. `release.yml` 自动读取 `docs/releases/vX.Y.Z.md` 创建或更新 GitHub Release

## 纪律
- 不允许只有 tag 没有 release note
- 不允许只有 GitHub Release 没有仓库内版本说明
- 不允许 `package.json` 版本号与 tag 脱节
- 同一版本的 release note 修改后，可用 `workflow_dispatch` 重新执行 `release.yml` 覆盖 GitHub Release
- 发布说明应只写已发生事实，不写未来猜测
