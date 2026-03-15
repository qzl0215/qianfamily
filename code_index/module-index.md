# Module Index

Generated at: 2026-03-15T01:48:41.275Z

| Module | Goal | Path | Files |
| --- | --- | --- | --- |
| `events` | 承接祭祖活动频道的活动卡片、详情页数据和个人活动流程说明。 | `src/modules/events` | 3 |
| `genealogy` | 承接家谱中心的总入口、流程页内容和权限说明。 | `src/modules/genealogy` | 3 |
| `gifts` | 承接礼品频道的概览、场景、详情和订单说明数据。 | `src/modules/gifts` | 2 |
| `heritage` | 承接文化传承频道的核心导读内容，包括家训、吴越、人物和故事入口。 | `src/modules/heritage` | 2 |
| `navigation` | 集中管理站点导航、页脚导航组和站点级元信息。 | `src/modules/navigation` | 5 |
| `portal-home` | 承接门户首页的主逻辑、首屏推荐和首页专属内容配置。 | `src/modules/portal-home` | 10 |
| `portal-shell` | 承接门户站通用页面壳层，统一 Hero、卡片区、FAQ、流程页与详情页模板。 | `src/modules/portal-shell` | 7 |
| `topics/figures` | 承接近代钱氏人物专题的内容数据与页面实现。 | `src/modules/topics/figures` | 3 |
| `topics/jiaxun` | 承接钱氏家训专题的内容数据与页面实现。 | `src/modules/topics/jiaxun` | 4 |
| `topics/registry` | 统一管理 `/topics/[slug]/` 兼容专题入口的 slug、元数据和路由映射。 | `src/modules/topics/registry` | 2 |
| `topics/wuyue` | 承接钱王与吴越专题的内容数据与页面实现。 | `src/modules/topics/wuyue` | 3 |

## `events`
- Goal: 承接祭祖活动频道的活动卡片、详情页数据和个人活动流程说明。
- Path: `src/modules/events`
- Public files: `src/modules/events/EventsPage.tsx`、`src/modules/events/content.ts`、`src/modules/events/index.ts`
- Exports: `EventsPage`、`upcomingEventCards`、`eventsOverviewFacts`、`eventCalendarCards`、`eventHistoryCards`、`eventDetails`、`eventsMyContent`

## `genealogy`
- Goal: 承接家谱中心的总入口、流程页内容和权限说明。
- Path: `src/modules/genealogy`
- Public files: `src/modules/genealogy/GenealogyPage.tsx`、`src/modules/genealogy/content.ts`、`src/modules/genealogy/index.ts`
- Exports: `GenealogyPage`、`genealogyCenterCards`、`genealogyFacts`、`accessRoles`、`genealogyFindRootsContent`、`genealogyContinueContent`、`genealogyTakeoverContent`、`genealogyStatusContent`

## `gifts`
- Goal: 承接礼品频道的概览、场景、详情和订单说明数据。
- Path: `src/modules/gifts`
- Public files: `src/modules/gifts/content.ts`、`src/modules/gifts/index.ts`
- Exports: `giftsOverviewFacts`、`giftsLandingFacts`、`giftHighlightCards`、`giftOccasionCards`、`giftDetails`、`giftOrderFacts`、`giftOrderPreparationBlocks`、`giftOrderStatusSteps`、`giftOrderFaq`

## `heritage`
- Goal: 承接文化传承频道的核心导读内容，包括家训、吴越、人物和故事入口。
- Path: `src/modules/heritage`
- Public files: `src/modules/heritage/content.ts`、`src/modules/heritage/index.ts`
- Exports: `homeNarrativeCards`、`storyCards`、`cultureHighlightCards`、`heritageOverviewFacts`

## `navigation`
- Goal: 集中管理站点导航、页脚导航组和站点级元信息。
- Path: `src/modules/navigation`
- Public files: `src/modules/navigation/SiteFooter.tsx`、`src/modules/navigation/SiteHeader.tsx`、`src/modules/navigation/index.ts`、`src/modules/navigation/navigation.ts`、`src/modules/navigation/site-meta.ts`
- Exports: `SiteFooter`、`SiteHeader`、`mainNavItems`、`footerLinkGroups`、`siteMeta`

## `portal-home`
- Goal: 承接门户首页的主逻辑、首屏推荐和首页专属内容配置。
- Path: `src/modules/portal-home`
- Public files: `src/modules/portal-home/PortalHomePage.tsx`、`src/modules/portal-home/content.ts`、`src/modules/portal-home/index.ts`、`src/modules/portal-home/recommendations.ts`、`src/modules/portal-home/sections/HomeAnnouncementsSection.tsx`、`src/modules/portal-home/sections/HomeCultureGiftsSection.tsx`、`src/modules/portal-home/sections/HomeDecisionJourneySection.tsx`、`src/modules/portal-home/sections/HomeGenealogyEventsSection.tsx`、`src/modules/portal-home/sections/HomeHeroSection.tsx`、`src/modules/portal-home/sections/HomeNarrativeSection.tsx`
- Exports: `PortalHomePage`、`portalLogicSteps`、`homePrimaryActions`、`homeDecisionCards`、`firstVisitJourneyCards`、`announcementCards`、`getLatestUpdates`、`getWeeklyFocus`、`HomeAnnouncementsSection`、`HomeCultureGiftsSection`、`HomeDecisionJourneySection`、`HomeGenealogyEventsSection`、`HomeHeroSection`、`HomeNarrativeSection`

## `portal-shell`
- Goal: 承接门户站通用页面壳层，统一 Hero、卡片区、FAQ、流程页与详情页模板。
- Path: `src/modules/portal-shell`
- Public files: `src/modules/portal-shell/CardSection.tsx`、`src/modules/portal-shell/DetailPage.tsx`、`src/modules/portal-shell/FaqSection.tsx`、`src/modules/portal-shell/PageHero.tsx`、`src/modules/portal-shell/WorkflowPage.tsx`、`src/modules/portal-shell/index.ts`、`src/modules/portal-shell/types.ts`
- Exports: `CardSection`、`DetailPage`、`FaqSection`、`PageHero`、`WorkflowPage`、`PortalFact`、`PortalAction`、`HomeDecisionCard`、`PortalCard`、`PortalRole`、`WorkflowStep`、`FaqItem`、`WorkflowPageContent`、`DetailPageContent`

## `topics/figures`
- Goal: 承接近代钱氏人物专题的内容数据与页面实现。
- Path: `src/modules/topics/figures`
- Public files: `src/modules/topics/figures/FiguresTopicPage.tsx`、`src/modules/topics/figures/content.ts`、`src/modules/topics/figures/index.ts`
- Exports: `FiguresTopicPage`、`FiguresHeroFact`、`FiguresPersonBlock`、`FiguresValueBlock`、`FiguresSourceLink`、`figuresPageMeta`、`figuresHeroFacts`、`figuresPersonBlocks`、`figuresValueBlocks`、`figuresSourceLinks`

## `topics/jiaxun`
- Goal: 承接钱氏家训专题的内容数据与页面实现。
- Path: `src/modules/topics/jiaxun`
- Public files: `src/modules/topics/jiaxun/JiaxunTopicPage.tsx`、`src/modules/topics/jiaxun/QuoteCaseSection.tsx`、`src/modules/topics/jiaxun/content.ts`、`src/modules/topics/jiaxun/index.ts`
- Exports: `JiaxunTopicPage`、`QuoteCaseSection`、`JiaxunHeroFact`、`JiaxunValueBlock`、`JiaxunChapterBlock`、`JiaxunQuoteCaseBlock`、`JiaxunCaseFilter`、`JiaxunSourceLink`、`JiaxunTransmissionBlock`、`JiaxunFormationStep`、`JiaxunShanghaiDetail`、`jiaxunPageMeta`、`heroFacts`、`valueBlocks`、`chapterBlocks`、`quoteCaseBlocks`、`transmissionBlocks`、`formationSteps`、`shanghaiDetails`、`sourceLinks`

## `topics/registry`
- Goal: 统一管理 `/topics/[slug]/` 兼容专题入口的 slug、元数据和路由映射。
- Path: `src/modules/topics/registry`
- Public files: `src/modules/topics/registry/index.ts`、`src/modules/topics/registry/topic-routes.ts`
- Exports: `TopicSlug`、`TopicRoute`、`topicRoutes`、`getTopicRoute`

## `topics/wuyue`
- Goal: 承接钱王与吴越专题的内容数据与页面实现。
- Path: `src/modules/topics/wuyue`
- Public files: `src/modules/topics/wuyue/WuyueTopicPage.tsx`、`src/modules/topics/wuyue/content.ts`、`src/modules/topics/wuyue/index.ts`
- Exports: `WuyueTopicPage`、`WuyueHeroFact`、`WuyueTimelineBlock`、`WuyueJudgmentBlock`、`WuyueSourceLink`、`wuyuePageMeta`、`wuyueHeroFacts`、`wuyueTimelineBlocks`、`wuyueJudgmentBlocks`、`wuyueSourceLinks`
