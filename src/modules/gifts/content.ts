import type {
  DetailPageContent,
  FaqItem,
  PortalCard,
  PortalFact,
  WorkflowStep,
} from "@/modules/portal-shell";

export const giftsOverviewFacts: PortalFact[] = [
  { label: "主线环节", value: "参与行动" },
  { label: "频道定位", value: "文化商品与纪念传播入口" },
  { label: "下一步", value: "活动与故事回流为公共内容" },
  { label: "展示逻辑", value: "先讲文化意义，再讲商品用途" },
  { label: "后续能力", value: "登录下单、订单跟踪、活动定制" },
];

export const giftsLandingFacts: PortalFact[] = [
  { label: "你会先完成", value: "先确定场景，再锁定礼品方向" },
  { label: "公开可看", value: "场景建议、代表礼品、使用说明" },
  { label: "登录后可办", value: "下单、订单跟踪、团体定制" },
  { label: "建议路径", value: "看场景 -> 选礼品 -> 提交需求" },
  { label: "下一步", value: "进入目录确认规格与详情" },
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

export const giftOrderFacts: PortalFact[] = [
  { label: "下单前准备", value: "款式、数量、用途、收货信息" },
  { label: "提交后可见", value: "待确认、待发货、运输中、已完成" },
  { label: "适用对象", value: "个人购买与活动批量需求" },
  { label: "常见处理", value: "修改信息、合并需求、物流跟踪" },
  { label: "下一步", value: "先确认清单，再提交订单需求" },
];

export const giftOrderPreparationBlocks = [
  {
    eyebrow: "01 选品与规格",
    title: "确认礼品款式、尺寸和材质",
    description: "先确定核心款式，再补充规格细节，避免提交后再改款。",
  },
  {
    eyebrow: "02 数量与时间",
    title: "明确数量与使用时间点",
    description: "活动批量建议写明日期，便于安排制作与交付节奏。",
  },
  {
    eyebrow: "03 收货信息",
    title: "填写联系人、地址与电话",
    description: "建议提交可直接签收的信息，减少物流二次确认。",
  },
  {
    eyebrow: "04 用途备注",
    title: "写明赠礼、陈设或活动用途",
    description: "明确用途后，运营侧更容易给出合适的组合建议。",
  },
] as const;

export const giftOrderStatusSteps: WorkflowStep[] = [
  {
    title: "待确认",
    description: "需求已收到，正在核对款式、数量和收货信息是否完整。",
  },
  {
    title: "待发货",
    description: "信息确认完成，订单进入制作或打包准备阶段。",
  },
  {
    title: "运输中",
    description: "已发出，可跟踪物流节点；若地址有误需立即联系调整。",
  },
  {
    title: "已完成",
    description: "已签收并完成交付，可继续回到礼品频道补充后续需求。",
  },
];

export const giftOrderFaq: FaqItem[] = [
  {
    question: "现在可以直接在线支付吗？",
    answer: "当前页面先提供下单前准备和状态说明。在线支付与完整订单流程会在后续版本接入。",
  },
  {
    question: "活动批量礼品和个人礼品是同一套流程吗？",
    answer: "是。两者都先提交需求，再按状态跟踪；区别在于活动批量通常需要补充活动时间和用途备注。",
  },
  {
    question: "提交后发现信息有误怎么办？",
    answer: "请尽快通过订单沟通入口补充正确信息。为减少反复修改，建议提交前先完成本页的四项准备清单。",
  },
];
