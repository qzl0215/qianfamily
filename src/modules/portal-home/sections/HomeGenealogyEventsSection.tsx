import Link from "next/link";

import {
  genealogyCenterCards as genealogyCards,
  genealogyFacts as genealogyOverviewFacts,
} from "@/modules/genealogy";
import { upcomingEventCards as eventsUpcomingCards } from "@/modules/events";
import { Container } from "@/shared/ui/Container";

export function HomeGenealogyEventsSection() {
  return (
    <>
      <section className="page-section pt-4" id="genealogy-center">
        <Container>
          <div className="soft-panel">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
              <div className="space-y-5">
                <p className="ornament-line">家谱中心</p>
                <h2 className="section-title">把寻根、续谱、接谱收回一个入口中心</h2>
                <p className="section-copy">
                  顶层只保留一个“家谱中心”，不让“寻根、续谱、接谱”三个动作在导航层面彼此抢位。公开先讲用途与流程，登录后再真正办事。
                </p>
                <div className="space-y-4">
                  {genealogyOverviewFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-[1.45rem] border border-line/70 bg-white/[0.34] p-4"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                        {fact.label}
                      </p>
                      <p className="mt-2 font-serif-cn text-[1.22rem] leading-8 text-ink">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {genealogyCards.map((card) => (
                  <article key={card.title} className="subtle-card">
                    <p className="eyebrow">{card.eyebrow}</p>
                    <h3 className="mt-4 font-serif-cn text-[1.5rem] leading-tight text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-accent">{card.meta}</p>
                    <p className="mt-4 text-[0.98rem] leading-8 text-muted">{card.summary}</p>
                    <Link
                      href={card.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
                    >
                      {card.actionLabel}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section pt-4" id="events-preview">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="space-y-4">
              <p className="ornament-line">祭祖活动</p>
              <h2 className="section-title">从公开活动页进入现实中的宗亲连接</h2>
              <p className="section-copy">
                活动频道不只是发布一条新闻，而是承载时间、地点、流程、报名、签到和回顾的完整入口。公开页先把活动讲清楚，登录后完成报名与消息接收。
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {eventsUpcomingCards.map((card) => (
                <article key={card.title} className="surface-card">
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3 className="mt-4 font-serif-cn text-[1.55rem] leading-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-accent">{card.meta}</p>
                  <p className="mt-4 text-[0.98rem] leading-8 text-muted">{card.summary}</p>
                  {card.tags ? (
                    <div className="mt-5 flex flex-wrap gap-2 text-sm text-accent">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-accent/10 bg-white/50 px-3 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <Link
                    href={card.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
                  >
                    {card.actionLabel}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
