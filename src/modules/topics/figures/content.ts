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
  avatarSrc: string;
  avatarAlt: string;
  avatarSourceLabel: string;
  avatarSourceHref: string;
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
    "从钱学森、钱三强、钱伟长等代表人物，理解钱氏精神如何在现代中国进入科学、教育与公共文化。",
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
      "钱学森被广泛视作中国航天事业的重要奠基者之一。他所代表的，并不只是个人才智，而是把学问转化为国家长期能力建设的担当。",
    tags: ["回国报国", "航天事业", "国家能力建设"],
    avatarSrc:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hsue-shen_Tsien_at_his_deportation_hearing_(cropped).jpg",
    avatarAlt: "钱学森头像照片",
    avatarSourceLabel:
      "Wikimedia Commons：Hsue-shen Tsien at his deportation hearing (cropped)",
    avatarSourceHref:
      "https://commons.wikimedia.org/wiki/File:Hsue-shen_Tsien_at_his_deportation_hearing_(cropped).jpg",
  },
  {
    id: "qian-sanqiang",
    name: "钱三强",
    field: "原子能科学事业",
    summary:
      "中国科学院公开资料将钱三强称为我国原子能科学事业的创始人。他的重要性不仅在科研成就，也在学科组织与人才布局。",
    tags: ["原子能", "科学组织", "人才培养"],
    avatarSrc:
      "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%B9%B4%E8%BD%BB%E7%9A%84%E9%92%B1%E4%B8%89%E5%BC%BA.jpg",
    avatarAlt: "钱三强青年时期头像照片",
    avatarSourceLabel: "Wikimedia Commons：年轻的钱三强",
    avatarSourceHref:
      "https://commons.wikimedia.org/wiki/File:%E5%B9%B4%E8%BD%BB%E7%9A%84%E9%92%B1%E4%B8%89%E5%BC%BA.jpg",
  },
  {
    id: "qian-weichang",
    name: "钱伟长",
    field: "力学、应用数学与教育",
    summary:
      "钱伟长既是近代力学和应用数学的重要奠基者之一，也是教育实践者。他让“国家的需要就是我的专业”成为近代钱氏精神的鲜明表达。",
    tags: ["力学", "教育", "国家需要"],
    avatarSrc:
      "https://commons.wikimedia.org/wiki/Special:FilePath/%E9%92%B1%E4%BC%9F%E9%95%BF%E9%99%A2%E5%A3%AB.jpg",
    avatarAlt: "钱伟长院士头像照片",
    avatarSourceLabel: "Wikimedia Commons：钱伟长院士",
    avatarSourceHref:
      "https://commons.wikimedia.org/wiki/File:%E9%92%B1%E4%BC%9F%E9%95%BF%E9%99%A2%E5%A3%AB.jpg",
  },
];

export const figuresValueBlocks: FiguresValueBlock[] = [
  {
    id: "learning",
    title: "学问不是装饰",
    description:
      "近代钱氏人物共同说明，读书治学并非只为一己功名，而要进入国家建设、社会服务与长期能力的积累。",
  },
  {
    id: "discipline",
    title: "成就来自自持",
    description:
      "无论是科研、办学还是公共事务，钱氏人物的共同底色都不是张扬，而是长期自律、守住原则、把事情做深做实。",
  },
  {
    id: "country",
    title: "家风最终落到家国",
    description:
      "从家训到人物，真正贯穿其中的不是一时名望，而是把个人所学与家国责任放在同一尺度上理解。",
  },
];

export const figuresSourceLinks: FiguresSourceLink[] = [
  {
    label:
      "Wikimedia Commons：Hsue-shen Tsien at his deportation hearing (cropped)",
    href: "https://commons.wikimedia.org/wiki/File:Hsue-shen_Tsien_at_his_deportation_hearing_(cropped).jpg",
    note: "用于钱学森头像素材（CC BY 4.0）。",
  },
  {
    label: "Wikimedia Commons：年轻的钱三强",
    href: "https://commons.wikimedia.org/wiki/File:%E5%B9%B4%E8%BD%BB%E7%9A%84%E9%92%B1%E4%B8%89%E5%BC%BA.jpg",
    note: "用于钱三强头像素材（Public Domain Mark 1.0）。",
  },
  {
    label: "Wikimedia Commons：钱伟长院士",
    href: "https://commons.wikimedia.org/wiki/File:%E9%92%B1%E4%BC%9F%E9%95%BF%E9%99%A2%E5%A3%AB.jpg",
    note: "用于钱伟长头像素材（Public Domain Mark 1.0）。",
  },
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
