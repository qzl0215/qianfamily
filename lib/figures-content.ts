export type FiguresHeroFact = {
  label: string;
  value: string;
};

export type FiguresPersonBlock = {
  id: string;
  name: string;
  field: string;
  summary: string;
  tags: string[];
};

export type FiguresValueBlock = {
  id: string;
  title: string;
  description: string;
};

export type FiguresSourceLink = {
  label: string;
  href: string;
  note: string;
};

export const figuresPageMeta = {
  title: "近代钱氏人物",
  description:
    "从三位代表人物，看钱氏精神如何进入现代中国。",
} as const;

export const figuresHeroFacts: FiguresHeroFact[] = [
  { label: "代表人物", value: "钱学森 / 钱三强 / 钱伟长" },
  { label: "核心领域", value: "航天 / 原子能 / 力学与教育" },
  { label: "共同特质", value: "学以报国，守正笃实" },
];

export const figuresPersonBlocks: FiguresPersonBlock[] = [
  {
    id: "qian-xuesen",
    name: "钱学森",
    field: "航天与系统工程",
    summary:
      "钱学森是中国航天事业的重要奠基者之一，代表的是把学问转成国家长期能力。",
    tags: ["回国报国", "航天事业", "国家能力建设"],
  },
  {
    id: "qian-sanqiang",
    name: "钱三强",
    field: "原子能科学事业",
    summary:
      "钱三强是我国原子能科学事业的创始人之一，重要性也在学科组织与人才布局。",
    tags: ["原子能", "科学组织", "人才培养"],
  },
  {
    id: "qian-weichang",
    name: "钱伟长",
    field: "力学、应用数学与教育",
    summary:
      "钱伟长既治学也办学，“国家的需要就是我的专业”常被用来概括他。",
    tags: ["力学", "教育", "国家需要"],
  },
];

export const figuresValueBlocks: FiguresValueBlock[] = [
  {
    id: "learning",
    title: "学问不是装饰",
    description:
      "读书治学不只为个人功名，更要进入国家建设与社会服务。",
  },
  {
    id: "discipline",
    title: "成就来自自持",
    description:
      "他们长期自律、守住原则，也把事情做深做实。",
  },
  {
    id: "country",
    title: "家风最终落到家国",
    description:
      "共同点不在同姓，而在把个人所学和家国责任放在一起。",
  },
];

export const figuresSourceLinks: FiguresSourceLink[] = [
  {
    label: "上海交通大学：钱学森回国 70 周年系列活动正式启动",
    href: "https://news.sjtu.edu.cn/jdyw/20250427/209754.html",
    note: "用于钱学森作为中国航天事业重要奠基者的公开表述。",
  },
  {
    label: "中国科学院：钱三强——我国原子能科学事业的创始人",
    href: "https://www.cas.cn/xzfc/202206/t20220630_4840013.shtml",
    note: "用于钱三强在原子能科学事业中的定位。",
  },
  {
    label: "上海大学：传扬爱国志，砥砺报国行",
    href: "https://www.shu.edu.cn/info/1056/355985.htm",
    note: "用于钱伟长与“国家的需要就是我的专业”相关公开表述。",
  },
];
