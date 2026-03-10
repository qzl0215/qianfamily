import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import { giftOccasionCards } from "@/lib/portal-content";

export default function GiftsOccasionsPage() {
  return (
    <>
      <PageHero
        eyebrow="宣传礼品"
        title="场景与用途"
        lead="先确定礼品用在什么场合。"
        summary="祭祖、家庭陈设、赠礼传播，对应的礼品选择并不一样。"
        chips={["活动场景", "家庭场景", "传播场景"]}
        facts={[
          { label: "选择顺序", value: "先场景，后礼品" },
          { label: "常见场景", value: "祭祖、陈设、赠礼、传播" },
          { label: "下一步", value: "确定场景后进入礼品总览" },
        ]}
        primaryAction={{ href: "/gifts/catalog/", label: "查看礼品总览" }}
        secondaryAction={{ href: "/gifts/", label: "返回礼品频道" }}
        asideBody="先选场景，再进入礼品总览。"
      />

      <CardSection
        eyebrow="典型场景"
        title="按使用场景进入"
        description="先分清祭祖、赠礼、陈设还是阅读传播，再看对应礼品。"
        cards={giftOccasionCards}
        columns="3"
        muted
      />
    </>
  );
}
