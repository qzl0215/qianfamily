import Link from "next/link";

import { accessRoles as genealogyAccessRoles } from "@/modules/genealogy";
import { Container } from "@/shared/ui/Container";

import { announcementCards } from "../content";

export function HomeAnnouncementsSection() {
  return (
    <section className="page-section pt-4" id="announcements">
      <Container>
        <div className="surface-card">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-5">
              <p className="ornament-line">宗亲动态 / 公告</p>
              <h2 className="section-title">让活动、寻根和礼品成果持续回流为站内内容</h2>
              <div className="space-y-4">
                {announcementCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[1.5rem] border border-line/70 bg-white/[0.36] p-5"
                  >
                    <p className="eyebrow">{card.eyebrow}</p>
                    <h3 className="mt-4 font-serif-cn text-[1.4rem] leading-tight text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-accent">{card.meta}</p>
                    <p className="mt-4 text-[0.98rem] leading-8 text-muted">{card.summary}</p>
                    <Link
                      href={card.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
                    >
                      {card.actionLabel}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-[1.8rem] border border-line/70 bg-white/[0.35] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                角色与权限
              </p>
              <div className="mt-5 space-y-4">
                {genealogyAccessRoles.map((role) => (
                  <div
                    key={role.role}
                    className="rounded-[1.4rem] border border-line/70 bg-white/[0.45] p-4"
                  >
                    <p className="font-serif-cn text-[1.22rem] leading-8 text-ink">
                      {role.role}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-accent">{role.scope}</p>
                    <p className="mt-2 text-sm leading-7 text-muted">{role.description}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
