import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import { eventHistoryCards } from "@/lib/portal-content";

export default function EventsHistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="祭祖活动"
        title="历届回顾"
        lead="活动结束后，照片、流程和纪要都留在这里。"
        summary="想了解往届活动现场、组织方式和参与氛围，可以先看这里。"
        chips={["内容回流", "活动回顾", "公共记忆"]}
        facts={[
          { label: "你会看到", value: "照片、流程、纪要、现场故事" },
          { label: "适合谁", value: "想了解往届活动情况的族人" },
          { label: "下一步", value: "看完后再决定是否参加下一场" },
        ]}
        primaryAction={{ href: "/events/", label: "返回活动频道" }}
        secondaryAction={{ href: "/heritage/stories/", label: "查看族人故事" }}
        asideBody="先看往届现场，再决定是否参加下一场。"
      />

      <CardSection
        eyebrow="回顾结构"
        title="每次活动都留下可回看的记录"
        description="统一保留时间、地点、照片和纪要，方便后续回看。"
        cards={eventHistoryCards}
        columns="2"
        muted
      />
    </>
  );
}
