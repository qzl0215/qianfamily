import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import { giftHighlightCards } from "@/lib/portal-content";

export default function GiftsCatalogPage() {
  return (
    <>
      <PageHero
        eyebrow="宣传礼品"
        title="礼品总览"
        lead="先浏览代表性礼品，再决定是否下单。"
        summary="这里集中展示常用礼品及其适用场景，方便先比较再选择。"
        chips={["礼品总览", "按需选择", "场景对照"]}
        facts={[
          { label: "你会看到", value: "常用礼品、适用场景、主题方向" },
          { label: "浏览建议", value: "先判断用途，再看具体礼品" },
          { label: "下一步", value: "选定后进入礼品详情" },
        ]}
        primaryAction={{ href: "/gifts/", label: "返回礼品频道" }}
        secondaryAction={{ href: "/gifts/orders/", label: "查看我的订单" }}
        asideBody="先判断用途，再看具体礼品。"
      />

      <CardSection
        eyebrow="当前目录"
        title="先看常用款"
        description="从家训、吴越和活动纪念三类礼品开始挑选。"
        cards={giftHighlightCards}
        columns="3"
        muted
      />
    </>
  );
}
