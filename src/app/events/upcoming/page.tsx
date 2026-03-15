import { upcomingEventCards } from "@/modules/events";
import { CardSection, PageHero } from "@/modules/portal-shell";

export default function EventsUpcomingPage() {
  return (
    <>
      <PageHero
        eyebrow="祭祖活动"
        title="近期活动"
        lead="这里列出最近可参加的祭祖、联谊和青年活动。"
        summary="先看时间、地点、流程和参与对象，确定合适后再进入报名。"
        chips={["近期活动", "公开说明", "按需报名"]}
        facts={[
          { label: "页面重点", value: "先确认最近能参加什么" },
          { label: "你会看到", value: "时间、地点、流程、参与方式" },
          { label: "下一步", value: "选定一场后进入报名" },
        ]}
        primaryAction={{ href: "/events/", label: "返回活动频道" }}
        secondaryAction={{ href: "/events/my/", label: "查看我的活动" }}
        asideBody="先选一场最适合你的近期活动。"
      />

      <CardSection
        eyebrow="活动列表"
        title="先看清楚，再决定报名"
        description="每张卡都给出时间、地点和活动主题，方便快速判断。"
        cards={upcomingEventCards}
        columns="3"
        muted
      />
    </>
  );
}
