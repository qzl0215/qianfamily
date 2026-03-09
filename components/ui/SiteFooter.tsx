import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { mainNavItems } from "@/lib/portal-content";
import { siteMeta } from "@/lib/site-meta";

const genealogyLinks = [
  { href: "/genealogy/find-roots/", label: "寻根" },
  { href: "/genealogy/continue/", label: "家谱续谱" },
  { href: "/genealogy/takeover/", label: "我接家谱" },
  { href: "/genealogy/status/", label: "我的提交 / 进度" },
];

const heritageLinks = [
  { href: "/heritage/jiafeng-jiaxun/", label: "家风家训" },
  { href: "/heritage/wuyue/", label: "钱王与吴越" },
  { href: "/heritage/figures/", label: "近代人物" },
  { href: "/heritage/stories/", label: "族人故事" },
];

const connectionLinks = [
  { href: "/events/upcoming/", label: "近期活动" },
  { href: "/events/calendar/", label: "年度活动表" },
  { href: "/gifts/catalog/", label: "礼品总览" },
  { href: "/gifts/occasions/", label: "场景与用途" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-10 pt-10 sm:pt-14">
      <Container>
        <div className="rounded-[1.9rem] border border-line/70 bg-white/35 p-5 shadow-[0_12px_24px_rgba(82,65,50,0.04)] sm:p-6">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="space-y-4">
              <p className="ornament-line">钱氏宗亲门户</p>
              <p className="font-serif-cn text-[1.35rem] leading-tight text-ink sm:text-[1.55rem]">
                先文化认同，再谱系归属，再走向宗亲连接与参与行动。
              </p>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                这个站点把家训、历史、人物作为信任基础，把寻根、续谱、活动与礼品作为现实入口，最终让内容继续回流为公共记忆。
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
                {mainNavItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-accent">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-3 text-sm leading-7 text-muted">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  家谱中心
                </p>
                {genealogyLinks.map((item) => (
                  <div key={item.href}>
                    <Link href={item.href} className="text-accent">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm leading-7 text-muted">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  文化传承
                </p>
                {heritageLinks.map((item) => (
                  <div key={item.href}>
                    <Link href={item.href} className="text-accent">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm leading-7 text-muted">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  活动与礼品
                </p>
                {connectionLinks.map((item) => (
                  <div key={item.href}>
                    <Link href={item.href} className="text-accent">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-line/70 bg-white/[0.32] px-5 py-4 text-sm leading-7 text-muted">
            © {year} {siteMeta.name}。当前版本以静态展示方式先把宗亲门户的信息架构、入口逻辑与文化主线搭稳，后续再接入登录、提交、报名与订单能力。
          </div>
        </div>
      </Container>
    </footer>
  );
}
