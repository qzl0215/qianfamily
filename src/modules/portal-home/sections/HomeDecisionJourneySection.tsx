import Link from "next/link";

import { Container } from "@/shared/ui/Container";

import { firstVisitJourneyCards, homeDecisionCards } from "../content";

export function HomeDecisionJourneySection() {
  return (
    <>
      <section className="page-section pt-4" id="quick-decision">
        <Container>
          <div className="soft-panel">
            <div className="space-y-4">
              <p className="ornament-line">我现在该做什么</p>
              <h2 className="section-title">按当前状态进入，不必从头浏览全部频道</h2>
              <p className="section-copy">
                首次来访者最容易迷失在信息里。把路径改成“按状态分流”，可显著缩短决策时间并提高行动转化。
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {homeDecisionCards.map((card) => (
                <article key={card.title} className="subtle-card">
                  <span className="status-chip">{card.effortHint}</span>
                  <h3 className="mt-4 font-serif-cn text-[1.36rem] leading-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{card.summary}</p>
                  <p className="mt-3 text-xs leading-6 text-ink/80">{card.outcomeHint}</p>
                  <p className="mt-4 text-xs leading-6 text-accent">{card.nextStep}</p>
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

      <section className="page-section pt-4" id="first-visit-journey">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="space-y-4">
              <p className="ornament-line">首次来站建议路径</p>
              <h2 className="section-title">先认同，再归属，再连接与行动</h2>
              <p className="section-copy">
                第一次进入网站时，优先按三步完成理解与行动。先建立文化认同，再确认谱系归属，最后进入活动和礼品场景，把线上认同变成现实参与。
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {firstVisitJourneyCards.map((card) => (
                <article key={card.title} className="subtle-card">
                  {card.eyebrow ? <p className="eyebrow">{card.eyebrow}</p> : null}
                  <h3 className="mt-4 font-serif-cn text-[1.5rem] leading-tight text-ink">
                    {card.title}
                  </h3>
                  {card.meta ? (
                    <p className="mt-3 text-sm leading-7 text-accent">{card.meta}</p>
                  ) : null}
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
