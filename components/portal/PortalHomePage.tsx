import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import {
  announcementCards,
  cultureHighlightCards,
  homeDecisionCards,
  genealogyCenterCards,
  giftHighlightCards,
  genealogyFacts,
  homeNarrativeCards,
  homePrimaryActions,
  upcomingEventCards,
} from "@/lib/portal-content";

export function PortalHomePage() {
  const latestUpdates = announcementCards.slice(0, 3);
  const weeklyFocus = {
    title: "家训一句",
    summary: "善事国家，重德修身，崇文尚学。",
    source: "钱氏家训",
    href: "/heritage/jiafeng-jiaxun/",
    actionLabel: "去读家训",
    nextHref: "/heritage/",
    nextActionLabel: "看文化传承",
    skipHref: "/genealogy/find-roots/",
    skipActionLabel: "已有线索，直接去寻根",
  };

  return (
    <>
      <section className="page-section pb-10 pt-10 sm:pt-14 lg:pt-16" id="portal-home">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:items-stretch">
            <div className="surface-card surface-card-hero">
              <div className="max-w-4xl space-y-7">
                <span className="hero-kicker">钱氏宗亲</span>
                <h1 className="font-serif-cn text-[3rem] leading-[1.04] text-ink sm:text-[4rem] lg:text-[5rem]">
                  记得来处，认得今人
                </h1>
                <p className="hero-deck font-serif-cn text-[1.15rem] leading-8 text-muted sm:text-[1.28rem]">
                  善事国家，重德修身，崇文尚学
                </p>

                <div className="flex flex-wrap gap-4 pt-1">
                  <ButtonLink href="/genealogy/find-roots/">先去寻根</ButtonLink>
                  <ButtonLink href="/genealogy/" variant="secondary">
                    进入家谱中心
                  </ButtonLink>
                  <ButtonLink href="/events/" variant="secondary">
                    查看祭祖活动
                  </ButtonLink>
                </div>
              </div>
            </div>

            <aside className="surface-card hero-side-panel">
              <div className="space-y-5">
                <div className="rounded-[1.55rem] border border-line/75 bg-white/[0.34] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                    此刻可见
                  </p>
                  <div className="mt-4 space-y-3">
                    {latestUpdates.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block rounded-[1rem] border border-line/65 bg-white/[0.42] px-4 py-3 text-sm leading-7 text-muted transition hover:border-accent/20 hover:text-ink"
                      >
                        <span className="block text-xs tracking-[0.15em] text-accent">
                          {item.eyebrow}
                        </span>
                        <span className="mt-1 block font-medium text-ink">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.55rem] border border-accent/20 bg-white/[0.4] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                    {weeklyFocus.title}
                  </p>
                  <p className="mt-3 font-serif-cn text-[1.72rem] leading-tight text-ink">
                    {weeklyFocus.summary}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted">{weeklyFocus.source}</p>
                  <Link
                    href={weeklyFocus.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
                  >
                    {weeklyFocus.actionLabel}
                    <span aria-hidden="true">↗</span>
                  </Link>
                  <Link
                    href={weeklyFocus.nextHref}
                    className="ml-4 mt-4 inline-flex items-center gap-2 text-xs font-medium text-muted underline-offset-4 hover:text-ink hover:underline"
                  >
                    {weeklyFocus.nextActionLabel}
                    <span aria-hidden="true">↗</span>
                  </Link>
                  <p className="mt-3 text-xs leading-6 text-muted">
                    已有家谱线索，可直接去寻根。
                  </p>
                  <Link
                    href={weeklyFocus.skipHref}
                    className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-muted underline-offset-4 hover:text-ink hover:underline"
                  >
                    {weeklyFocus.skipActionLabel}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>

                <p className="ornament-line">四个入口</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {homePrimaryActions.map((action) => (
                    <Link
                      key={action.title}
                      href={action.href}
                      className="group rounded-[1.55rem] border border-line/75 bg-white/[0.42] p-5 shadow-[0_12px_22px_rgba(82,65,50,0.04)]"
                    >
                      {action.status ? (
                        <span className="status-chip">{action.status}</span>
                      ) : null}
                      <h2 className="mt-4 font-serif-cn text-[1.65rem] leading-tight text-ink">
                        {action.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        {action.summary}
                      </p>
                      <p className="mt-4 text-xs leading-6 text-accent">
                        {action.note}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 group-hover:underline">
                        {action.actionLabel ?? "进入入口"}
                        <span aria-hidden="true">↗</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="page-section pt-4" id="quick-decision">
        <Container>
          <div className="soft-panel">
            <div className="space-y-4">
              <p className="ornament-line">我现在该做什么</p>
              <h2 className="section-title">按当前状态选择入口</h2>
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

      <section className="page-section pt-4" id="family-narrative">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="ornament-line">家族主叙事</p>
                <h2 className="section-title">家训、吴越与人物</h2>
                <ButtonLink href="/heritage/" variant="secondary">
                  进入文化传承
                </ButtonLink>
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                {homeNarrativeCards.map((card) => (
                  <article key={card.title} className="subtle-card">
                    <p className="eyebrow">{card.eyebrow}</p>
                    <h3 className="mt-4 font-serif-cn text-[1.48rem] leading-tight text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-accent">{card.meta}</p>
                    <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                      {card.summary}
                    </p>
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

      <section className="page-section pt-4" id="genealogy-center">
        <Container>
          <div className="soft-panel">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
              <div className="space-y-5">
                <p className="ornament-line">家谱中心</p>
                <h2 className="section-title">寻根、续谱、接谱</h2>
                <div className="space-y-4">
                  {genealogyFacts.map((fact) => (
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
                {genealogyCenterCards.map((card) => (
                  <article key={card.title} className="subtle-card">
                    <p className="eyebrow">{card.eyebrow}</p>
                    <h3 className="mt-4 font-serif-cn text-[1.5rem] leading-tight text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-accent">{card.meta}</p>
                    <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                      {card.summary}
                    </p>
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
              <h2 className="section-title">近期祭祖与宗亲活动</h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {upcomingEventCards.map((card) => (
                <article key={card.title} className="surface-card">
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3 className="mt-4 font-serif-cn text-[1.55rem] leading-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-accent">{card.meta}</p>
                  <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                    {card.summary}
                  </p>
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

      <section className="page-section pt-4" id="culture-preview">
        <Container>
          <div className="soft-panel">
            <div className="space-y-4">
              <p className="ornament-line">文化传承</p>
              <h2 className="section-title">家训、吴越与族人故事</h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {cultureHighlightCards.map((card) => (
                <article key={card.title} className="subtle-card">
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3 className="mt-4 font-serif-cn text-[1.4rem] leading-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-accent">{card.meta}</p>
                  <p className="mt-4 text-[0.96rem] leading-8 text-muted">
                    {card.summary}
                  </p>
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

      <section className="page-section pt-4" id="gifts-preview">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="space-y-4">
              <p className="ornament-line">宣传礼品</p>
              <h2 className="section-title">祭祖、陈设与赠礼</h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {giftHighlightCards.map((card) => (
                <article key={card.title} className="subtle-card">
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3 className="mt-4 font-serif-cn text-[1.5rem] leading-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-accent">{card.meta}</p>
                  <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                    {card.summary}
                  </p>
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

      <section className="page-section pt-4" id="announcements">
        <Container>
          <div className="surface-card">
            <div className="space-y-5">
              <p className="ornament-line">最近可看</p>
              <h2 className="section-title">最近更新</h2>
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
                    <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                      {card.summary}
                    </p>
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
          </div>
        </Container>
      </section>
    </>
  );
}
