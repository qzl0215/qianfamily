import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";

import {
  figuresHeroFacts,
  figuresPageMeta,
  figuresPersonBlocks,
  figuresSourceLinks,
  figuresValueBlocks,
} from "./content";

export function FiguresTopicPage() {
  return (
    <>
      <section className="page-section pb-10 pt-10 sm:pt-14 lg:pt-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:items-stretch">
            <div className="surface-card bg-[linear-gradient(145deg,rgba(251,248,242,0.96),rgba(232,221,209,0.68))]">
              <div className="max-w-4xl space-y-7">
                <span className="hero-kicker">正式专题页</span>
                <div className="space-y-5">
                  <p className="ornament-line">人物专题</p>
                  <h1 className="font-serif-cn text-[3rem] leading-[1.06] text-ink sm:text-[4rem] lg:text-[4.9rem]">
                    {figuresPageMeta.title}
                  </h1>
                </div>
                <p className="hero-deck">
                  如果你想快速认识近代钱氏人物，这一页先给你三位最关键的代表人物。
                </p>
                <p className="hero-summary">
                  从钱学森、钱三强到钱伟长，你可以直接看到“学以报国”如何落到科学、教育和国家建设的真实行动里。
                </p>
                <div className="flex flex-wrap gap-2.5 text-sm text-accent">
                  <span className="rounded-full border border-accent/10 bg-white/50 px-4 py-2">
                    人物
                  </span>
                  <span className="rounded-full border border-accent/10 bg-white/50 px-4 py-2">
                    现代中国
                  </span>
                  <span className="rounded-full border border-accent/10 bg-white/50 px-4 py-2">
                    学以报国
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 pt-1">
                  <ButtonLink href="#people">先看代表人物</ButtonLink>
                  <ButtonLink href="#values" variant="secondary">
                    看共同精神
                  </ButtonLink>
                </div>
              </div>
            </div>

            <aside className="surface-card hero-side-panel">
              <div className="space-y-5">
                <p className="ornament-line">专题速览</p>
                <div className="space-y-4">
                  {figuresHeroFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-[1.5rem] border border-line/75 bg-white/[0.38] p-5"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                        {fact.label}
                      </p>
                      <p className="mt-3 font-serif-cn text-[1.28rem] leading-8 text-ink">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[1.55rem] border border-line/75 bg-white/[0.34] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                    阅读提示
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    先看人物头像与简介建立直观印象，再读三条共同精神线索，会更容易理解家训在现代的延续。
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="page-section pt-8" id="people">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="space-y-4">
              <p className="ornament-line">代表人物</p>
              <h2 className="section-title">从三位人物进入近代钱氏</h2>
              <p className="section-copy">
                这些人物的重要性，不只在于成就卓著，更在于他们共同把个人所学转入国家建设、科学发展与教育事业。
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {figuresPersonBlocks.map((person) => (
                <article key={person.id} className="surface-card">
                  <div className="flex items-center gap-4">
                    <img
                      src={person.avatarSrc}
                      alt={person.avatarAlt}
                      loading="lazy"
                      className="h-20 w-20 shrink-0 rounded-full border border-line/70 object-cover"
                    />
                    <div>
                      <p className="eyebrow">{person.field}</p>
                      <h3 className="mt-2 font-serif-cn text-[1.7rem] leading-tight text-ink">
                        {person.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                    {person.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5 text-sm text-accent">
                    {person.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/10 bg-white/50 px-4 py-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-6 text-muted">
                    头像来源：
                    <a
                      href={person.avatarSourceHref}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-1 text-accent underline-offset-4 hover:underline"
                    >
                      {person.avatarSourceLabel}
                    </a>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section" id="values">
        <Container>
          <div className="soft-panel">
            <div className="space-y-4">
              <p className="ornament-line">共同精神</p>
              <h2 className="section-title">人物背后，是更稳定的精神结构</h2>
              <p className="section-copy">
                近代钱氏人物之所以能被放在同一条线上看，并不是因为同姓，而是因为他们身上确实能看到共同的价值取向。
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {figuresValueBlocks.map((block) => (
                <article key={block.id} className="subtle-card">
                  <p className="eyebrow">价值归结</p>
                  <h3 className="mt-4 font-serif-cn text-[1.55rem] leading-tight text-ink">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                    {block.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section pt-8">
        <Container>
          <div className="surface-card">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="space-y-5">
                <p className="ornament-line">参考来源</p>
                <h2 className="section-title">本页所依据的公开资料</h2>
                <div className="space-y-4">
                  {figuresSourceLinks.map((source) => (
                    <div
                      key={source.href}
                      className="rounded-[1.45rem] border border-line/70 bg-white/[0.36] p-4"
                    >
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-accent underline-offset-4 hover:underline"
                      >
                        {source.label}
                      </a>
                      <p className="mt-2 text-sm leading-7 text-muted">{source.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-line/70 bg-white/[0.35] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  下一步
                </p>
                <p className="mt-4 font-serif-cn text-[1.35rem] leading-8 text-ink">
                  人物读完之后，回到家训与历史两条主线。
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  人物提供的是现代回响；若想进一步理解其根源，仍应回到钱氏家训与吴越历史继续细读。
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <ButtonLink href="/">返回首页</ButtonLink>
                  <ButtonLink href="/heritage/jiafeng-jiaxun/" variant="secondary">
                    进入钱氏家训
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
