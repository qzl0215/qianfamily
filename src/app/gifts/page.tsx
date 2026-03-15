import {
  giftHighlightCards,
  giftOccasionCards,
  giftsLandingFacts,
} from "@/modules/gifts";
import { CardSection, PageHero } from "@/modules/portal-shell";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";

export default function GiftsPage() {
  return (
    <>
      <PageHero
        eyebrow="宣传礼品"
        title="先确定使用场景，再选合适礼品"
        lead="如果你要准备祭祖、宗亲活动或家风赠礼，这一页先帮你快速判断该选哪一类礼品。"
        summary="你可以先按场景筛选，再进入礼品总览看具体款式与说明。已明确需求可直接看目录；需要活动配套可继续进入订单与定制说明。"
        chips={["30秒判断场景", "先选用途再选款式", "支持团体定制"]}
        facts={giftsLandingFacts}
        primaryAction={{ href: "/gifts/occasions/", label: "先看使用场景" }}
        secondaryAction={{ href: "/gifts/catalog/", label: "直接看礼品总览" }}
        asideTitle="你在这页会完成"
        asideBody="1）确认使用场景；2）锁定礼品方向；3）进入目录查看规格并提交需求。"
      />

      <CardSection
        eyebrow="先选礼品方向"
        title="三类高频礼品，先看哪一类最适合你"
        description="先从家训陈设、吴越纪念和阅读传播三类代表礼品入手，快速判断你当前更需要哪一种。"
        cards={giftHighlightCards}
        columns="3"
        muted
      />

      <CardSection
        eyebrow="再按场景细分"
        title="按你的实际使用场景进入"
        description="不确定选哪款时，先从活动、家堂陈设或赠礼传播场景进入，通常能更快找到可用方案。"
        cards={giftOccasionCards}
        columns="3"
      />

      <section className="page-section pt-4">
        <Container>
          <div className="surface-card">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="ornament-line">场景分流</p>
                <h2 className="section-title">不确定怎么选？先做这一步</h2>
                <p className="section-copy">
                  礼品选择最常见的问题是“看了很多款，还是不知道哪款适合自己”。先确定场景，再选礼品与规格，决策速度会更快。
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <ButtonLink href="/gifts/occasions/">先看使用场景</ButtonLink>
                  <ButtonLink href="/gifts/catalog/" variant="secondary">
                    已明确需求，查看礼品总览
                  </ButtonLink>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <article className="subtle-card">
                  <p className="eyebrow">第1步</p>
                  <h3 className="mt-4 font-serif-cn text-[1.5rem] leading-tight text-ink">
                    先确认场景：祭祖、陈设、赠礼、传播
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    不同场景对应不同礼品组合与表达方式，先分场景再选品更准确。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">第2步</p>
                  <h3 className="mt-4 font-serif-cn text-[1.5rem] leading-tight text-ink">
                    再确认规模：自用、家庭、活动批量
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    明确人数与使用周期后，再进入礼品总览看规格和详情，能减少反复比对成本。
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
