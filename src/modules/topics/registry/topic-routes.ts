export type TopicSlug = "jiaxun" | "wuyue" | "figures";

export type TopicRoute = {
  slug: TopicSlug;
  title: string;
  summary: string;
  href: string;
};

export const topicRoutes: TopicRoute[] = [
  {
    slug: "jiaxun",
    title: "钱氏家训",
    summary: "先从家训读懂钱氏精神，把善事国家、重德修身、崇文尚学放回真实的文化脉络。",
    href: "/heritage/jiafeng-jiaxun/",
  },
  {
    slug: "wuyue",
    title: "钱王与吴越",
    summary: "从钱镠崛起、吴越立国到 978 年纳土归宋，理解这段历史为何长期被概括为保境安民、重视民生的治理传统。",
    href: "/heritage/wuyue/",
  },
  {
    slug: "figures",
    title: "近代钱氏人物",
    summary: "从钱学森、钱三强、钱伟长等代表人物，看钱氏精神如何进入现代中国的科学、教育与公共文化。",
    href: "/heritage/figures/",
  },
];

export function getTopicRoute(slug: string): TopicRoute | undefined {
  return topicRoutes.find((topic) => topic.slug === slug);
}
