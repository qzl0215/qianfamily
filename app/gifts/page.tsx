import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import {
  giftHighlightCards,
  giftOccasionCards,
  giftsOverviewFacts,
} from "@/lib/portal-content";

export default function GiftsPage() {
  return (
    <>
      <PageHero
        eyebrow="宣传礼品"
        title="把礼品作为文化传播与参与行动的一部分"
        lead="礼品频道不是配角，也不是纯电商页，而是宗亲门户中的文化商品频道。"
        summary="这里先讲礼品的文化意义、使用场景和适配对象，再进入礼品总览、场景说明、订单能力和具体商品详情。它承接的是整站逻辑中的“参与行动”层。"
        chips={["文化商品", "场景优先", "后续接入订单"]}
        facts={giftsOverviewFacts}
        primaryAction={{ href: "/gifts/catalog/", label: "查看礼品总览" }}
        secondaryAction={{ href: "/gifts/occasions/", label: "查看使用场景" }}
        asideBody="礼品频道的核心判断是：先卖文化意义，再卖商品本身，不让频道滑向模板化电商首页。"
      />

      <CardSection
        eyebrow="礼品精选"
        title="先用典型礼品把频道气质立住"
        description="礼品总览会继续扩充，但第一阶段应先用少量代表性内容立住文化商品的方向，而不是大量上架稀释主叙事。"
        cards={giftHighlightCards}
        columns="3"
        muted
      />

      <CardSection
        eyebrow="场景说明"
        title="礼品按祭祖、陈设、赠礼与传播场景组织"
        description="场景页让用户理解礼品为什么存在、适合在哪里使用，也让礼品频道与活动、文化和家庭空间发生连接。"
        cards={giftOccasionCards}
        columns="3"
      />

      <section className="page-section pt-4">
        <Container>
          <div className="surface-card">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="ornament-line">场景分流</p>
                <h2 className="section-title">先确定使用场景，再选择礼品与规格</h2>
                <p className="section-copy">
                  礼品决策最常见的障碍是“看了很多商品仍不确定是否合适”。按场景先分流，再进入具体礼品，可减少试错并保持频道庄重气质。
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
                  <p className="eyebrow">四类场景</p>
                  <h3 className="mt-4 font-serif-cn text-[1.5rem] leading-tight text-ink">
                    祭祖、陈设、赠礼、传播
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    不同场景对应不同礼品强度与文化表达方式，先分场景再选品更准确。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">闭环关系</p>
                  <h3 className="mt-4 font-serif-cn text-[1.5rem] leading-tight text-ink">
                    礼品应服务活动与家族内容回流
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    礼品使用后的照片、故事与反馈可回流到活动回顾和宗亲动态，形成持续内容。
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
