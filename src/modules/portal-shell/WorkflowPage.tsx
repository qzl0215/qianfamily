import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";

import { FaqSection } from "./FaqSection";
import { PageHero } from "./PageHero";
import type { WorkflowPageContent } from "./types";

type WorkflowPageProps = {
  content: WorkflowPageContent;
};

export function WorkflowPage({ content }: WorkflowPageProps) {
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
        asideTitle="当前状态"
        asideBody={content.note}
      />

      <section className="page-section pt-4">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="space-y-4">
              <p className="ornament-line">办理逻辑</p>
              <h2 className="section-title">先读流程，再进入后续能力</h2>
              <p className="section-copy">
                这类页面的目的不是立刻要求用户填写，而是先把步骤、所需信息和后续处理方式讲清楚。
              </p>
            </div>

            <div className="editorial-band mt-10 grid gap-0 sm:grid-cols-3">
              {content.steps.map((step, index) => (
                <article key={step.title} className="editorial-band-item">
                  <p className="editorial-number">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif-cn text-[1.42rem] leading-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                    {step.description}
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
                <p className="ornament-line">你需要准备什么</p>
                <h2 className="section-title">进入动作前，先把信息结构整理清楚</h2>
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
                  当前先完成结构说明，后续接入登录能力。
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
        title="先把规则说清，后面功能才不会变形"
        description="这些说明是为了让家谱中心、活动系统和礼品系统在真正接入登录后，仍然保持清晰的办事逻辑。"
        items={content.faq}
      />
    </>
  );
}
