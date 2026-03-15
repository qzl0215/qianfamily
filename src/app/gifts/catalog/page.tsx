import { giftHighlightCards } from "@/modules/gifts";
import { CardSection, PageHero } from "@/modules/portal-shell";

export default function GiftsCatalogPage() {
  return (
    <>
      <PageHero
        eyebrow="宣传礼品"
        title="礼品总览：按用途快速选品"
        lead="如果你已经大致明确场景，这一页可以直接对比礼品方向并进入详情。"
        summary="先看每类礼品的适用对象和使用场景，再看具体规格与后续下单说明，可减少重复比较和选错概率。"
        chips={["先看用途", "再看规格", "支持后续下单"]}
        facts={[
          { label: "当前可看", value: "代表礼品、适用场景、详情入口" },
          { label: "适合人群", value: "准备祭祖、联谊或家风赠礼的用户" },
          { label: "建议顺序", value: "对比用途 -> 打开详情 -> 进入订单说明" },
        ]}
        primaryAction={{ href: "/gifts/occasions/", label: "还不确定用途？先看场景" }}
        secondaryAction={{ href: "/gifts/", label: "返回礼品频道" }}
        asideTitle="你可以直接完成"
        asideBody="先锁定 1-2 个候选礼品，再进入详情页确认材质、规格和交付方式。"
      />

      <CardSection
        eyebrow="当前目录"
        title="先看三类高频礼品"
        description="用最常见的陈设、纪念与阅读传播礼品做起点，先选对方向，再决定具体款式。"
        cards={giftHighlightCards}
        columns="3"
        muted
      />
    </>
  );
}
