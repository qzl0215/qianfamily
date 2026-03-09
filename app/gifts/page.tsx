import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
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
    </>
  );
}
