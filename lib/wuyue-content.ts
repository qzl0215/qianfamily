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
    "从钱镠崛起、吴越立国到 978 年纳土归宋，理解钱氏历史主线何以长期被概括为保境安民、治水兴邦与审时度势。",
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
      "钱镠起于动荡之世，逐步奠定两浙根基，成为吴越历史的开端人物。",
  },
  {
    period: "吴越时期",
    title: "立国与治水",
    description:
      "吴越并非只以偏安著称，更因重视农桑水利、修筑海塘、保境安民而留下稳定治理的形象。",
  },
  {
    period: "978 年",
    title: "纳土归宋",
    description:
      "钱弘俶纳土归宋，后世常把这次抉择理解为审时度势与尽量避免江南再陷兵火。",
  },
  {
    period: "宋以后",
    title: "千年回响",
    description:
      "吴越记忆没有停在一朝一代，而是成为钱氏家训、地方文化与后世人物叙事的重要历史底板。",
  },
];

export const wuyueJudgmentBlocks: WuyueJudgmentBlock[] = [
  {
    id: "people",
    title: "保境安民",
    description:
      "这段历史最常被后人记住的，不是扩张性的武功，而是尽可能保存江南民生与社会秩序的治理取向。",
  },
  {
    id: "water",
    title: "治水兴邦",
    description:
      "从海塘到水利，吴越重视的是长久之利。它说明治理并不只在军事和权力，更在能否让百姓安居生产。",
  },
  {
    id: "judgment",
    title: "审时度势",
    description:
      "纳土归宋之所以被反复讨论，正在于它体现了一种把更大范围安定置于短期得失之前的历史判断。",
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
