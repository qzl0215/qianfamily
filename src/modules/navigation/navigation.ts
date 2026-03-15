export const mainNavItems = [
  { href: "/", label: "首页" },
  { href: "/genealogy/", label: "家谱中心" },
  { href: "/heritage/", label: "文化传承" },
  { href: "/events/", label: "祭祖活动" },
  { href: "/gifts/", label: "宣传礼品" },
] as const;

export const footerLinkGroups = [
  {
    title: "家谱中心",
    links: [
      { href: "/genealogy/find-roots/", label: "寻根" },
      { href: "/genealogy/continue/", label: "家谱续谱" },
      { href: "/genealogy/takeover/", label: "我接家谱" },
      { href: "/genealogy/status/", label: "我的提交 / 进度" },
    ],
  },
  {
    title: "文化传承",
    links: [
      { href: "/heritage/jiafeng-jiaxun/", label: "家风家训" },
      { href: "/heritage/wuyue/", label: "钱王与吴越" },
      { href: "/heritage/figures/", label: "近代人物" },
      { href: "/heritage/stories/", label: "族人故事" },
    ],
  },
  {
    title: "活动与礼品",
    links: [
      { href: "/events/upcoming/", label: "近期活动" },
      { href: "/events/calendar/", label: "年度活动表" },
      { href: "/gifts/catalog/", label: "礼品总览" },
      { href: "/gifts/occasions/", label: "场景与用途" },
    ],
  },
] as const;
