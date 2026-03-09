export type PortalFact = {
  label: string;
  value: string;
};

export type PortalAction = {
  title: string;
  href: string;
  summary: string;
  note: string;
  status?: string;
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

export type PortalRole = {
  role: string;
  scope: string;
  description: string;
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
    summary: "先确认祖籍、支派和辈分线索，帮助族人从名字回到谱系与地缘。",
    note: "公开可先读说明，登录后提交线索。",
    status: "优先入口",
  },
  {
    title: "续谱",
    href: "/genealogy/continue/",
    summary: "为已知支派补录新世系、迁徙信息和关键人物资料，保持谱牒连续。",
    note: "登录后提交，进入审核流程。",
  },
  {
    title: "活动报名",
    href: "/events/upcoming/",
    summary: "从春祭、宗亲会到青年读书活动，把线上认同转成现实连接。",
    note: "活动公开可看，报名与签到需登录。",
  },
  {
    title: "礼品选购",
    href: "/gifts/catalog/",
    summary: "先理解文化意义，再选择家训卷轴、书签礼盒和祭祖纪念礼。",
    note: "礼品公开浏览，订单与收货记录需登录。",
  },
];

export const homeNarrativeCards: PortalCard[] = [
  {
    eyebrow: "精神主轴",
    title: "钱氏家训",
    href: "/heritage/jiafeng-jiaxun/",
    summary: "先理解善事国家、重德修身、崇文尚学，知道钱氏家族最稳定的价值底板。",
    meta: "原句图解 + 族人案例",
    actionLabel: "进入家风家训",
    tags: ["家训", "家风", "导读"],
  },
  {
    eyebrow: "历史底板",
    title: "钱王与吴越",
    href: "/heritage/wuyue/",
    summary: "从钱镠立国、治水兴邦到纳土归宋，把保境安民的历史判断放回真实脉络。",
    meta: "吴越史专题",
    actionLabel: "进入吴越专题",
    tags: ["吴越", "钱镠", "历史"],
  },
  {
    eyebrow: "现代回响",
    title: "近代钱氏人物",
    href: "/heritage/figures/",
    summary: "从钱学森、钱三强、钱伟长等人物，看家训精神如何走进现代中国。",
    meta: "人物专题",
    actionLabel: "进入人物专题",
    tags: ["科学", "教育", "人物"],
  },
];

export const genealogyCenterCards: PortalCard[] = [
  {
    eyebrow: "家谱中心",
    title: "寻根",
    href: "/genealogy/find-roots/",
    summary: "从祖籍、支派、辈分、迁徙线索开始，把零散口述重新接回谱系。",
    meta: "适合第一次使用的族人",
    actionLabel: "查看寻根流程",
  },
  {
    eyebrow: "家谱中心",
    title: "家谱续谱",
    href: "/genealogy/continue/",
    summary: "为已确认支派新增后代信息、迁移记录和关键家族资料。",
    meta: "适合支派负责人或资料掌握者",
    actionLabel: "查看续谱说明",
  },
  {
    eyebrow: "家谱中心",
    title: "我接家谱",
    href: "/genealogy/takeover/",
    summary: "认领支派维护责任，把谱牒整理、校对与联络逐步接续起来。",
    meta: "适合长期参与维护的族人",
    actionLabel: "了解接谱方式",
  },
  {
    eyebrow: "家谱中心",
    title: "我的提交 / 进度",
    href: "/genealogy/status/",
    summary: "查看资料提交、审核进度、补充说明与处理结果，不让办事过程失联。",
    meta: "登录后查看个人记录",
    actionLabel: "查看个人进度",
  },
];

export const genealogyFacts: PortalFact[] = [
  { label: "定位", value: "唯一谱系入口中心" },
  { label: "访问方式", value: "公开先读说明，登录后办事" },
  { label: "核心动作", value: "寻根、续谱、接谱、状态查询" },
];

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

export const cultureHighlightCards: PortalCard[] = [
  ...homeNarrativeCards,
  {
    eyebrow: "族人故事",
    title: "口述与迁徙故事",
    href: "/heritage/stories/",
    summary: "把寻根过程、支派口述、迁徙记忆和当代参与经验持续沉淀为站内内容。",
    meta: "内容回流入口",
    actionLabel: "查看故事栏目",
    tags: ["故事", "迁徙", "口述"],
  },
];

export const giftHighlightCards: PortalCard[] = [
  {
    eyebrow: "宣传礼品",
    title: "钱氏家训卷轴",
    href: "/gifts/jiaxun-scroll/",
    summary: "以家训核心句为主体的卷轴陈设，适合宗祠、家堂、书房与赠礼场景。",
    meta: "文化意义先于商品展示",
    actionLabel: "查看礼品详情",
    tags: ["家训", "陈设", "赠礼"],
  },
  {
    eyebrow: "宣传礼品",
    title: "吴越记忆礼盒",
    href: "/gifts/wuyue-heritage-set/",
    summary: "围绕钱王、吴越和长三角文化记忆设计的纪念礼盒，适合活动伴手礼。",
    meta: "适合祭祖与联谊活动",
    actionLabel: "查看礼品详情",
    tags: ["吴越", "纪念", "活动"],
  },
  {
    eyebrow: "宣传礼品",
    title: "家风书签与阅读套装",
    href: "/gifts/catalog/",
    summary: "把家训金句、人物故事和青年阅读场景结合起来，降低家风传播门槛。",
    meta: "适合青年活动与学习空间",
    actionLabel: "查看礼品总览",
    tags: ["阅读", "青年", "传播"],
  },
];

export const announcementCards: PortalCard[] = [
  {
    eyebrow: "宗亲动态",
    title: "家谱中心上线第一阶段办事入口",
    href: "/genealogy/",
    summary: "寻根、续谱、接谱与提交状态查询统一收入口中心，减少平行入口造成的混乱。",
    meta: "站点更新",
    actionLabel: "查看家谱中心",
  },
  {
    eyebrow: "内容回流",
    title: "家训专题已升级为正式导读页",
    href: "/heritage/jiafeng-jiaxun/",
    summary: "采用原句、图片和族人案例的结构，让文化内容先作为站点信任基础稳定下来。",
    meta: "内容更新",
    actionLabel: "前往专题",
  },
  {
    eyebrow: "活动公告",
    title: "春祭告祖礼进入筹备与报名说明阶段",
    href: "/events/upcoming/",
    summary: "活动页将统一承载时间、地点、流程、报名和签到说明，逐步形成完整活动系统。",
    meta: "活动预告",
    actionLabel: "查看近期活动",
  },
  {
    eyebrow: "礼品计划",
    title: "宣传礼品频道开始按场景组织内容",
    href: "/gifts/occasions/",
    summary: "不做单纯堆货页，而是先按祭祖、赠礼、阅读、纪念等场景理解礼品的文化用途。",
    meta: "频道规划",
    actionLabel: "查看礼品场景",
  },
];

export const accessRoles: PortalRole[] = [
  {
    role: "游客",
    scope: "公开浏览",
    description: "可查看首页、文化内容、活动详情、礼品目录以及家谱中心说明。",
  },
  {
    role: "族人用户",
    scope: "登录办事",
    description: "可提交寻根、续谱、接谱、活动报名、订单和个人进度查看。",
  },
  {
    role: "运营 / 宗亲会管理员",
    scope: "发布与审核",
    description: "负责谱系审核、活动发布、订单管理和内容持续更新。",
  },
];

export const heritageOverviewFacts: PortalFact[] = [
  { label: "总定位", value: "文化认同入口" },
  { label: "四个栏目", value: "家风家训、吴越历史、近代人物、族人故事" },
  { label: "核心目标", value: "先认同，再进入谱系与组织连接" },
];

export const heritageOverviewSections = [
  {
    eyebrow: "专题入口",
    title: "从三条主线进入文化认同",
    description:
      "文化传承不是办事中心，而是宗亲门户的认知底板。它回答“我们是谁、从哪里来、为何值得继续传承”。",
    cards: cultureHighlightCards,
  },
] as const;

export const storyCards: PortalCard[] = [
  {
    eyebrow: "族人故事",
    title: "迁徙与落脚",
    href: "/heritage/stories/",
    summary: "记录支派从吴越故地走向江南、华东乃至海外的迁徙路径与生活转折。",
    meta: "筹备中",
    actionLabel: "查看栏目说明",
  },
  {
    eyebrow: "族人故事",
    title: "寻根经历",
    href: "/genealogy/find-roots/",
    summary: "把族人如何从口述、墓志、地方志和旧谱中重新确认谱系线索的过程沉淀为经验。",
    meta: "与家谱中心联动",
    actionLabel: "了解寻根方式",
  },
  {
    eyebrow: "族人故事",
    title: "当代参与",
    href: "/events/upcoming/",
    summary: "把祭祖、读书、宗亲联谊和志愿协作中的真实参与回流为新的公共内容。",
    meta: "与活动系统联动",
    actionLabel: "查看活动入口",
  },
];

export const eventsOverviewFacts: PortalFact[] = [
  { label: "频道定位", value: "宗亲连接入口" },
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

export const giftsOverviewFacts: PortalFact[] = [
  { label: "频道定位", value: "文化商品与纪念传播入口" },
  { label: "展示逻辑", value: "先讲文化意义，再讲商品用途" },
  { label: "后续能力", value: "登录下单、订单跟踪、活动定制" },
];

export const giftOccasionCards: PortalCard[] = [
  {
    eyebrow: "使用场景",
    title: "祭祖与宗亲活动",
    href: "/gifts/occasions/",
    summary: "适合用于祭祖、联谊、读书会的纪念礼、伴手礼和现场传播物料。",
    meta: "活动场景",
    actionLabel: "查看场景说明",
  },
  {
    eyebrow: "使用场景",
    title: "家堂与书房陈设",
    href: "/gifts/jiaxun-scroll/",
    summary: "适合把家训、人物故事与家风陈设结合到日常空间，而不是停留在一次性纪念。",
    meta: "家庭场景",
    actionLabel: "查看礼品详情",
  },
  {
    eyebrow: "使用场景",
    title: "赠礼与传播",
    href: "/gifts/wuyue-heritage-set/",
    summary: "将钱氏文化内容转成更易传播的礼品语言，兼顾纪念、赠送和日常阅读。",
    meta: "传播场景",
    actionLabel: "查看礼品详情",
  },
];

export const genealogyFindRootsContent: WorkflowPageContent = {
  eyebrow: "家谱中心",
  title: "寻根",
  lead: "先从祖籍、辈分、迁徙和口述线索开始，把散落的信息重新接回谱系。",
  summary:
    "这个页面服务于第一次进入家谱中心的族人。先理解需要哪些信息，再提交线索，避免一上来就填表却不知道自己要找什么。",
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
      description: "是想找祖籍、找支派、找上一代世系，还是确认家训、宗祠和活动关系，目标不同，线索也不同。",
    },
    {
      title: "登录后提交线索",
      description: "提交基础信息、附件与补充说明，系统会进入资料核对、支派比对和反馈阶段。",
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
      answer: "可以。寻根并不只依赖旧谱，祖籍、辈分、地名、口述和迁徙信息都可能成为有效线索。",
    },
    {
      question: "寻根一定能马上匹配到支派吗？",
      answer: "不一定。很多线索需要与旧谱、支派资料和地方文献交叉核对，所以系统会保留补充说明和后续反馈。",
    },
    {
      question: "为什么先看说明再提交？",
      answer: "因为寻根最怕材料散乱。先看说明能减少无效提交，也能帮助族人知道自己还需要补什么信息。",
    },
  ],
  primaryAction: { label: "进入家谱中心总览", href: "/genealogy/" },
  secondaryAction: { label: "查看提交进度说明", href: "/genealogy/status/" },
  note: "当前站点先提供清晰的说明骨架。正式版本会在这里接入登录、提交与审核流程。",
};

export const genealogyContinueContent: WorkflowPageContent = {
  eyebrow: "家谱中心",
  title: "家谱续谱",
  lead: "续谱不是补一个名字，而是让支派、代际和迁徙信息持续不断裂。",
  summary:
    "这个页面面向已经确认支派或掌握较完整家族信息的族人，目标是把新增世系、婚配、迁移和人物资料规范地补入系统。",
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
      answer: "续谱直接影响整支派的谱系结构，需要核对重复、世代关系和材料真实性，不能只靠单次提交直接入谱。",
    },
    {
      question: "能不能先记下来，后面再补材料？",
      answer: "可以先整理草稿，但正式提交时仍建议至少附上基础说明和能支持判断的材料。",
    },
    {
      question: "系统会保留修改记录吗？",
      answer: "规划中会保留提交记录、审核意见和版本变化，方便长期维护和接续。",
    },
  ],
  primaryAction: { label: "返回家谱中心", href: "/genealogy/" },
  secondaryAction: { label: "了解我接家谱", href: "/genealogy/takeover/" },
  note: "续谱页会逐步扩展为可登录提交、可审核追踪的工作台。当前先把逻辑、流程和内容结构稳定下来。",
};

export const genealogyTakeoverContent: WorkflowPageContent = {
  eyebrow: "家谱中心",
  title: "我接家谱",
  lead: "接谱不是一次认领，而是持续承担联络、整理、校对和更新的责任。",
  summary:
    "这个页面用于说明支派维护者如何接手谱牒工作，以及接手之后需要承担哪些长期职责和协作关系。",
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
      description: "后续会与管理员、其他支派联系人协同推进续谱、校对与资料沉淀。",
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
      answer: "不是。接谱更像维护责任，需要在支派和平台协作下推进，不是个人独断。",
    },
    {
      question: "没有完整旧谱还能接谱吗？",
      answer: "可以，但需要明确你掌握的范围和缺口，接谱本身也会推动资料再搜集与联络。",
    },
    {
      question: "后续会有协作工具吗？",
      answer: "规划中会增加进度追踪、任务备注和资料回访能力，支持长期维护。",
    },
  ],
  primaryAction: { label: "返回家谱中心", href: "/genealogy/" },
  secondaryAction: { label: "查看续谱说明", href: "/genealogy/continue/" },
  note: "接谱页会成为未来家谱工作台的重要入口。当前先把责任边界、工作方式和协作关系说清楚。",
};

export const genealogyStatusContent: WorkflowPageContent = {
  eyebrow: "家谱中心",
  title: "我的提交 / 进度",
  lead: "所有寻根、续谱和接谱动作，都应该有明确的状态回执和补充说明入口。",
  summary:
    "这不是单独的资讯页，而是未来登录后查看个人记录的工作台。当前先把会看到哪些状态、如何理解这些状态讲清楚。",
  chips: ["个人记录", "进度回执", "补充说明"],
  facts: [
    { label: "查看对象", value: "寻根、续谱、接谱、活动报名、礼品订单" },
    { label: "状态类型", value: "待处理、需补充、审核中、已完成" },
    { label: "后续能力", value: "消息通知、补件、历史记录" },
  ],
  steps: [
    {
      title: "查看当前状态",
      description: "每次提交都会对应一个明确的进度状态，知道当前停在哪个环节、是否需要你继续补充。",
    },
    {
      title: "根据反馈补充材料",
      description: "如果系统或管理员发出补充说明，会明确缺失点，避免反复沟通却没有结果。",
    },
    {
      title: "保留历史记录",
      description: "后续会保留你的提交记录、处理意见与最终结果，便于长期回看与复用。",
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
      question: "为什么把活动和订单也放进这里？",
      answer: "因为宗亲门户不是单一内容站。家谱、活动和礼品都属于同一位族人的个人参与记录。",
    },
    {
      question: "状态页什么时候会真正上线？",
      answer: "当前先完成信息架构和说明。后续接入登录后，这里会变成个人中心的重要组成部分。",
    },
    {
      question: "能否收到处理提醒？",
      answer: "规划中会增加站内提醒和消息通知，避免提交后长期无反馈。",
    },
  ],
  primaryAction: { label: "返回家谱中心", href: "/genealogy/" },
  secondaryAction: { label: "进入寻根说明", href: "/genealogy/find-roots/" },
  note: "状态页的存在，是为了把“已提交”真正变成“可追踪、可反馈、可回看”的体验。",
};

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

export const giftDetails: DetailPageContent[] = [
  {
    slug: "jiaxun-scroll",
    eyebrow: "宣传礼品",
    title: "钱氏家训卷轴",
    lead: "把家训核心句转化为可陈设、可赠送、可长期观看的文化物件。",
    summary:
      "礼品频道不做单纯堆货页。每个礼品都要先说明它承载的文化意义、使用场景和传播方式，再进入购买逻辑。",
    chips: ["家训", "陈设", "赠礼"],
    facts: [
      { label: "适用场景", value: "家堂、书房、宗祠、赠礼" },
      { label: "内容核心", value: "家训原句与价值关键词" },
      { label: "购买方式", value: "目录公开浏览，登录后下单" },
    ],
    highlights: [
      {
        title: "文化意义",
        description: "让家训不只停在页面阅读，而能进入家庭与公共空间的日常观看。",
      },
      {
        title: "展示方式",
        description: "以卷轴形式突出核心句与题签，更适合宗祠、家堂和书房陈设。",
      },
      {
        title: "传播作用",
        description: "适合作为家庭礼、宗亲礼和活动纪念礼，承担低门槛传播作用。",
      },
    ],
    checklist: [
      "先了解家训原句与主题",
      "再判断适用空间和赠礼对象",
      "登录后进入下单与订单跟踪",
    ],
    faq: [
      {
        question: "为什么礼品也放在门户站里？",
        answer: "因为礼品是文化传播和参与行动的一部分，不是独立于宗亲门户之外的纯电商行为。",
      },
      {
        question: "礼品页会只有商品参数吗？",
        answer: "不会。礼品页首先讲文化意义和使用场景，然后才是规格和下单入口。",
      },
    ],
    primaryAction: { label: "查看礼品总览", href: "/gifts/catalog/" },
    secondaryAction: { label: "返回礼品频道", href: "/gifts/" },
    note: "当前先完成礼品信息架构和展示逻辑，后续再接入正式订单能力。",
  },
  {
    slug: "wuyue-heritage-set",
    eyebrow: "宣传礼品",
    title: "吴越记忆礼盒",
    lead: "围绕钱王、吴越和长三角文化记忆设计的活动纪念礼。",
    summary:
      "这类礼品更适合活动伴手礼、宗亲联谊和纪念传播场景。页面需要同时讲清历史主题、设计方向和用途边界。",
    chips: ["吴越", "纪念", "活动伴手礼"],
    facts: [
      { label: "适用场景", value: "祭祖、联谊、会务纪念" },
      { label: "内容主题", value: "钱王、吴越、长三角记忆" },
      { label: "后续能力", value: "公开展示，登录后下单或团体定制" },
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
        description: "礼品既是纪念物，也是把历史专题延展到现实场景的传播媒介。",
      },
    ],
    checklist: [
      "先理解礼盒主题和适用场景",
      "判断是否用于活动纪念或赠礼",
      "登录后进入订单或团体定制说明",
    ],
    faq: [
      {
        question: "为什么礼品页要讲这么多背景？",
        answer: "因为这里卖的不只是商品，更是与家训、吴越、人物等主题相关的文化意义。",
      },
      {
        question: "能否作为活动定制礼？",
        answer: "规划中会支持团体采购和活动定制，所以页面会预留场景与用途说明。",
      },
    ],
    primaryAction: { label: "查看礼品总览", href: "/gifts/catalog/" },
    secondaryAction: { label: "返回礼品频道", href: "/gifts/" },
    note: "礼品频道后续会把活动需求、团体采购和订单跟踪统一纳入一个频道逻辑中。",
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

export const giftOrdersContent: WorkflowPageContent = {
  eyebrow: "宣传礼品",
  title: "我的订单",
  lead: "礼品频道最终要有完整的订单、收货和后续服务记录，而不是只有一个下单按钮。",
  summary:
    "当前先把订单页的角色说清楚：查看已购礼品、跟踪订单状态、处理收货信息，并让活动礼品和家庭礼品都能纳入同一套记录。",
  chips: ["订单跟踪", "登录后查看", "文化商品"],
  facts: [
    { label: "可查看内容", value: "订单状态、收货信息、物流与售后说明" },
    { label: "当前定位", value: "礼品个人工作台说明页" },
    { label: "后续能力", value: "下单、支付、物流和历史订单记录" },
  ],
  steps: [
    {
      title: "查看当前订单",
      description: "清楚知道已下单、待发货、运输中还是已完成，避免礼品频道变成一次性展示。",
    },
    {
      title: "管理收货信息",
      description: "后续会统一处理个人地址、活动团体地址和礼品用途备注。",
    },
    {
      title: "保留文化购买记录",
      description: "让礼品行为也成为门户中的参与记录，而不是与文化和活动断开的独立订单。",
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
      question: "为什么礼品订单也要放进宗亲门户？",
      answer: "因为礼品不是纯电商，它与活动、纪念和传播场景有关，应与族人的其他参与记录放在一起。",
    },
    {
      question: "当前能直接下单吗？",
      answer: "目前先完成信息架构和展示逻辑，正式订单能力会在后续版本接入。",
    },
  ],
  primaryAction: { label: "查看礼品总览", href: "/gifts/catalog/" },
  secondaryAction: { label: "返回礼品频道", href: "/gifts/" },
  note: "订单页会在后续版本中接入正式下单与物流能力。当前先把频道定位、结构和用户预期立住。",
};
