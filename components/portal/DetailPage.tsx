import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import type { DetailPageContent } from "@/lib/portal-content";

import { FaqSection } from "./FaqSection";
import { PageHero } from "./PageHero";

type DetailPageProps = {
  content: DetailPageContent;
};

export function DetailPage({ content }: DetailPageProps) {
  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        lead={content.lead}
        summary={content.summary}
        chips={content.chips}
        facts={content.facts}
        primaryAction={{
          href: content.primaryAction.href,
          label: content.primaryAction.label,
        }}
        secondaryAction={
          content.secondaryAction
            ? {
                href: content.secondaryAction.href,
                label: content.secondaryAction.label,
              }
            : undefined
        }
        asideTitle="页面角色"
        asideBody={content.note}
      />

      <section className="page-section pt-4">
        <Container>
          <div className="soft-panel">
            <div className="space-y-4">
              <p className="ornament-line">页面重点</p>
              <h2 className="section-title">一页同时承担说明、连接与回流</h2>
              <p className="section-copy">
                无论是活动详情还是礼品详情，都不该只是单次展示页，而应承担公开说明、行动入口与后续内容沉淀三种职责。
              </p>
            </div>

            <div className="editorial-band mt-10 grid gap-0 sm:grid-cols-3">
              {content.highlights.map((item, index) => (
                <article key={item.title} className="editorial-band-item">
                  <p className="editorial-number">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif-cn text-[1.42rem] leading-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section pt-4">
        <Container>
          <div className="surface-card">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="space-y-5">
                <p className="ornament-line">页面应承载的信息</p>
                <h2 className="section-title">让详情页不是“一张图 + 一句话”</h2>
                <div className="stack-list">
                  {content.checklist.map((item) => (
                    <div key={item} className="stack-list-item">
                      <p className="font-serif-cn text-[1.18rem] leading-8 text-ink">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="rounded-[1.8rem] border border-line/70 bg-white/[0.35] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  下一步
                </p>
                <p className="mt-4 font-serif-cn text-[1.35rem] leading-8 text-ink">
                  公开先说清楚，动作后续再接入登录。
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">{content.note}</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <ButtonLink href={content.primaryAction.href}>
                    {content.primaryAction.label}
                  </ButtonLink>
                  {content.secondaryAction ? (
                    <ButtonLink
                      href={content.secondaryAction.href}
                      variant="secondary"
                    >
                      {content.secondaryAction.label}
                    </ButtonLink>
                  ) : null}
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection
        eyebrow="常见问题"
        title="把开放浏览和登录后动作区分清楚"
        description="活动详情与礼品详情都应先公开说明，再把报名、签到、下单、订单等动作收束到登录后的流程里。"
        items={content.faq}
      />
    </>
  );
}
