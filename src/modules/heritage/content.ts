import type { PortalCard, PortalFact } from "@/modules/portal-shell";

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

export const heritageOverviewFacts: PortalFact[] = [
  { label: "主线环节", value: "文化认同" },
  { label: "总定位", value: "文化认同入口" },
  { label: "下一步", value: "进入家谱中心确认谱系归属" },
  { label: "四个栏目", value: "家风家训、吴越历史、近代人物、族人故事" },
  { label: "核心目标", value: "先认同，再进入谱系与组织连接" },
];
