import Link from "next/link";

import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";

import { homePrimaryActions, portalLogicSteps } from "../content";
import { getLatestUpdates, getWeeklyFocus } from "../recommendations";

export function HomeHeroSection() {
  const latestUpdates = getLatestUpdates();
  const weeklyFocus = getWeeklyFocus();

  return (
    <section className="page-section pb-10 pt-10 sm:pt-14 lg:pt-16" id="portal-home">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:items-stretch">
          <div className="surface-card surface-card-hero">
            <div className="max-w-4xl space-y-7">
              <span className="hero-kicker">钱氏宗亲门户首页</span>
              <div className="space-y-5">
                <p className="ornament-line">公开浏览，登录办事</p>
                <h1 className="font-serif-cn text-[3rem] leading-[1.04] text-ink sm:text-[4rem] lg:text-[5rem]">
                  先寻根续谱，再连接宗亲、文化与行动
                </h1>
              </div>
              <p className="hero-deck">
                这不是单纯的文化站，也不是只做工具的办事页，而是把认同、归属、连接与行动合成一条路径的宗亲门户。
              </p>
              <p className="hero-summary">
                网站总逻辑固定为“文化认同、谱系归属、宗亲连接、参与行动、内容回流”。首页优先给出可执行入口，并用文化主线提供信任基础。
              </p>

              <div className="editorial-band grid gap-0 sm:grid-cols-5">
                {portalLogicSteps.map((step, index) => (
                  <div key={step} className="editorial-band-item">
                    <p className="editorial-number">{String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-3 text-sm leading-7 text-ink">{step}</p>
                  </div>
                ))}
              </div>

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
              <details className="rounded-[1.55rem] border border-line/75 bg-white/[0.34] p-5 sm:hidden">
                <summary className="cursor-pointer list-none text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  展开首屏信息组
                </summary>
                <div className="mt-4 space-y-5">
                  <div className="rounded-[1rem] border border-line/65 bg-white/[0.42] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">
                      最新动态
                    </p>
                    <div className="mt-3 space-y-3">
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
                  <div className="rounded-[1rem] border border-accent/20 bg-white/[0.42] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">
                      {weeklyFocus.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-ink">{weeklyFocus.summary}</p>
                    <p className="mt-2 text-xs leading-6 text-muted">{weeklyFocus.reason}</p>
                    <p className="mt-2 text-xs leading-6 text-accent">{weeklyFocus.outcome}</p>
                    <Link
                      href={weeklyFocus.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
                    >
                      {weeklyFocus.actionLabel}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </details>

              <div className="hidden rounded-[1.55rem] border border-line/75 bg-white/[0.34] p-5 sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  最新动态
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

              <div className="hidden rounded-[1.55rem] border border-accent/20 bg-white/[0.4] p-5 sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  {weeklyFocus.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-ink">{weeklyFocus.summary}</p>
                <p className="mt-2 text-xs leading-6 text-muted">{weeklyFocus.reason}</p>
                <p className="mt-2 text-xs leading-6 text-accent">{weeklyFocus.outcome}</p>
                <Link
                  href={weeklyFocus.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  {weeklyFocus.actionLabel}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>

              <p className="ornament-line">四个主动作</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {homePrimaryActions.map((action) => (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="group rounded-[1.55rem] border border-line/75 bg-white/[0.42] p-5 shadow-[0_12px_22px_rgba(82,65,50,0.04)]"
                  >
                    {action.status ? <span className="status-chip">{action.status}</span> : null}
                    <h2 className="mt-4 font-serif-cn text-[1.65rem] leading-tight text-ink">
                      {action.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-muted">{action.summary}</p>
                    <p className="mt-4 text-xs leading-6 text-accent">{action.note}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 group-hover:underline">
                      进入入口
                      <span aria-hidden="true">↗</span>
                    </span>
                  </Link>
                ))}
              </div>

              <div className="rounded-[1.55rem] border border-line/75 bg-white/[0.34] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  门户判断
                </p>
                <p className="mt-3 font-serif-cn text-[1.28rem] leading-8 text-ink">
                  先把族人的办事入口立住，再让文化内容成为稳定的信任底板。
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  你可以把首页理解为一个公开可浏览、登录后可办理宗亲事务的门户，而不是一个只会讲故事或只会堆功能的页面。
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
