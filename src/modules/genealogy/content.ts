import type {
  PortalCard,
  PortalFact,
  PortalRole,
  WorkflowPageContent,
} from "@/modules/portal-shell";

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
  { label: "主线环节", value: "谱系归属" },
  { label: "定位", value: "唯一谱系入口中心" },
  { label: "下一步", value: "进入祭祖活动与宗亲连接" },
  { label: "访问方式", value: "公开先读说明，登录后办事" },
  { label: "核心动作", value: "寻根、续谱、接谱、状态查询" },
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
