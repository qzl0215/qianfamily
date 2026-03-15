# Keep Topics As Compat Registry

## Context
`/topics/[slug]/` 仍有兼容价值，但已经不是主导航方向。

## Decision
保留 `/topics/[slug]/`，同时用 `topics/registry` 统一管理 slug 和正式专题映射。

## Why
直接删除兼容入口会带来不必要的外链与历史路径风险；继续散落维护则会增加 AI 理解成本。

## Impact
兼容层被收敛为一个明确模块，后续删除条件也更容易追踪。

## Reuse
遇到旧入口兼容问题时，优先做 registry，而不是把兼容逻辑塞回各个页面。
