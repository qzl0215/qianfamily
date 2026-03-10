export type WuyueHeroFact = {
  label: string;
  value: string;
};

export type WuyueTimelineBlock = {
  period: string;
  title: string;
  description: string;
};

export type WuyueJudgmentBlock = {
  id: string;
  title: string;
  description: string;
};

export type WuyueSourceLink = {
  label: string;
  href: string;
  note: string;
};

export const wuyuePageMeta = {
  title: "钱王与吴越",
  description:
    "从钱镠崛起、吴越立国到纳土归宋，快速看清吴越历史主线。",
} as const;

export const wuyueHeroFacts: WuyueHeroFact[] = [
  { label: "钱镠", value: "852-932" },
  { label: "吴越", value: "907-978" },
  { label: "关键转折", value: "978 纳土归宋" },
];

export const wuyueTimelineBlocks: WuyueTimelineBlock[] = [
  {
    period: "晚唐五代",
    title: "乱世起身",
    description:
      "钱镠起于晚唐五代动荡之中，逐步奠定两浙根基。",
  },
  {
    period: "吴越时期",
    title: "立国与治水",
    description:
      "吴越重视农桑水利、修筑海塘，也因此留下保境安民的形象。",
  },
  {
    period: "978 年",
    title: "纳土归宋",
    description:
      "978 年钱弘俶纳土归宋，后世常把这次抉择理解为尽量避免江南再陷兵火。",
  },
  {
    period: "宋以后",
    title: "千年回响",
    description:
      "吴越记忆后来进入家训、地方文化与人物叙事。",
  },
];

export const wuyueJudgmentBlocks: WuyueJudgmentBlock[] = [
  {
    id: "people",
    title: "保境安民",
    description:
      "后人最常记住的，是尽量保住江南民生与社会秩序。",
  },
  {
    id: "water",
    title: "治水兴邦",
    description:
      "海塘与水利说明，治理不仅在兵事，也在能否让百姓安居生产。",
  },
  {
    id: "judgment",
    title: "审时度势",
    description:
      "纳土归宋常被视为把更大范围的安定放在短期得失之前。",
  },
];

export const wuyueSourceLinks: WuyueSourceLink[] = [
  {
    label: "杭州市文化广电旅游局：吴越千年概述",
    href: "https://wgly.hangzhou.gov.cn/art/2024/5/14/art_1229788034_58955601.html",
    note: "用于吴越历史主线、保境安民与纳土归宋相关公开表述。",
  },
  {
    label: "临安区人民政府：文化历史",
    href: "https://www.linan.gov.cn/art/2025/8/4/art_1366302_59118787.html",
    note: "用于钱镠生卒与钱王历史地位的补充事实。",
  },
];
