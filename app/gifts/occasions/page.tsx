import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import { giftOccasionCards } from "@/lib/portal-content";

export default function GiftsOccasionsPage() {
  return (
    <>
      <PageHero
        eyebrow="宣传礼品"
        title="场景与用途"
        lead="只有把礼品放回真实场景，礼品频道才不会沦为堆货页面。"
        summary="这里按祭祖活动、家庭陈设、赠礼传播等场景组织礼品，让用户理解它们适合在哪些情境中出现，以及它们如何与家训、吴越和宗亲活动发生联系。"
        chips={["活动场景", "家庭场景", "传播场景"]}
        facts={[
          { label: "组织原则", value: "先场景，后商品" },
          { label: "目标", value: "帮助用户理解礼品存在的意义" },
          { label: "频道关系", value: "与活动、文化、订单页联动" },
        ]}
        primaryAction={{ href: "/gifts/catalog/", label: "查看礼品总览" }}
        secondaryAction={{ href: "/gifts/", label: "返回礼品频道" }}
        asideBody="场景页的存在，是为了避免礼品频道一开始就变成无差别商品流。"
      />

      <CardSection
        eyebrow="典型场景"
        title="按真实使用方式组织礼品结构"
        description="不同礼品对应不同入口。先搞清楚是祭祖、赠礼、陈设还是阅读传播，再决定应该进入哪类商品。"
        cards={giftOccasionCards}
        columns="3"
        muted
      />
    </>
  );
}
