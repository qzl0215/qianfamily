# Dependency Map

## Runtime Layers
- `src/app` -> `src/modules/*`
- `src/modules/portal-home` -> `portal-shell`、`heritage`、`genealogy`、`events`、`gifts`
- `src/modules/genealogy|events|gifts|heritage` -> `portal-shell/types`
- `src/modules/topics/*` -> `src/shared/ui`，必要时依赖 `portal-shell/types`
- `src/modules/navigation` -> `src/shared/ui`
- `src/shared/ui` -> no module dependency

## Forbidden Directions
- `src/shared/*` -> `src/modules/*`
- `src/modules/*` -> `src/app/*`
- 任意模块 -> 其他模块内部私有文件

## Compatibility Paths
- `/topics/[slug]/` -> `topics/registry` -> `topics/jiaxun|wuyue|figures`
- `/events/[slug]/` -> `events.eventDetails`
- `/gifts/[slug]/` -> `gifts.giftDetails`
