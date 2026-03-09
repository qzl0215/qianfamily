import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import {
  eventCalendarCards,
  eventHistoryCards,
  eventsOverviewFacts,
  upcomingEventCards,
} from "@/lib/portal-content";

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="祭祖活动"
        title="从活动说明进入真实的宗亲连接"
        lead="活动频道既是内容，也是连接与报名系统的入口。"
        summary="这里公开展示近期活动、年度活动表、历届回顾和活动详情，让第一次进入的访客也能看明白活动在做什么。登录后，再进入报名、签到、通知和个人记录。"
        chips={["宗亲连接", "公开可看", "登录后报名"]}
        facts={eventsOverviewFacts}
        primaryAction={{ href: "/events/upcoming/", label: "查看近期活动" }}
        secondaryAction={{ href: "/events/calendar/", label: "查看年度活动表" }}
        asideBody="活动频道不该只是一个列表页，它最终要形成“公开说明、登录报名、回顾沉淀”的完整系统。"
      />

      <CardSection
        eyebrow="近期活动"
        title="让族人先看到现实中的连接入口"
        description="首页只展示精选活动，真正的活动信息在这里统一展开。当前优先把活动详情、结构和入口先搭稳。"
        cards={upcomingEventCards}
        columns="3"
        muted
      />

      <CardSection
        eyebrow="年度活动表"
        title="把年度节奏讲清楚，活动频道才会有持续性"
        description="活动不应只是临时通知。年度活动表让族人提前理解祭祖、联谊和青年活动的节奏。"
        cards={eventCalendarCards}
        columns="3"
      />

      <CardSection
        eyebrow="历届回顾"
        title="让活动结束后继续回流为公共内容"
        description="活动频道的价值，不只在报名，更在于把照片、流程、纪要和参与经验持续沉淀为可回看的公共记忆。"
        cards={eventHistoryCards}
        columns="2"
        muted
      />
    </>
  );
}
