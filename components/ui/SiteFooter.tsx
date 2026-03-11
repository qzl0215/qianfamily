import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { siteMeta } from "@/lib/site-meta";

const genealogyLinks = [
  { href: "/genealogy/find-roots/", label: "寻根" },
  { href: "/genealogy/continue/", label: "续谱" },
  { href: "/genealogy/status/", label: "查看进度" },
];

const heritageLinks = [
  { href: "/heritage/jiafeng-jiaxun/", label: "钱氏家训" },
  { href: "/heritage/wuyue/", label: "钱王与吴越" },
  { href: "/heritage/stories/", label: "族人故事" },
];

const connectionLinks = [
  { href: "/events/upcoming/", label: "祭祖活动" },
  { href: "/gifts/catalog/", label: "礼品总览" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-10 pt-10 sm:pt-14">
      <Container>
        <div className="rounded-[1.9rem] border border-line/70 bg-white/35 p-5 shadow-[0_12px_24px_rgba(82,65,50,0.04)] sm:p-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <p className="ornament-line">钱氏宗亲门户</p>
              <p className="font-serif-cn text-[1.35rem] leading-tight text-ink sm:text-[1.55rem]">
                记得来处，认得今人。
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link
                  href="/genealogy/find-roots/"
                  className="inline-flex items-center rounded-full border border-line/75 bg-white/[0.44] px-4 py-2 text-accent"
                >
                  去寻根
                </Link>
                <Link
                  href="/heritage/jiafeng-jiaxun/"
                  className="inline-flex items-center rounded-full border border-line/75 bg-white/[0.44] px-4 py-2 text-accent"
                >
                  读家训
                </Link>
                <Link
                  href="/events/upcoming/"
                  className="inline-flex items-center rounded-full border border-line/75 bg-white/[0.44] px-4 py-2 text-accent"
                >
                  看祭祖活动
                </Link>
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
                  当下可见
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
            © {year} {siteMeta.name}
          </div>
        </div>
      </Container>
    </footer>
  );
}
