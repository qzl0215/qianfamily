export type JiaxunHeroFact = {
  label: string;
  value: string;
};

export type JiaxunValueBlock = {
  id: string;
  title: string;
  description: string;
};

export type JiaxunChapterBlock = {
  id: string;
  title: string;
  summary: string;
  keywords: string[];
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
};

export type JiaxunQuoteCaseBlock = {
  id: string;
  theme: string;
  chapter: string;
  focus: JiaxunCaseFilter[];
  quote: string;
  explanation: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  casePerson: string;
  caseEra: string;
  caseTags: string[];
  caseSummary: string;
};

export type JiaxunCaseFilter = "修身" | "治家" | "报国";

export type JiaxunSourceLink = {
  label: string;
  href: string;
  note: string;
};

export type JiaxunTransmissionBlock = {
  id: string;
  title: string;
  description: string;
};

export type JiaxunFormationStep = {
  id: string;
  period: string;
  title: string;
  description: string;
};

export type JiaxunShanghaiDetail = {
  id: string;
  title: string;
  description: string;
};

export const jiaxunPageMeta = {
  title: "钱氏家训",
  description:
    "从家训定义、四篇结构到原句图解与族人案例，读懂钱氏家训如何把家族精神推进到家国担当。",
} as const;

export const heroFacts: JiaxunHeroFact[] = [
  { label: "公布时间", value: "2021（第五批）" },
  { label: "所属地区", value: "上海市" },
  { label: "保护单位", value: "上海市地方史志学会" },
];

export const valueBlocks: JiaxunValueBlock[] = [
  {
    id: "serve-country",
    title: "善事国家",
    description:
      "它要求族人把眼光从一家一身的得失抬高到公共责任之上。家训不是把人困在小家，而是把做人做事的尺度一路推向国家与天下。",
  },
  {
    id: "self-cultivation",
    title: "重德修身",
    description:
      "钱氏家训把修身放在极靠前的位置，强调心术、言行、自省与分寸。先把人做端正，再谈成事，这构成了整部家训的道德底色。",
  },
  {
    id: "learning",
    title: "崇文尚学",
    description:
      "它把读书视作家风的基础，不把学问理解成一时求名，而是把它看成长久立身、判断世事、服务社会与国家的根底。",
  },
];

export const chapterBlocks: JiaxunChapterBlock[] = [
  {
    id: "personal",
    title: "个人篇",
    summary:
      "围绕修身、自省、言行与治学展开，要求先正心术、再端言行，把做人的根基立稳。",
    keywords: ["心术", "言行", "读书"],
    imageSrc: "/topics/jiaxun/chapter-personal.svg",
    imageAlt: "钱氏家训个人篇图板，展示修身、自省与言行关键词。",
    imageCaption:
      "个人篇图板：从心术、言行到读书，先把人的根基立起来。来源：站内专题图板。",
  },
  {
    id: "family",
    title: "家庭篇",
    summary:
      "从孝悌、择偶、和睦与治家出发，把家庭视作家风落实的第一现场，强调家道平和与代际教养。",
    keywords: ["孝悌", "和睦", "治家"],
    imageSrc: "/topics/jiaxun/chapter-family.svg",
    imageAlt: "钱氏家训家庭篇图板，展示孝悌、和睦与治家关键词。",
    imageCaption:
      "家庭篇图板：家训并不只约束个人，也规定了家庭秩序与代际责任。来源：站内专题图板。",
  },
  {
    id: "society",
    title: "社会篇",
    summary:
      "把待人、周急、解纷与公益放进日常生活，说明家训不能只顾小家，还要把善意推向邻里与社会。",
    keywords: ["周急", "解纷", "公益"],
    imageSrc: "/topics/jiaxun/chapter-society.svg",
    imageAlt: "钱氏家训社会篇图板，展示周急、解纷与公益关键词。",
    imageCaption:
      "社会篇图板：从家内走向家外，把做人准则推进到社会关系之中。来源：站内专题图板。",
  },
  {
    id: "state",
    title: "国家篇",
    summary:
      "把家风最终落到家国担当上，强调善事国家、利在天下与交邻有道，让家训拥有超出一家一姓的公共意义。",
    keywords: ["家国", "担当", "天下"],
    imageSrc: "/topics/jiaxun/chapter-state.svg",
    imageAlt: "钱氏家训国家篇图板，展示家国、担当与天下关键词。",
    imageCaption:
      "国家篇图板：家训的落点不止治家，更通向家国一体的责任观。来源：站内专题图板。",
  },
];

export const quoteCaseBlocks: JiaxunQuoteCaseBlock[] = [
  {
    id: "qian-liu",
    theme: "保境安民 / 立身行事",
    chapter: "个人篇 / 国家篇",
    focus: ["修身", "治家", "报国"],
    quote:
      "心术不可得罪于天地，言行皆当无愧于圣贤。\n\n持躬不可不谨严，临财不可不廉介。",
    explanation:
      "这两句把家训的起点放在心术、言行与操守之上。它要求人先正其心，再严其身，在面对权力和利益时仍保持分寸与廉介，不用权术和小利败坏自己的根基。",
    imageSrc: "/topics/jiaxun/case-qianliu.svg",
    imageAlt: "钱镠案例图板，展示保境安民与吴越立国主题。",
    imageCaption:
      "案例图板：钱镠与吴越开端，常被概括为“保境安民”的政治选择。来源：站内专题图板。",
    casePerson: "钱镠",
    caseEra: "晚唐至五代",
    caseTags: ["保境安民", "善事中原", "重农兴水利"],
    caseSummary:
      "钱镠创建吴越，在战乱频仍的五代时期采取“保境安民”和“善事中原”的方针，重农桑、兴水利，让两浙获得相对稳定的发展环境，也为后世钱氏家训定下务实而克制的底色。",
  },
  {
    id: "qian-hongchu",
    theme: "利在天下 / 家国大义",
    chapter: "国家篇",
    focus: ["报国", "治家"],
    quote:
      "利在一身勿谋也，利在天下者必谋之。\n\n利在一时固谋也，利在万世者更谋之。",
    explanation:
      "这组原句把义利判断一路推到更大的尺度上。真正重要的，不是一姓一身和一时之利，而是能否把公共利益和长远安稳放在前面。",
    imageSrc: "/topics/jiaxun/case-qianhongchu.svg",
    imageAlt: "钱弘俶案例图板，展示纳土归宋与家国大义主题。",
    imageCaption:
      "案例图板：钱弘俶纳土归宋，常被后人理解为把百姓免遭兵戈放在前面。来源：站内专题图板。",
    casePerson: "钱弘俶",
    caseEra: "五代末至北宋之交",
    caseTags: ["纳土归宋", "避免战火", "家国大义"],
    caseSummary:
      "978年，吴越末代国王钱弘俶纳土归宋。今天对这段历史的主流解读，常落在“尽量避免江南再陷战火”上，这也使它成为钱氏家训中“利在天下”最具象的一次历史注脚。",
  },
  {
    id: "qian-xuesen",
    theme: "善事国家 / 科学报国",
    chapter: "国家篇",
    focus: ["修身", "报国"],
    quote: "执法如山，守身如玉。",
    explanation:
      "这句强调原则、操守与自我约束。把它放在现代语境里看，指向的并不是僵硬，而是在面向国家重大事业时，仍能守住纪律、责任和做人底线。",
    imageSrc: "/topics/jiaxun/case-qianxuesen.svg",
    imageAlt: "钱学森案例图板，展示科学报国与航天事业主题。",
    imageCaption:
      "案例图板：钱学森回国后投身中国航天事业，体现把才智放进国家长远需要之中。来源：站内专题图板。",
    casePerson: "钱学森",
    caseEra: "现代中国",
    caseTags: ["回国报国", "航天奠基", "长期能力建设"],
    caseSummary:
      "钱学森被广泛视作中国航天事业的重要奠基者。回国后，他参与规划导弹、火箭与航天事业的发展方向，把个人所学转入国家长期能力建设，成为钱氏家训“善事国家”在现代科技领域中的鲜明例证。",
  },
  {
    id: "qian-sanqiang",
    theme: "崇文尚学 / 学术报国",
    chapter: "个人篇 / 国家篇",
    focus: ["修身", "报国"],
    quote:
      "子孙虽愚，诗书须读。\n\n读经传则根柢深，看史鉴则议论伟。",
    explanation:
      "这组原句不把读书当成装饰，也不只把它看成一时上升的工具，而是把持续学习、建立学养和形成判断力都视作家风的基本要求。",
    imageSrc: "/topics/jiaxun/case-qiansanqiang.svg",
    imageAlt: "钱三强案例图板，展示学术报国与核科学事业主题。",
    imageCaption:
      "案例图板：钱三强以深厚学术训练和组织能力推动中国原子能事业起步。来源：站内专题图板。",
    casePerson: "钱三强",
    caseEra: "现代中国",
    caseTags: ["原子能事业", "学术训练", "组织能力"],
    caseSummary:
      "钱三强是我国原子能科学事业的创始人。除了个人科研成就，他还在人才组织、科研布局与事业起步阶段发挥了关键作用，让“读书治学”真正转化为国家层面的科学能力。",
  },
  {
    id: "qian-weichang",
    theme: "治学与育人 / 国家需要",
    chapter: "个人篇 / 国家篇",
    focus: ["修身", "报国"],
    quote: "兴学育才则国盛；交邻有道则国安。",
    explanation:
      "这句把治学与国家兴盛直接连在一起。它关心的不是个人名望，而是教育如何成为国家能力的一部分，也提醒后人把专业选择和社会责任放在一起理解。",
    imageSrc: "/topics/jiaxun/case-qianweichang.svg",
    imageAlt: "钱伟长案例图板，展示治学育人与国家需要主题。",
    imageCaption:
      "案例图板：钱伟长把治学、办学与国家需要连成了一条线。来源：站内专题图板。",
    casePerson: "钱伟长",
    caseEra: "现代中国",
    caseTags: ["力学奠基", "教育实践", "国家需要"],
    caseSummary:
      "钱伟长既是中国近代力学、应用数学的奠基人之一，也是重要教育家。上海大学回顾他的一生时，常把“国家的需要就是我的专业”作为理解他的关键词，这与钱氏家训对读书、见识与担当的要求高度同频。",
  },
];

export const transmissionBlocks: JiaxunTransmissionBlock[] = [
  {
    id: "family",
    title: "家庭与宗祠",
    description:
      "钱氏家训最早的生命力来自家族日常。它通过长辈讲述、节庆诵读和代际示范被不断重复，而不是停留在书页上。",
  },
  {
    id: "public-culture",
    title: "公共文化场域",
    description:
      "进入当代以后，它的传播不再局限于家内空间，也进入图书馆、展陈、地方文化活动与公共讲述。中国非遗网提到，新时代的诵读地点已包括宗祠与钱学森图书馆等公共空间。",
  },
  {
    id: "research",
    title: "研究整理与出版",
    description:
      "家训从家族内部文本转向公共文化遗产的过程中，离不开整理、研究、出版与阐释，这让它能被更广泛的人读懂和引用。",
  },
  {
    id: "digital",
    title: "数字化传播",
    description:
      "今天的传承也包括线上阅读、数字化资料和轻量传播，让家训不只属于族谱或祠堂，而是进入普通读者的日常阅读路径。",
  },
];

export const formationSteps: JiaxunFormationStep[] = [
  {
    id: "eight-precepts",
    period: "五代时期",
    title: "钱镠遗训奠定起点",
    description:
      "中国非遗网明确写到，钱氏家训以吴越国国王钱镠留下的遗训“八训”为始，这条线把家训的源头直接连回吴越立国时期。",
  },
  {
    id: "lineage-rules",
    period: "宋元以降",
    title: "历代支派不断补充",
    description:
      "从钱镠遗训到各支家规、谱例和祭祖诵读，钱氏家训并非一次写定，而是在长期家族实践中被不断增补、整理和解释。",
  },
  {
    id: "qian-wenxuan",
    period: "20世纪20年代",
    title: "钱文选采辑成现行版本",
    description:
      "中国非遗网指出，到了20世纪20年代，由钱文选采辑钱氏各支家训特色，形成了今天较常见的《钱氏家训》版本。",
  },
  {
    id: "intangible-heritage",
    period: "2021 年",
    title: "纳入国家级非遗扩展项目",
    description:
      "2021 年，规约习俗（钱氏家训家教）列入第五批国家级非物质文化遗产代表性项目名录扩展项目，地方抓手明确落在上海。",
  },
];

export const shanghaiDetails: JiaxunShanghaiDetail[] = [
  {
    id: "distribution",
    title: "明确分布",
    description:
      "中国非遗网记载，在上海主要分布在金山、嘉定、闸北和闵行等地，涉及人口约 12 万，这让“上海传承”不只是抽象归属，而是有实际分布。",
  },
  {
    id: "reading-sites",
    title: "传承空间外扩",
    description:
      "项目传承地点依赖祠堂但不局限于祠堂，新时代的诵读地点包括宗祠、钱学森图书馆等，这说明它已经进入公共文化空间。",
  },
  {
    id: "modern-practice",
    title: "当代实践创新",
    description:
      "官方介绍提到，以私人募款设立基金代替义庄、推动家训研究出版、鼓励家庭言传身教和建立家庭微信群等，都是当代传承的具体形式。",
  },
];

export const sourceLinks: JiaxunSourceLink[] = [
  {
    label: "中国非物质文化遗产网：规约习俗（钱氏家训家教）",
    href: "https://www.ihchina.cn/project_details/23897.html",
    note: "用于项目定义、公布时间、所属地区、保护单位与基本内容。",
  },
  {
    label: "人民网教育：让古老家训家风成为新时代育人资源",
    href: "https://edu.people.com.cn/n1/2022/0816/c1006-32503345.html",
    note: "用于“四篇结构”作为通行导读方式的公开表达。",
  },
  {
    label: "秦风网：钱文选与《钱氏家乘》",
    href: "https://www.qinfeng.gov.cn/info/1064/231079.htm",
    note: "用于钱文选、家训形成过程以及“兴学育才则国盛”等公开表述。",
  },
  {
    label: "杭州市文化广电旅游局：吴越千年概述",
    href: "https://wgly.hangzhou.gov.cn/art/2024/5/14/art_1229788034_58955601.html",
    note: "用于钱镠、吴越、保境安民与纳土归宋相关事实。",
  },
  {
    label: "临安区人民政府：文化历史",
    href: "https://www.linan.gov.cn/art/2025/8/4/art_1366302_59118787.html",
    note: "用于钱镠生卒与钱王陵相关事实补充。",
  },
  {
    label: "上海交通大学：钱学森回国70周年系列活动正式启动",
    href: "https://news.sjtu.edu.cn/jdyw/20250427/209754.html",
    note: "用于钱学森作为中国航天事业奠基人的公开表述。",
  },
  {
    label: "中国科学院：钱三强——我国原子能科学事业的创始人",
    href: "https://www.cas.ac.cn/xzfc/202206/t20220630_4840013.shtml",
    note: "用于钱三强案例事实。",
  },
  {
    label: "中国科学院：钱伟长逝世 一生重大选择都为祖国繁荣富强",
    href: "https://www.cas.cn/zt/rwzt/zmkxjqwcss/zydn/201008/t20100802_2916329.html",
    note: "用于钱伟长作为力学、应用数学奠基人之一与教育家相关表述。",
  },
  {
    label: "上海大学：传扬爱国志，砥砺报国行",
    href: "https://www.shu.edu.cn/info/1056/355985.htm",
    note: "用于钱伟长故居中的钱氏家训家风与“国家的需要就是我的专业”相关表述。",
  },
];
