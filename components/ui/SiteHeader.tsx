import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { mainNavItems } from "@/lib/portal-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-paper/[0.82] backdrop-blur-md">
      <Container className="py-3 sm:py-4">
        <div className="flex flex-col gap-4 rounded-[1.5rem] border border-line/60 bg-white/[0.34] px-5 py-3 shadow-[0_8px_18px_rgba(82,65,50,0.035)] md:flex-row md:items-center md:justify-between md:px-6">
          <Link href="/" className="flex items-center gap-4 text-ink">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-accent/15 bg-[linear-gradient(180deg,rgba(232,221,209,0.92),rgba(251,248,242,0.7))] font-serif-cn text-lg font-semibold text-accent">
              钱
            </span>
            <span className="flex flex-col">
              <span className="font-serif-cn text-lg leading-none">钱氏宗亲门户</span>
              <span className="mt-1 text-sm text-muted">
                公开浏览，登录办事
              </span>
            </span>
          </Link>

          <div className="flex flex-col gap-3 md:items-end">
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative py-1 transition hover:text-accent focus-visible:text-accent after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent/45 after:transition-[width] after:duration-150 hover:after:w-full focus-visible:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs leading-6 text-muted md:text-right">
              首页优先给出寻根、续谱、活动和礼品入口，文化内容统一收于“文化传承”频道。
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
}
