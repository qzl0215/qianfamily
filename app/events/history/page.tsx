import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import { eventHistoryCards } from "@/lib/portal-content";

export default function EventsHistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="祭祖活动"
        title="历届回顾"
        lead="活动结束后，资料不该消失，而应继续回流成宗亲门户的公共内容。"
        summary="历届回顾页会承接活动照片、流程、纪要、人物发言和参与经验，让宗亲连接不只存在于活动当天，而是逐步积累为公共记忆。"
        chips={["内容回流", "活动回顾", "公共记忆"]}
        facts={[
          { label: "页面目标", value: "保留活动结束后的公共记忆" },
          { label: "典型内容", value: "照片、流程、发言、纪要、故事" },
          { label: "频道作用", value: "把线下连接重新变成线上内容" },
        ]}
        primaryAction={{ href: "/events/", label: "返回活动频道" }}
        secondaryAction={{ href: "/heritage/stories/", label: "查看族人故事" }}
        asideBody="活动历史不是附录，而是宗亲门户中“内容回流”这一层的重要来源。"
      />

      <CardSection
        eyebrow="回顾结构"
        title="让每次活动都能留下可回看的内容"
        description="这一页会逐步沉淀历届祭祖、联谊和主题活动回顾，形成更厚的宗亲公共记忆。"
        cards={eventHistoryCards}
        columns="2"
        muted
      />
    </>
  );
}
