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
    href: "/topics/jiaxun/",
  },
  {
    slug: "wuyue",
    title: "钱王与吴越",
    summary: "从钱镠立国到纳土归宋，理解吴越为何被反复讲述为一条保境安民、重视民生的历史主线。",
    href: "/topics/wuyue/",
  },
  {
    slug: "figures",
    title: "近代钱氏人物",
    summary: "再回到近现代，看钱氏人物如何把家训中的担当、学问与气节落实到现代中国。",
    href: "/topics/figures/",
  },
];

export function getTopicRoute(slug: string): TopicRoute | undefined {
  return topicRoutes.find((topic) => topic.slug === slug);
}
