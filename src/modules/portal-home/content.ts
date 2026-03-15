import type {
  HomeDecisionCard,
  PortalAction,
  PortalCard,
} from "@/modules/portal-shell";

export const portalLogicSteps = [
  "文化认同",
  "谱系归属",
  "宗亲连接",
  "参与行动",
  "内容回流",
] as const;

export const homePrimaryActions: PortalAction[] = [
  {
    title: "寻根",
    href: "/genealogy/find-roots/",
    summary: "先确认祖籍、支派和辈分线索，再把零散口述转成可核对的谱系信息。",
    note: "建议先读 5 分钟说明，再提交线索。",
    status: "优先入口",
  },
  {
    title: "续谱",
    href: "/genealogy/continue/",
    summary: "为已确认支派补录新世系与迁徙资料，让支派谱牒持续不断代。",
    note: "先看格式要求，再登录提交。",
    status: "高频动作",
  },
  {
    title: "活动报名",
    href: "/events/upcoming/",
    summary: "从春祭、宗亲联络到青年读书，把线上认同转成可参与的线下连接。",
    note: "先看活动说明，再登录报名。",
    status: "连接入口",
  },
  {
    title: "礼品选购",
    href: "/gifts/catalog/",
    summary: "按祭祖、陈设与赠礼场景选择礼品，让文化表达进入家庭与活动现场。",
    note: "先按场景筛选，再进入订单。",
    status: "参与行动",
  },
];

export const homeDecisionCards: HomeDecisionCard[] = [
  {
    title: "我是第一次来站",
    href: "/heritage/",
    summary: "先用文化传承建立认同，再进入寻根动作，避免只看入口不理解主线。",
    effortHint: "预计 10 分钟建立主线认知",
    outcomeHint: "可见产出：获得一条清晰的入站主线路径",
    nextStep: "完成后建议进入：家谱寻根",
    actionLabel: "先读文化传承",
  },
  {
    title: "我已有家谱线索",
    href: "/genealogy/find-roots/",
    summary: "直接进入寻根并按提交清单准备资料，减少反复退回与补充。",
    effortHint: "建议准备 3 项基础线索",
    outcomeHint: "可见产出：形成一份可提交的寻根资料包",
    nextStep: "提交线索后建议进入：我的提交 / 进度",
    actionLabel: "直接去寻根",
  },
  {
    title: "我想参与线下宗亲活动",
    href: "/events/upcoming/",
    summary: "先看近期活动时间、地点与流程，再决定报名与参与方式。",
    effortHint: "预计 5 分钟完成活动筛选",
    outcomeHint: "可见产出：确定一场可报名的近期活动",
    nextStep: "报名完成后建议进入：宣传礼品场景",
    actionLabel: "查看近期活动",
  },
  {
    title: "我想做文化传播",
    href: "/gifts/occasions/",
    summary: "先按场景选择礼品，优先服务祭祖、家堂陈设与宗亲赠礼。",
    effortHint: "先确定 1 个使用场景再选品",
    outcomeHint: "可见产出：确定一组匹配场景的礼品方案",
    nextStep: "完成选品后建议进入：祭祖活动日程",
    actionLabel: "查看礼品场景",
  },
];

export const firstVisitJourneyCards: PortalCard[] = [
  {
    eyebrow: "第一步",
    title: "先建立文化认同",
    href: "/heritage/",
    summary: "先读家训、吴越历史与近代人物，明确“为何与钱氏家族相连”。",
    meta: "文化认同",
    actionLabel: "进入文化传承",
    tags: ["家训", "历史", "人物"],
  },
  {
    eyebrow: "第二步",
    title: "再确认谱系归属",
    href: "/genealogy/find-roots/",
    summary: "从祖籍、辈分和迁徙线索进入寻根，再逐步进入续谱与接谱协作。",
    meta: "谱系归属",
    actionLabel: "进入寻根入口",
    tags: ["寻根", "续谱", "接谱"],
  },
  {
    eyebrow: "第三步",
    title: "进入连接与行动",
    href: "/events/",
    summary: "通过祭祖活动与礼品场景，把认同与谱系关系转成现实参与和持续回流。",
    meta: "宗亲连接 → 参与行动",
    actionLabel: "查看活动与礼品",
    tags: ["活动", "礼品", "回流"],
  },
];

export const announcementCards: PortalCard[] = [
  {
    eyebrow: "宗亲动态",
    title: "家谱中心上线第一阶段办事入口",
    href: "/genealogy/",
    summary: "寻根、续谱、接谱与状态查询统一收入口中心，首次来站可按步骤进入对应动作。",
    meta: "站点更新",
    actionLabel: "去家谱中心办事",
  },
  {
    eyebrow: "内容回流",
    title: "家训专题已升级为正式导读页",
    href: "/heritage/jiafeng-jiaxun/",
    summary: "采用原句、图解与案例导读结构，帮助族人先建立文化认同，再进入谱系与活动。",
    meta: "内容更新",
    actionLabel: "进入家训导读",
  },
  {
    eyebrow: "活动公告",
    title: "春祭告祖礼进入筹备与报名说明阶段",
    href: "/events/upcoming/",
    summary: "活动页统一承载时间、地点、流程与报名说明，减少信息分散带来的沟通成本。",
    meta: "活动预告",
    actionLabel: "查看报名说明",
  },
  {
    eyebrow: "礼品计划",
    title: "宣传礼品频道开始按场景组织内容",
    href: "/gifts/occasions/",
    summary: "礼品先按祭祖、赠礼与阅读场景组织，再进入商品详情与订单能力。",
    meta: "频道规划",
    actionLabel: "进入礼品场景",
  },
];
