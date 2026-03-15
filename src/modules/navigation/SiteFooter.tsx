import Link from "next/link";

import { Container } from "@/shared/ui/Container";

import { footerLinkGroups, mainNavItems } from "./navigation";
import { siteMeta } from "./site-meta";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-10 pt-10 sm:pt-14">
      <Container>
        <div className="rounded-[1.9rem] border border-line/70 bg-white/35 p-5 shadow-[0_12px_24px_rgba(82,65,50,0.04)] sm:p-6">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="space-y-4">
              <p className="ornament-line">{siteMeta.name}</p>
              <p className="font-serif-cn text-[1.35rem] leading-tight text-ink sm:text-[1.55rem]">
                记得来处，认得今人。
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
              {footerLinkGroups.map((group) => (
                <div key={group.title} className="space-y-3 text-sm leading-7 text-muted">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                    {group.title}
                  </p>
                  {group.links.map((item) => (
                    <div key={item.href}>
                      <Link href={item.href} className="text-accent">
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
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
