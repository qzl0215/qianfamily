import type {
  DetailPageContent,
  PortalCard,
  PortalFact,
  WorkflowPageContent,
} from "@/modules/portal-shell";

export const upcomingEventCards: PortalCard[] = [
  {
    eyebrow: "近期活动",
    title: "春祭告祖礼",
    href: "/events/spring-ancestral-ceremony/",
    summary: "以告祭、敬香、家训诵读和支派见面为主，强化现实中的宗亲连接。",
    meta: "2026年4月5日 · 杭州临安",
    actionLabel: "查看活动详情",
    tags: ["祭祖", "临安", "报名中"],
  },
  {
    eyebrow: "宗亲联络",
    title: "江南宗亲代表会",
    href: "/events/jiangnan-clan-meeting/",
    summary: "聚焦谱系整理协作、地区联络和青年参与，让组织连接不止停在活动当天。",
    meta: "2026年5月16日 · 上海青浦",
    actionLabel: "查看活动详情",
    tags: ["联谊", "上海", "公开说明"],
  },
  {
    eyebrow: "青年活动",
    title: "钱氏家训青年读书日",
    href: "/events/upcoming/",
    summary: "以家训原句导读和人物案例分享切入，鼓励年轻族人理解并参与家族公共事务。",
    meta: "2026年7月12日 · 线上 + 线下",
    actionLabel: "查看近期活动",
    tags: ["青年", "家训", "预告"],
  },
];

export const eventsOverviewFacts: PortalFact[] = [
  { label: "主线环节", value: "宗亲连接" },
  { label: "频道定位", value: "宗亲连接入口" },
  { label: "下一步", value: "进入礼品场景与参与行动" },
  { label: "公开可看", value: "活动详情、时间、地点、历史回顾" },
  { label: "登录可办", value: "报名、签到、通知接收、个人记录" },
];

export const eventCalendarCards: PortalCard[] = [
  {
    eyebrow: "年度安排",
    title: "春祭告祖",
    href: "/events/spring-ancestral-ceremony/",
    summary: "每年清明前后组织祭祖、敬香、诵读家训与宗亲见面。",
    meta: "4月",
    actionLabel: "查看详情",
  },
  {
    eyebrow: "年度安排",
    title: "地区宗亲联络会",
    href: "/events/jiangnan-clan-meeting/",
    summary: "围绕地区联络、支派资料整理和青年参与展开的年度交流活动。",
    meta: "5月 - 6月",
    actionLabel: "查看详情",
  },
  {
    eyebrow: "年度安排",
    title: "青年读书与志愿活动",
    href: "/events/upcoming/",
    summary: "以家训、人物和地方历史为主题，面向青年族人持续开展的小型活动。",
    meta: "暑期",
    actionLabel: "查看近期活动",
  },
];

export const eventHistoryCards: PortalCard[] = [
  {
    eyebrow: "历届回顾",
    title: "告祖礼与宗祠纪念",
    href: "/events/history/",
    summary: "保留历届祭祖活动的照片、流程、地点与组织节点，形成清晰的公共记忆。",
    meta: "持续沉淀中",
    actionLabel: "查看回顾说明",
  },
  {
    eyebrow: "历届回顾",
    title: "宗亲大会与支派联络",
    href: "/events/history/",
    summary: "记录不同地区宗亲如何通过会议、寻访和协作整理谱牒与活动线索。",
    meta: "持续沉淀中",
    actionLabel: "查看回顾说明",
  },
];

export const eventDetails: DetailPageContent[] = [
  {
    slug: "spring-ancestral-ceremony",
    eyebrow: "祭祖活动",
    title: "春祭告祖礼",
    lead: "以祭祖、敬香、诵读家训和支派见面为主的年度公共活动。",
    summary:
      "这类活动既是礼仪现场，也是宗亲连接与文化回流的入口。页面会公开呈现时间、地点、流程和参加说明，报名与签到则保留到登录后处理。",
    chips: ["报名中", "临安", "年度重点活动"],
    facts: [
      { label: "时间", value: "2026年4月5日" },
      { label: "地点", value: "杭州临安" },
      { label: "适合对象", value: "族人、家庭成员、青年参与者" },
    ],
    highlights: [
      {
        title: "活动流程",
        description: "包括告祭、敬香、家训诵读、支派见面与活动合影，兼顾礼仪与现实连接。",
      },
      {
        title: "页面作用",
        description: "统一承载活动说明、报名须知、签到安排和回顾资料，避免信息散落。",
      },
      {
        title: "内容回流",
        description: "活动结束后，照片、发言与家训共读片段会回流到首页动态和文化栏目。",
      },
    ],
    checklist: [
      "公开可看时间、地点、流程、须知",
      "登录后完成报名、签到和消息接收",
      "后续沉淀活动回顾与现场图片",
    ],
    faq: [
      {
        question: "非钱氏公众能看到活动页吗？",
        answer: "可以。活动详情公开可看，但报名、签到和部分参与通知仍需登录后进行。",
      },
      {
        question: "报名后如何查看状态？",
        answer: "后续会在“我的报名 / 进度”中统一查看活动报名和签到状态。",
      },
    ],
    primaryAction: { label: "查看近期活动", href: "/events/upcoming/" },
    secondaryAction: { label: "返回活动频道", href: "/events/" },
    note: "当前先完成公开活动详情与结构设计，后续再接入真正的报名与签到能力。",
  },
  {
    slug: "jiangnan-clan-meeting",
    eyebrow: "祭祖活动",
    title: "江南宗亲代表会",
    lead: "围绕地区联络、谱牒整理与青年参与展开的代表性宗亲交流活动。",
    summary:
      "这类活动不只为见面，更承担资源连接、资料对接和后续协作的功能。页面需要兼顾说明、报名和回顾三种用途。",
    chips: ["宗亲联络", "上海", "筹备中"],
    facts: [
      { label: "时间", value: "2026年5月16日" },
      { label: "地点", value: "上海青浦" },
      { label: "核心议题", value: "联络、资料、青年参与" },
    ],
    highlights: [
      {
        title: "地区联络",
        description: "让不同地区支派不再只是松散联系，而是通过活动把后续协作接上。",
      },
      {
        title: "资料协作",
        description: "活动期间可同步推进寻根线索、续谱分工和后续资料整理需求。",
      },
      {
        title: "青年入口",
        description: "通过读书、志愿和传播项目，让年轻族人在活动中获得具体参与角色。",
      },
    ],
    checklist: [
      "公开浏览活动主题与议程",
      "登录后报名并查看会务通知",
      "回顾内容可回流至故事与公告栏目",
    ],
    faq: [
      {
        question: "是否只有代表才能参加？",
        answer: "正式代表会有名额要求，但活动页也可承载面向更广族人的说明、回顾与后续参与方式。",
      },
      {
        question: "活动内容会沉淀到哪里？",
        answer: "会进入活动回顾、族人故事和首页动态，形成内容回流。",
      },
    ],
    primaryAction: { label: "查看近期活动", href: "/events/upcoming/" },
    secondaryAction: { label: "返回活动频道", href: "/events/" },
    note: "代表会类页面会逐步扩展为“会前说明 + 会中协同 + 会后回顾”的完整结构。",
  },
];

export const eventsMyContent: WorkflowPageContent = {
  eyebrow: "祭祖活动",
  title: "我的报名 / 签到 / 通知",
  lead: "活动频道最终要回到个人视角，让每一次报名、签到和通知都有可追踪的状态。",
  summary:
    "这里会是未来登录后查看活动记录的工作台。当前先把结构说清：你能看到哪些记录、收到哪些通知、如何理解状态变化。",
  chips: ["个人记录", "活动状态", "登录后查看"],
  facts: [
    { label: "可查看内容", value: "报名状态、签到结果、会务通知、历史活动" },
    { label: "当前定位", value: "活动个人工作台说明页" },
    { label: "后续能力", value: "消息提醒、签到码、回顾下载" },
  ],
  steps: [
    {
      title: "查看报名状态",
      description: "知道自己已报名、待确认还是需补充资料，不让活动报名变成一次性提交后失联。",
    },
    {
      title: "接收活动通知",
      description: "后续可查看时间提醒、地点调整、签到说明和现场流程更新。",
    },
    {
      title: "保留历史记录",
      description: "把参加过的祭祖、联谊、青年活动沉淀为个人参与轨迹，强化组织连接。",
    },
  ],
  checklist: [
    "当前报名状态",
    "签到记录与现场通知",
    "历史参加活动列表",
    "可回看的活动回顾链接",
  ],
  faq: [
    {
      question: "为什么活动也要做个人工作台？",
      answer: "因为活动不是一次阅读行为，而是宗亲门户中的真实参与行为，需要有状态、通知和历史记录。",
    },
    {
      question: "未登录可以看到这里吗？",
      answer: "当前可看到结构说明，但真正的个人记录会在登录后展示。",
    },
  ],
  primaryAction: { label: "查看近期活动", href: "/events/upcoming/" },
  secondaryAction: { label: "返回活动频道", href: "/events/" },
  note: "活动工作台会在后续版本承担报名、签到、通知和历史回顾的个人入口职责。",
};
