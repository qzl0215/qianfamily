import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";
import { TimelineItem } from "@/shared/ui/TimelineItem";

import {
  wuyueHeroFacts,
  wuyueJudgmentBlocks,
  wuyuePageMeta,
  wuyueSourceLinks,
  wuyueTimelineBlocks,
} from "./content";

export function WuyueTopicPage() {
  return (
    <>
      <section className="page-section pb-10 pt-10 sm:pt-14 lg:pt-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:items-stretch">
            <div className="surface-card bg-[linear-gradient(145deg,rgba(251,248,242,0.96),rgba(232,221,209,0.68))]">
              <div className="max-w-4xl space-y-7">
                <span className="hero-kicker">正式专题页</span>
                <div className="space-y-5">
                  <p className="ornament-line">历史脉络专题</p>
                  <h1 className="font-serif-cn text-[3rem] leading-[1.06] text-ink sm:text-[4rem] lg:text-[4.9rem]">
                    {wuyuePageMeta.title}
                  </h1>
                </div>
                <p className="hero-deck">
                  从钱镠崛起到纳土归宋，先把吴越这段历史看清，再理解它为何成为钱氏精神的重要底板。
                </p>
                <p className="hero-summary">
                  这一专题不追求百科式铺陈，而是抓住几个关键判断：吴越如何立国，何以重视治水与民生，又为何以纳土归宋成为后世反复讨论的历史转折。
                </p>
                <div className="flex flex-wrap gap-2.5 text-sm text-accent">
                  <span className="rounded-full border border-accent/10 bg-white/50 px-4 py-2">
                    吴越
                  </span>
                  <span className="rounded-full border border-accent/10 bg-white/50 px-4 py-2">
                    保境安民
                  </span>
                  <span className="rounded-full border border-accent/10 bg-white/50 px-4 py-2">
                    治水兴邦
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 pt-1">
                  <ButtonLink href="#timeline">先看关键节点</ButtonLink>
                  <ButtonLink href="#judgments" variant="secondary">
                    看三项历史判断
                  </ButtonLink>
                </div>
              </div>
            </div>

            <aside className="surface-card hero-side-panel">
              <div className="space-y-5">
                <p className="ornament-line">关键事实</p>
                <div className="space-y-4">
                  {wuyueHeroFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-[1.5rem] border border-line/75 bg-white/[0.38] p-5"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                        {fact.label}
                      </p>
                      <p className="mt-3 font-serif-cn text-[1.35rem] leading-8 text-ink">
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
                    这一页聚焦历史脉络与判断，不展开枝节轶事。先看时间线，再回到“保境安民、治水兴邦、纳土归宋”三项核心理解。
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="page-section pt-8" id="timeline">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="grid gap-8 lg:grid-cols-[minmax(260px,0.62fr)_minmax(0,1fr)]">
              <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
                <p className="ornament-line">关键节点</p>
                <h2 className="section-title">四个节点，把吴越放回历史现场</h2>
                <p className="section-copy">
                  从晚唐五代的动荡起点，到 978 年的历史转折，再到后世记忆，这四个节点足以把吴越的基本脉络立住。
                </p>
              </div>

              <div className="relative space-y-8 before:absolute before:left-[13px] before:top-3 before:h-[calc(100%-2.5rem)] before:w-px before:bg-line sm:before:left-3.5">
                {wuyueTimelineBlocks.map((block) => (
                  <TimelineItem
                    key={block.title}
                    period={block.period}
                    title={block.title}
                  >
                    <p>{block.description}</p>
                  </TimelineItem>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section" id="judgments">
        <Container>
          <div className="soft-panel">
            <div className="space-y-4">
              <p className="ornament-line">历史判断</p>
              <h2 className="section-title">今天为什么还反复谈吴越</h2>
              <p className="section-copy">
                这段历史之所以没有沦为朝代知识点，正因为它常被后人提炼为几项持续有效的公共判断。
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {wuyueJudgmentBlocks.map((block) => (
                <article key={block.id} className="subtle-card">
                  <p className="eyebrow">核心判断</p>
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
                  {wuyueSourceLinks.map((source) => (
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
                  历史看清之后，再回到钱氏家训。
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  吴越回答“这段历史发生了什么”，而家训会继续回答“这些判断最后沉淀成了怎样的家风与做人准则”。
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
