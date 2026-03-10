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
        title="按使用场景选择礼品"
        lead="先看祭祖、陈设、赠礼和传播场景，再选具体礼品。"
        summary="如果你已经知道用途，可直接看礼品总览；如果还在比较，先看场景说明。"
        chips={["参与行动", "场景优先", "礼品总览"]}
        facts={giftsOverviewFacts}
        primaryAction={{ href: "/gifts/catalog/", label: "查看礼品总览" }}
        secondaryAction={{ href: "/gifts/occasions/", label: "查看使用场景" }}
        asideBody="先确认礼品要用在哪里，再看规格和款式。"
      />

      <CardSection
        eyebrow="礼品精选"
        title="先看代表性礼品"
        description="从少量常用礼品里先判断风格和用途。"
        cards={giftHighlightCards}
        columns="3"
        muted
      />

      <CardSection
        eyebrow="场景说明"
        title="不同场景对应不同礼品"
        description="先分清祭祖、陈设、赠礼还是传播，再进入对应礼品。"
        cards={giftOccasionCards}
        columns="3"
      />
    </>
  );
}
