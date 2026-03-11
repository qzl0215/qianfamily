export type PortalFact = {
  label: string;
  value: string;
};

export type HomeActionLink = {
  label: string;
  href: string;
};

export type PortalCard = {
  title: string;
  href: string;
  summary: string;
  eyebrow?: string;
  meta?: string;
  actionLabel?: string;
  tags?: string[];
};

export type WorkflowStep = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type WorkflowPageContent = {
  eyebrow: string;
  title: string;
  lead: string;
  summary: string;
  chips?: string[];
  facts: PortalFact[];
  steps: WorkflowStep[];
  checklist: string[];
  faq: FaqItem[];
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  note: string;
};

export type DetailPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  summary: string;
  chips?: string[];
  facts: PortalFact[];
  highlights: WorkflowStep[];
  checklist: string[];
  faq: FaqItem[];
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  note: string;
};

export const mainNavItems = [
  { href: "/", label: "首页" },
  { href: "/genealogy/", label: "家谱中心" },
  { href: "/heritage/", label: "文化传承" },
  { href: "/events/", label: "祭祖活动" },
  { href: "/gifts/", label: "宣传礼品" },
] as const;

export const homeHeroContent = {
  kicker: "钱氏宗亲",
  title: "记得来处，认得今人",
  quote: "心术不可得罪于天地，言行皆当无愧于圣贤。",
  quoteSource: "钱氏家训",
  primaryAction: { label: "去寻根", href: "/genealogy/find-roots/" },
  secondaryAction: { label: "读这句家训", href: "/heritage/jiafeng-jiaxun/" },
} as const;

export const homeRootFeature = {
  eyebrow: "家谱中心",
  title: "祖籍、字辈、旧谱",
  summary: "迁徙、祠堂、口述。",
  primaryAction: {
    label: "去寻根",
    href: "/genealogy/find-roots/",
  },
  secondaryLinks: [
    { label: "续谱", href: "/genealogy/continue/" },
    { label: "我接家谱", href: "/genealogy/takeover/" },
    { label: "查看进度", href: "/genealogy/status/" },
  ],
} as const satisfies {
  eyebrow: string;
  title: string;
  summary: string;
  primaryAction: HomeActionLink;
  secondaryLinks: readonly HomeActionLink[];
};

export const homeStoryFeature = {
  eyebrow: "族人故事",
  title: "一页残谱，接回一支人",
  summary: "祖辈口述、残谱旧页、异地重逢。",
  href: "/heritage/stories/",
  actionLabel: "读这段故事",
  secondaryLinks: [
    { label: "从口述里寻根", href: "/genealogy/find-roots/" },
    { label: "在祭祖时相认", href: "/events/upcoming/" },
  ],
} as const satisfies {
  eyebrow: string;
  title: string;
  summary: string;
  href: string;
  actionLabel: string;
  secondaryLinks: readonly HomeActionLink[];
};

export const homeJiaxunAnchor = {
  eyebrow: "钱氏家训",
  title: "一句家训，代代相传",
  quote: "利在一身勿谋也，利在天下者必谋之。",
  summary: "从钱镠到钱学森，这句话一直有人在践行。",
  href: "/heritage/jiafeng-jiaxun/",
  actionLabel: "读这句家训",
} as const;

export const genealogyCenterCards: PortalCard[] = [
  {
    eyebrow: "家谱中心",
    title: "寻根",
    href: "/genealogy/find-roots/",
    summary: "从祖籍、辈分和迁徙线索开始寻根。",
    meta: "初次使用",
    actionLabel: "查看寻根流程",
  },
  {
    eyebrow: "家谱中心",
    title: "家谱续谱",
    href: "/genealogy/continue/",
    summary: "为已确认支派补录新成员和迁居资料。",
    meta: "适合支派负责人",
    actionLabel: "查看续谱说明",
  },
  {
    eyebrow: "家谱中心",
    title: "我接家谱",
    href: "/genealogy/takeover/",
    summary: "接手支派维护，继续整理、校对和联络。",
    meta: "适合长期维护者",
    actionLabel: "了解接谱方式",
  },
  {
    eyebrow: "家谱中心",
    title: "我的提交 / 进度",
    href: "/genealogy/status/",
    summary: "查看提交状态、补充要求和处理结果。",
    meta: "登录后查看",
    actionLabel: "查看个人进度",
  },
];

export const genealogyFacts: PortalFact[] = [
  { label: "祖籍", value: "村名、地名、祠堂" },
  { label: "辈分", value: "字辈、排行、称谓" },
  { label: "迁徙", value: "迁出地、迁入地、年代" },
  { label: "旧谱", value: "谱页、影印、墓志" },
  { label: "口述", value: "上一代姓名与支派称呼" },
];

export const upcomingEventCards: PortalCard[] = [
  {
    eyebrow: "近期活动",
    title: "春祭告祖礼",
    href: "/events/spring-ancestral-ceremony/",
    summary: "先看告祭、敬香、家训诵读和支派见面安排。",
    meta: "2026年4月5日 · 杭州临安",
    actionLabel: "查看活动详情",
    tags: ["祭祖", "临安", "报名中"],
  },
  {
    eyebrow: "宗亲联络",
    title: "江南宗亲代表会",
    href: "/events/jiangnan-clan-meeting/",
    summary: "先看地区联络、谱系整理和青年参与安排。",
    meta: "2026年5月16日 · 上海青浦",
    actionLabel: "查看活动详情",
    tags: ["联谊", "上海", "公开说明"],
  },
  {
    eyebrow: "青年活动",
    title: "钱氏家训青年读书日",
    href: "/events/upcoming/",
    summary: "先看家训共读和人物分享安排。",
    meta: "2026年7月12日 · 线上 + 线下",
    actionLabel: "查看近期活动",
    tags: ["青年", "家训", "预告"],
  },
];

const heritageNarrativeCards: PortalCard[] = [
  {
    eyebrow: "精神主轴",
    title: "钱氏家训",
    href: "/heritage/jiafeng-jiaxun/",
    summary: "先读三大价值，再看原句和案例。",
    meta: "原句、图解、案例",
    actionLabel: "进入家风家训",
    tags: ["家训", "家风", "导读"],
  },
  {
    eyebrow: "历史底板",
    title: "钱王与吴越",
    href: "/heritage/wuyue/",
    summary: "从立国、治水到纳土归宋，看清吴越来路。",
    meta: "吴越史专题",
    actionLabel: "进入吴越专题",
    tags: ["吴越", "钱镠", "历史"],
  },
  {
    eyebrow: "现代回响",
    title: "近代钱氏人物",
    href: "/heritage/figures/",
    summary: "从三位代表人物看钱氏精神如何进入现代中国。",
    meta: "人物专题",
    actionLabel: "进入人物专题",
    tags: ["科学", "教育", "人物"],
  },
];

export const cultureHighlightCards: PortalCard[] = [
  ...heritageNarrativeCards,
  {
    eyebrow: "族人故事",
    title: "口述与迁徙故事",
    href: "/heritage/stories/",
    summary: "集中看迁徙、寻根和当代参与的真实故事。",
    meta: "真实故事",
    actionLabel: "查看故事栏目",
    tags: ["故事", "迁徙", "口述"],
  },
];

export const giftHighlightCards: PortalCard[] = [
  {
    eyebrow: "宣传礼品",
    title: "钱氏家训卷轴",
    href: "/gifts/jiaxun-scroll/",
    summary: "适合宗祠、家堂、书房和赠礼场景。",
    meta: "家训主题陈设",
    actionLabel: "查看礼品详情",
    tags: ["家训", "陈设", "赠礼"],
  },
  {
    eyebrow: "宣传礼品",
    title: "吴越记忆礼盒",
    href: "/gifts/wuyue-heritage-set/",
    summary: "适合活动伴手礼和宗亲来访纪念。",
    meta: "活动伴手礼",
    actionLabel: "查看礼品详情",
    tags: ["吴越", "纪念", "活动"],
  },
  {
    eyebrow: "宣传礼品",
    title: "家风书签与阅读套装",
    href: "/gifts/catalog/",
    summary: "适合青年阅读、赠礼和日常传播。",
    meta: "阅读与青年活动",
    actionLabel: "查看礼品总览",
    tags: ["阅读", "青年", "传播"],
  },
];

export const heritageOverviewFacts: PortalFact[] = [
  { label: "主线环节", value: "文化认同" },
  { label: "内容范围", value: "家风家训、吴越历史、近代人物、族人故事" },
  { label: "适合谁", value: "第一次了解钱氏文化的族人" },
  { label: "阅读建议", value: "先家训，再历史与人物" },
  { label: "下一步", value: "了解后进入寻根或活动" },
];

export const heritageOverviewSections = [
  {
    eyebrow: "专题入口",
    title: "从三条主线进入文化认同",
    description:
      "先读家训，再看历史与人物，最后进入族人故事理解家族如何延续。",
    cards: cultureHighlightCards,
  },
] as const;

export const storyCards: PortalCard[] = [
  {
    eyebrow: "族人故事",
    title: "迁徙与落脚",
    href: "/heritage/stories/",
    summary: "记录支派从吴越故地迁往各地的经历。",
    meta: "迁徙故事",
    actionLabel: "查看故事",
  },
  {
    eyebrow: "族人故事",
    title: "寻根经历",
    href: "/genealogy/find-roots/",
    summary: "记录族人如何从口述和旧谱中重新确认谱系线索。",
    meta: "寻根故事",
    actionLabel: "查看寻根入口",
  },
  {
    eyebrow: "族人故事",
    title: "当代参与",
    href: "/events/upcoming/",
    summary: "记录祭祖、读书和宗亲联谊中的真实参与。",
    meta: "参与记录",
    actionLabel: "查看活动入口",
  },
];

export const eventsOverviewFacts: PortalFact[] = [
  { label: "主线环节", value: "宗亲连接" },
  { label: "你会看到", value: "近期活动、年度安排、历届回顾" },
  { label: "适合谁", value: "准备参加活动的族人" },
  { label: "常用入口", value: "近期活动、年度活动表、历届回顾" },
  { label: "下一步", value: "选定活动后再报名" },
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
    summary: "以地区联络、资料整理和青年参与为主。",
    meta: "5月 - 6月",
    actionLabel: "查看详情",
  },
  {
    eyebrow: "年度安排",
    title: "青年读书与志愿活动",
    href: "/events/upcoming/",
    summary: "以家训、人物和地方历史为主题的青年活动。",
    meta: "暑期",
    actionLabel: "查看近期活动",
  },
];

export const eventHistoryCards: PortalCard[] = [
  {
    eyebrow: "历届回顾",
    title: "告祖礼与宗祠纪念",
    href: "/events/history/",
    summary: "保留历届祭祖活动的照片、流程和地点。",
    meta: "照片与流程",
    actionLabel: "查看回顾",
  },
  {
    eyebrow: "历届回顾",
    title: "宗亲大会与支派联络",
    href: "/events/history/",
    summary: "记录不同地区宗亲的会议、寻访和联络情况。",
    meta: "联络与协作",
    actionLabel: "查看回顾",
  },
];

export const giftsOverviewFacts: PortalFact[] = [
  { label: "主线环节", value: "参与行动" },
  { label: "适用场景", value: "祭祖、陈设、赠礼、传播" },
  { label: "选择方式", value: "先看场景，再看礼品" },
  { label: "常用入口", value: "礼品总览、场景说明" },
  { label: "下一步", value: "确定用途后进入礼品详情" },
];

export const giftOccasionCards: PortalCard[] = [
  {
    eyebrow: "使用场景",
    title: "祭祖与宗亲活动",
    href: "/gifts/occasions/",
    summary: "适合祭祖、联谊和读书会使用。",
    meta: "活动场景",
    actionLabel: "查看场景说明",
  },
  {
    eyebrow: "使用场景",
    title: "家堂与书房陈设",
    href: "/gifts/jiaxun-scroll/",
    summary: "适合把家训、人物故事与家风陈设结合到日常空间。",
    meta: "家庭场景",
    actionLabel: "查看礼品详情",
  },
  {
    eyebrow: "使用场景",
    title: "赠礼与传播",
    href: "/gifts/wuyue-heritage-set/",
    summary: "适合纪念、赠送和日常传播。",
    meta: "传播场景",
    actionLabel: "查看礼品详情",
  },
];

export const genealogyFindRootsContent: WorkflowPageContent = {
  eyebrow: "家谱中心",
  title: "寻根",
  lead: "先从祖籍、辈分、迁徙和口述线索开始，把散落的信息重新接回谱系。",
  summary:
    "第一次来先确认需要哪些线索，再提交资料。",
  chips: ["公开说明", "登录后提交", "适合首次进入"],
  facts: [
    { label: "目标", value: "确认祖籍、支派、代际线索" },
    { label: "准备材料", value: "口述信息、旧谱影印、墓志、祠堂或地名线索" },
    { label: "提交后", value: "进入审核与补充说明流程" },
  ],
  steps: [
    {
      title: "先整理已知线索",
      description: "把姓名、字辈、祖籍、迁徙方向、老人口述与现存旧谱先整理成一页概览。",
    },
    {
      title: "明确你想确认什么",
      description: "先确定你要找祖籍、支派还是上一代世系，再整理对应线索。",
    },
    {
      title: "登录后提交线索",
      description: "提交基础信息、附件与补充说明，便于后续核对支派与世系线索。",
    },
  ],
  checklist: [
    "祖籍地、现居地与迁徙方向",
    "家中保留的辈分字或堂号信息",
    "旧谱、碑刻、祠堂、墓志、地方志等线索",
    "可以联系的长辈或支派联系人",
  ],
  faq: [
    {
      question: "没有旧谱，还能寻根吗？",
      answer: "可以。祖籍、辈分、地名、口述和迁徙信息都可能成为有效线索。",
    },
    {
      question: "寻根一定能马上匹配到支派吗？",
      answer: "不一定。很多线索仍需与旧谱、支派资料和地方文献交叉核对，补充得越具体，确认越快。",
    },
    {
      question: "为什么先看说明再提交？",
      answer: "先把线索整理清楚，提交时更容易一次说完整。",
    },
  ],
  primaryAction: { label: "进入家谱中心总览", href: "/genealogy/" },
  secondaryAction: { label: "查看提交进度说明", href: "/genealogy/status/" },
  note: "提交前先把祖籍范围、辈分称谓和可联系长辈写清。",
};

export const genealogyContinueContent: WorkflowPageContent = {
  eyebrow: "家谱中心",
  title: "家谱续谱",
  lead: "把新增成员、迁居和重要资料按支派继续补全。",
  summary:
    "适合已确认支派、准备继续补录资料的族人。",
  chips: ["登录后提交", "支派协作", "资料审核"],
  facts: [
    { label: "适合对象", value: "支派负责人、资料保管者、长期参与族人" },
    { label: "重点信息", value: "新增世系、婚配、迁移、重要人物与照片文献" },
    { label: "处理方式", value: "审核后进入谱系整理与版本更新" },
  ],
  steps: [
    {
      title: "确认支派与代际位置",
      description: "先明确这次续谱所对应的支派、上承哪一代、下续到哪一代，避免资料落点不清。",
    },
    {
      title: "按统一格式整理资料",
      description: "把新增成员、配偶、子女、迁徙地和重要备注整理成统一结构，再上传附件佐证。",
    },
    {
      title: "等待校对与回访",
      description: "提交后会进入校对、重复项核查和必要的回访补证，再进入版本更新。",
    },
  ],
  checklist: [
    "支派名称与上承世代信息",
    "本次续录成员的姓名、关系、出生信息",
    "婚配、迁徙和重要人物备注",
    "照片、旧谱页、家书或其他佐证材料",
  ],
  faq: [
    {
      question: "续谱为什么要审核？",
      answer: "续谱会影响整支派谱系，需要先核对重复、世代关系和材料真实性。",
    },
    {
      question: "能不能先记下来，后面再补材料？",
      answer: "可以先整理草稿，但正式提交时仍建议附上基础说明和佐证材料。",
    },
    {
      question: "续谱后如何继续补充？",
      answer: "建议持续按同一支派整理新增成员、迁居信息和佐证材料，便于后续校对。",
    },
  ],
  primaryAction: { label: "返回家谱中心", href: "/genealogy/" },
  secondaryAction: { label: "了解我接家谱", href: "/genealogy/takeover/" },
  note: "先按统一格式整理成员关系、关键年份和佐证材料。",
};

export const genealogyTakeoverContent: WorkflowPageContent = {
  eyebrow: "家谱中心",
  title: "我接家谱",
  lead: "接手支派维护后，需要持续联络、整理和校对资料。",
  summary:
    "适合准备接手支派维护的族人，先确认职责和资料范围。",
  chips: ["长期维护", "支派协作", "责任明确"],
  facts: [
    { label: "定位", value: "支派维护与接续入口" },
    { label: "核心职责", value: "联络、整理、校对、更新、回访" },
    { label: "协作方式", value: "与族人用户和管理员协同完成" },
  ],
  steps: [
    {
      title: "说明你为何接谱",
      description: "提交你与该支派的关系、现有资料情况和愿意承担的长期工作范围。",
    },
    {
      title: "建立维护清单",
      description: "明确需要接续的谱页、联系人、缺失支线和待补资料，避免接手后没有抓手。",
    },
    {
      title: "进入协同维护",
      description: "与其他支派联系人协同推进续谱、校对与资料沉淀。",
    },
  ],
  checklist: [
    "支派关系说明",
    "目前掌握的旧谱或联系人",
    "愿意承担的维护范围和时间",
    "需要平台支持的具体事项",
  ],
  faq: [
    {
      question: "接谱是否等于拥有全部决定权？",
      answer: "接谱需要与支派和管理员协作推进，不是个人单独决定。",
    },
    {
      question: "没有完整旧谱还能接谱吗？",
      answer: "可以，但要先说明你掌握的范围和缺口，再逐步补齐。",
    },
    {
      question: "接谱后先做什么？",
      answer: "先列出现有旧谱、可联系长辈和缺失支线，再逐项补齐。",
    },
  ],
  primaryAction: { label: "返回家谱中心", href: "/genealogy/" },
  secondaryAction: { label: "查看续谱说明", href: "/genealogy/continue/" },
  note: "先确认你掌握的资料范围，再决定接手的支派部分。",
};

export const genealogyStatusContent: WorkflowPageContent = {
  eyebrow: "家谱中心",
  title: "我的提交 / 进度",
  lead: "提交后，可在这里看状态、补充要求和处理结果。",
  summary:
    "先看状态，再按提示补材料或回看结果。",
  chips: ["个人记录", "进度回执", "补充说明"],
  facts: [
    { label: "查看对象", value: "寻根、续谱、接谱、活动报名、礼品订单" },
    { label: "状态类型", value: "待处理、需补充、审核中、已完成" },
    { label: "常见动作", value: "看结果、补材料、回看记录" },
  ],
  steps: [
    {
      title: "查看当前状态",
      description: "每次提交都会对应一个明确的进度状态，知道当前停在哪个环节、是否需要你继续补充。",
    },
    {
      title: "根据反馈补充材料",
      description: "如果收到补充要求，会明确缺失点，按项补齐即可。",
    },
    {
      title: "保留历史记录",
      description: "保留提交时间、处理结果和补充记录，便于后续回看。",
    },
  ],
  checklist: [
    "寻根线索提交记录",
    "续谱与接谱处理状态",
    "活动报名与签到状态",
    "礼品订单和物流进度",
  ],
  faq: [
    {
      question: "这里能看哪些记录？",
      answer: "寻根、续谱、接谱，以及后续的活动和礼品记录都会汇总在这里。",
    },
    {
      question: "看到“需补充”该做什么？",
      answer: "按提示补齐祖籍、辈分、时间或佐证材料，再重新提交即可。",
    },
    {
      question: "处理完成后看什么？",
      answer: "重点查看结果说明、补充意见和下一步建议动作。",
    },
  ],
  primaryAction: { label: "返回家谱中心", href: "/genealogy/" },
  secondaryAction: { label: "进入寻根说明", href: "/genealogy/find-roots/" },
  note: "提交后先保留联系方式，便于回访和补充说明。",
};

export const eventDetails: DetailPageContent[] = [
  {
    slug: "spring-ancestral-ceremony",
    eyebrow: "祭祖活动",
    title: "春祭告祖礼",
    lead: "以祭祖、敬香、诵读家训和支派见面为主的年度公共活动。",
    summary:
      "这页提供时间、地点、流程和参加说明，便于先判断是否适合参与。",
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
        title: "参加前看什么",
        description: "先看活动说明、参加须知和现场安排。",
      },
      {
        title: "活动后看什么",
        description: "活动结束后，可回看照片、发言和家训共读片段。",
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
        answer: "可以。活动详情公开可看，报名和签到仍需按后续流程进行。",
      },
      {
        question: "报名后如何查看状态？",
        answer: "报名后可回到“我的活动”查看确认与提醒信息。",
      },
    ],
    primaryAction: { label: "查看近期活动", href: "/events/upcoming/" },
    secondaryAction: { label: "返回活动频道", href: "/events/" },
    note: "报名前先确认时间、同行成员和联系方式。",
  },
  {
    slug: "jiangnan-clan-meeting",
    eyebrow: "祭祖活动",
    title: "江南宗亲代表会",
    lead: "围绕地区联络、谱牒整理与青年参与展开的代表性宗亲交流活动。",
    summary:
      "适合想了解地区联络、谱牒整理与青年参与安排的族人。",
    chips: ["宗亲联络", "上海", "公开说明"],
    facts: [
      { label: "时间", value: "2026年5月16日" },
      { label: "地点", value: "上海青浦" },
      { label: "核心议题", value: "联络、资料、青年参与" },
    ],
    highlights: [
      {
        title: "地区联络",
        description: "通过见面确认地区联系人、后续分工和青年参与方式。",
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
        answer: "正式代表会有名额要求，但活动说明和回顾对更多族人开放。",
      },
      {
        question: "活动内容会沉淀到哪里？",
        answer: "会进入活动回顾、族人故事和首页动态。",
      },
    ],
    primaryAction: { label: "查看近期活动", href: "/events/upcoming/" },
    secondaryAction: { label: "返回活动频道", href: "/events/" },
    note: "先看议程与参加对象，再决定是否报名。",
  },
];

export const giftDetails: DetailPageContent[] = [
  {
    slug: "jiaxun-scroll",
    eyebrow: "宣传礼品",
    title: "钱氏家训卷轴",
    lead: "把家训核心句转化为可陈设、可赠送、可长期观看的文化物件。",
    summary:
      "适合家堂、书房、宗祠陈设或家族赠礼。",
    chips: ["家训", "陈设", "赠礼"],
    facts: [
      { label: "适用场景", value: "家堂、书房、宗祠、赠礼" },
      { label: "内容核心", value: "家训原句与价值关键词" },
      { label: "购买方式", value: "目录公开浏览，登录后下单" },
    ],
    highlights: [
      {
        title: "文化意义",
        description: "把家训内容带进家庭与公共空间的日常观看。",
      },
      {
        title: "展示方式",
        description: "以卷轴形式突出核心句与题签，更适合宗祠、家堂和书房陈设。",
      },
      {
        title: "传播作用",
        description: "适合作为家庭礼、宗亲礼和活动纪念礼。",
      },
    ],
    checklist: [
      "先了解家训原句与主题",
      "再判断适用空间和赠礼对象",
      "登录后进入下单与订单跟踪",
    ],
    faq: [
      {
        question: "这款礼品适合什么场景？",
        answer: "适合家堂、书房、宗祠陈设，也适合作为家族赠礼。",
      },
      {
        question: "选购前先看什么？",
        answer: "先确认陈设空间、赠礼对象和想表达的家训主题。",
      },
    ],
    primaryAction: { label: "查看礼品总览", href: "/gifts/catalog/" },
    secondaryAction: { label: "返回礼品频道", href: "/gifts/" },
    note: "先确认陈设空间或赠礼对象，再选择规格。",
  },
  {
    slug: "wuyue-heritage-set",
    eyebrow: "宣传礼品",
    title: "吴越记忆礼盒",
    lead: "围绕钱王、吴越和长三角文化记忆设计的活动纪念礼。",
    summary:
      "适合活动纪念、宗亲联谊和伴手礼场景。",
    chips: ["吴越", "纪念", "活动伴手礼"],
    facts: [
      { label: "适用场景", value: "祭祖、联谊、会务纪念" },
      { label: "内容主题", value: "钱王、吴越、长三角记忆" },
      { label: "使用方式", value: "先公开浏览，再按需求下单或定制" },
    ],
    highlights: [
      {
        title: "主题定位",
        description: "把吴越历史和钱氏文化转化成更易传播、可纪念的礼品语言。",
      },
      {
        title: "活动适配",
        description: "适合与祭祖、联谊、代表会等线下活动配套，形成统一的文化表达。",
      },
      {
        title: "传播价值",
        description: "可把历史主题延展到现实场景。",
      },
    ],
    checklist: [
      "先理解礼盒主题和适用场景",
      "判断是否用于活动纪念或赠礼",
      "登录后进入订单或团体定制说明",
    ],
    faq: [
      {
        question: "这款礼盒适合送给谁？",
        answer: "适合活动嘉宾、宗亲来访和家族纪念场景。",
      },
      {
        question: "团体使用时先准备什么？",
        answer: "先确定人数、活动主题和交付时间，再评估是否适合统一使用。",
      },
    ],
    primaryAction: { label: "查看礼品总览", href: "/gifts/catalog/" },
    secondaryAction: { label: "返回礼品频道", href: "/gifts/" },
    note: "先确认活动主题、人数和使用场合。",
  },
];

export const eventsMyContent: WorkflowPageContent = {
  eyebrow: "祭祖活动",
  title: "我的报名 / 签到 / 通知",
  lead: "这里集中查看报名、签到和通知状态。",
  summary:
    "已报名后，先在这里查看状态、通知和历史记录。",
  chips: ["个人记录", "活动状态", "登录后查看"],
  facts: [
    { label: "可查看内容", value: "报名状态、签到结果、会务通知、历史活动" },
    { label: "最常用", value: "查看确认、签到提醒和会务变更" },
    { label: "下一步", value: "按通知完成签到或到场准备" },
  ],
  steps: [
    {
      title: "查看报名状态",
      description: "知道自己已报名、待确认还是需补充资料，不让活动报名变成一次性提交后失联。",
    },
    {
      title: "接收活动通知",
      description: "查看时间提醒、地点调整、签到说明和现场流程更新。",
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
      question: "这里会显示哪些信息？",
      answer: "会集中显示报名状态、签到结果、通知更新和历史活动。",
    },
    {
      question: "未登录可以看到这里吗？",
      answer: "未登录只能看入口说明，个人记录需登录后查看。",
    },
  ],
  primaryAction: { label: "查看近期活动", href: "/events/upcoming/" },
  secondaryAction: { label: "返回活动频道", href: "/events/" },
  note: "报名后记得留意状态变更和时间提醒。",
};

export const giftOrdersContent: WorkflowPageContent = {
  eyebrow: "宣传礼品",
  title: "我的订单",
  lead: "这里集中查看礼品订单、收货信息和物流状态。",
  summary:
    "下单后，先在这里看订单进度，再处理收货信息和备注。",
  chips: ["订单跟踪", "登录后查看", "文化商品"],
  facts: [
    { label: "可查看内容", value: "订单状态、收货信息、物流与售后说明" },
    { label: "最常用", value: "查看发货进度和收货备注" },
    { label: "下一步", value: "确认地址与物流状态" },
  ],
  steps: [
    {
      title: "查看当前订单",
      description: "先看已下单、待发货、运输中还是已完成。",
    },
    {
      title: "管理收货信息",
      description: "统一处理个人地址、活动团体地址和礼品用途备注。",
    },
    {
      title: "保留文化购买记录",
      description: "保留礼品购买记录，方便后续回看活动用途和历史订单。",
    },
  ],
  checklist: [
    "已购礼品列表",
    "订单状态与物流信息",
    "收货地址与备注",
    "与活动礼品相关的说明",
  ],
  faq: [
    {
      question: "这里能看什么？",
      answer: "可以查看订单状态、物流信息、收货地址和用途备注。",
    },
    {
      question: "当前能直接下单吗？",
      answer: "当前页面主要用于查看订单进度和收货信息。",
    },
  ],
  primaryAction: { label: "查看礼品总览", href: "/gifts/catalog/" },
  secondaryAction: { label: "返回礼品频道", href: "/gifts/" },
  note: "下单后留意收货地址、物流和备注是否正确。",
};
