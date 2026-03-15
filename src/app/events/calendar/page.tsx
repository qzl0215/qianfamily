import { eventCalendarCards } from "@/modules/events";
import { CardSection, PageHero } from "@/modules/portal-shell";

export default function EventsCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="祭祖活动"
        title="年度活动表"
        lead="让活动频道从临时通知，变成有年度节奏的公共安排。"
        summary="年度活动表帮助族人理解一年中大致会有哪些祭祖、联谊和青年活动，也让首页、公告和活动详情之间有更稳定的关系。"
        chips={["年度节奏", "活动规划", "公开浏览"]}
        facts={[
          { label: "核心价值", value: "提前建立活动节奏认知" },
          { label: "适用对象", value: "族人、家庭成员、活动协作者" },
          { label: "后续联动", value: "活动详情、报名、回顾" },
        ]}
        primaryAction={{ href: "/events/upcoming/", label: "查看近期活动" }}
        secondaryAction={{ href: "/events/", label: "返回活动频道" }}
        asideBody="年度活动表让活动频道不再是临时拼凑，而是形成清晰的时间节奏和组织认知。"
      />

      <CardSection
        eyebrow="年度安排"
        title="先有年度节奏，活动页才不会碎片化"
        description="这里不是最终的会务系统，而是活动认知层。它让族人知道一年中有哪些重要的宗亲连接节点。"
        cards={eventCalendarCards}
        columns="3"
        muted
      />
    </>
  );
}
