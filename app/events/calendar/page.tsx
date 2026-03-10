import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import { eventCalendarCards } from "@/lib/portal-content";

export default function EventsCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="祭祖活动"
        title="年度活动表"
        lead="提前知道一年里有哪些重要活动。"
        summary="适合先安排祭祖、联谊和青年活动时间，也方便家庭一起规划参与。"
        chips={["年度安排", "提前规划", "公开浏览"]}
        facts={[
          { label: "最适合谁", value: "准备安排全年活动时间的族人" },
          { label: "你会看到", value: "月份、活动类型、重点节点" },
          { label: "下一步", value: "临近时再看近期活动详情" },
        ]}
        primaryAction={{ href: "/events/upcoming/", label: "查看近期活动" }}
        secondaryAction={{ href: "/events/", label: "返回活动频道" }}
        asideBody="先看月份，再决定重点参加哪一场。"
      />

      <CardSection
        eyebrow="年度安排"
        title="按月份看全年安排"
        description="用一年视角判断祭祖、联谊和青年活动的节奏。"
        cards={eventCalendarCards}
        columns="3"
        muted
      />
    </>
  );
}
