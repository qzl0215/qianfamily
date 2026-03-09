import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import { giftHighlightCards } from "@/lib/portal-content";

export default function GiftsCatalogPage() {
  return (
    <>
      <PageHero
        eyebrow="宣传礼品"
        title="礼品总览"
        lead="在礼品频道中，目录页承接的是浏览与理解，不是立刻把用户推进下单。"
        summary="这一页集中展示当前礼品方向和代表性条目，让用户先判断它们对应的文化意义、使用场景和纪念价值。后续会在登录后接入订单能力。"
        chips={["目录浏览", "文化意义优先", "登录后下单"]}
        facts={[
          { label: "当前阶段", value: "总览与目录结构先行" },
          { label: "浏览逻辑", value: "先看场景与意义，再看商品" },
          { label: "后续能力", value: "订单、物流、个人记录" },
        ]}
        primaryAction={{ href: "/gifts/", label: "返回礼品频道" }}
        secondaryAction={{ href: "/gifts/orders/", label: "查看订单说明" }}
        asideBody="礼品总览不会追求大而全，而是先建立一个有明确文化方向的目录页面。"
      />

      <CardSection
        eyebrow="当前目录"
        title="先把少量代表性礼品讲透"
        description="频道第一阶段优先展示可代表家训、吴越与活动纪念三类方向的礼品，后续再逐步扩展。"
        cards={giftHighlightCards}
        columns="3"
        muted
      />
    </>
  );
}
