import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import {
  accessRoles,
  announcementCards,
  cultureHighlightCards,
  homeDecisionCards,
  firstVisitJourneyCards,
  genealogyCenterCards,
  giftHighlightCards,
  genealogyFacts,
  homeNarrativeCards,
  homePrimaryActions,
  portalLogicSteps,
  upcomingEventCards,
} from "@/lib/portal-content";

export function PortalHomePage() {
  const latestUpdates = announcementCards.slice(0, 3);
  const weeklyFocus = {
    title: "本周推荐先做一步",
    summary: "如果你是第一次来站，先读 10 分钟文化传承，再进入寻根提交线索。",
    reason: "为何本周优先：首次访客占比更高时，先建立认同再办事可明显降低路径中断。",
    checklist: [
      "先读 1 篇家训或人物内容，确认家族主线。",
      "记录 3 条可核对线索：祖籍、辈分、迁徙。",
      "返回家谱中心提交线索并跟进进度。",
    ],
    href: "/heritage/",
    actionLabel: "先走这一步",
    nextHref: "/genealogy/find-roots/",
    nextActionLabel: "完成后去寻根",
  };

  return (
    <>
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
                      <p className="editorial-number">
                        {String(index + 1).padStart(2, "0")}
                      </p>
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
                <div className="rounded-[1.55rem] border border-line/75 bg-white/[0.34] p-5">
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

                <div className="rounded-[1.55rem] border border-accent/20 bg-white/[0.4] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                    {weeklyFocus.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-ink">{weeklyFocus.summary}</p>
                  <p className="mt-2 text-xs leading-6 text-muted">{weeklyFocus.reason}</p>
                  <div className="mt-4 space-y-2 rounded-[1rem] border border-line/70 bg-white/[0.45] p-3">
                    {weeklyFocus.checklist.map((item) => (
                      <p key={item} className="text-xs leading-6 text-ink/85">
                        · {item}
                      </p>
                    ))}
                  </div>
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
                </div>

                <p className="ornament-line">四个主动作</p>
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

      <section className="page-section pt-4" id="quick-decision">
        <Container>
          <div className="soft-panel">
            <div className="space-y-4">
              <p className="ornament-line">我现在该做什么</p>
              <h2 className="section-title">按当前状态进入，不必从头浏览全部频道</h2>
              <p className="section-copy">
                首次来访者最容易迷失在信息里。把路径改成“按状态分流”，可显著缩短决策时间并提高行动转化。
              </p>
              <p className="text-sm leading-7 text-accent">
                默认起步建议：若你还不确定从哪里开始，请先选择“我是第一次来站”。
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

      <section className="page-section pt-4" id="family-narrative">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="ornament-line">家族主叙事</p>
                <h2 className="section-title">文化内容后移，但不能消失</h2>
                <p className="section-copy">
                  家谱是连接，活动是组织，礼品是参与，但真正让这个站有身份感的仍然是家训、吴越与人物三条文化主线。它们构成门户的信任基础。
                </p>
                <div className="lead-quote">
                  <p className="font-serif-cn text-[1.38rem] leading-9 text-ink">
                    钱氏网站不是“先做工具，文化以后再说”，而是“先有精神认同，再进入办事与连接”。
                  </p>
                </div>
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
                <h2 className="section-title">把寻根、续谱、接谱收回一个入口中心</h2>
                <p className="section-copy">
                  顶层只保留一个“家谱中心”，不让“寻根、续谱、接谱”三个动作在导航层面彼此抢位。公开先讲用途与流程，登录后再真正办事。
                </p>
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
              <h2 className="section-title">从公开活动页进入现实中的宗亲连接</h2>
              <p className="section-copy">
                活动频道不只是发布一条新闻，而是承载时间、地点、流程、报名、签到和回顾的完整入口。公开页先把活动讲清楚，登录后完成报名与消息接收。
              </p>
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
              <h2 className="section-title">把家风家训、吴越历史、人物与故事收回一个频道</h2>
              <p className="section-copy">
                文化传承是一个总频道，而不是多个平行顶层入口。首页只展示精选内容，正式阅读统一进入频道内部完成。
              </p>
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
              <h2 className="section-title">礼品频道按文化意义与使用场景组织，而不是先堆商品</h2>
              <p className="section-copy">
                这里承接门户中的“参与行动”层。礼品既是纪念物，也是文化传播工具，所以页面要先讲用途和场景，再讲下单与订单。
              </p>
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

              <aside className="rounded-[1.8rem] border border-line/70 bg-white/[0.35] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  角色与权限
                </p>
                <div className="mt-5 space-y-4">
                  {accessRoles.map((role) => (
                    <div
                      key={role.role}
                      className="rounded-[1.4rem] border border-line/70 bg-white/[0.45] p-4"
                    >
                      <p className="font-serif-cn text-[1.22rem] leading-8 text-ink">
                        {role.role}
                      </p>
                      <p className="mt-1 text-sm leading-7 text-accent">{role.scope}</p>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {role.description}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
