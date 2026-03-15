import {
  giftOrderFacts,
  giftOrderFaq,
  giftOrderPreparationBlocks,
  giftOrderStatusSteps,
} from "@/modules/gifts";
import { FaqSection, PageHero } from "@/modules/portal-shell";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";

export default function GiftsOrdersPage() {
  return (
    <>
      <PageHero
        eyebrow="宣传礼品"
        title="订单与交付说明"
        lead="如果你已经选好礼品，这一页先告诉你提交前要准备什么、提交后会看到哪些状态。"
        summary="先确认礼品与数量，再填写收货和用途信息。提交后可按状态持续跟踪，个人购买和活动批量都能使用同一套说明。"
        chips={["下单前准备", "状态可追踪", "活动与个人都适用"]}
        facts={giftOrderFacts}
        primaryAction={{ href: "/gifts/catalog/", label: "先回总览确认礼品" }}
        secondaryAction={{ href: "/gifts/", label: "返回礼品频道" }}
        asideTitle="先做这三步"
        asideBody="1）确认礼品和数量；2）填写收货与用途；3）提交后按状态跟踪。"
      />

      <section className="page-section pt-4">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="space-y-4">
              <p className="ornament-line">下单前准备</p>
              <h2 className="section-title">提交前先确认四项信息</h2>
              <p className="section-copy">
                多数订单往返都发生在“信息不完整”。按下面四项先确认，再提交需求，通常能更快进入发货流程。
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {giftOrderPreparationBlocks.map((block) => (
                <article key={block.eyebrow} className="subtle-card">
                  <p className="eyebrow">{block.eyebrow}</p>
                  <h3 className="mt-4 font-serif-cn text-[1.45rem] leading-tight text-ink">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {block.description}
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
            <div className="space-y-4">
              <p className="ornament-line">提交后状态</p>
              <h2 className="section-title">按状态跟踪，不用反复询问进度</h2>
              <p className="section-copy">
                提交后会进入统一状态流转。你可以按状态判断当前该等什么、补什么。
              </p>
            </div>

            <div className="editorial-band mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {giftOrderStatusSteps.map((step, index) => (
                <article key={step.title} className="editorial-band-item">
                  <p className="editorial-number">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 font-serif-cn text-[1.38rem] leading-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-8 text-muted">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[1.6rem] border border-line/70 bg-white/[0.36] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                立即行动
              </p>
              <p className="mt-4 font-serif-cn text-[1.35rem] leading-8 text-ink">
                先确认礼品，再进入订单需求说明
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                这页核心目标是减少无效沟通。提交前先补齐四项信息，提交后按状态跟踪即可。
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <ButtonLink href="/gifts/catalog/">查看礼品总览</ButtonLink>
                <ButtonLink href="/gifts/occasions/" variant="secondary">
                  先按场景选礼品
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection
        eyebrow="常见问题"
        title="下单前先把关键问题问清楚"
        description="先看规则再提交，能显著减少订单往返与信息补充次数。"
        items={giftOrderFaq}
      />
    </>
  );
}
