import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import { upcomingEventCards } from "@/lib/portal-content";

export default function EventsUpcomingPage() {
  return (
    <>
      <PageHero
        eyebrow="祭祖活动"
        title="近期活动"
        lead="把最近可以参与的活动集中讲清楚，让族人能快速找到现实中的连接入口。"
        summary="这一页优先承载时间、地点、活动主题与参与方式说明。后续接入登录能力后，报名、签到和通知也会从这里进入。"
        chips={["公开可看", "近期活动", "登录后报名"]}
        facts={[
          { label: "页面目标", value: "公开说明最近可参与的活动" },
          { label: "当前内容", value: "时间、地点、主题、入口" },
          { label: "后续能力", value: "报名、签到、消息通知" },
        ]}
        primaryAction={{ href: "/events/", label: "返回活动频道" }}
        secondaryAction={{ href: "/events/my/", label: "查看我的报名说明" }}
        asideBody="近期活动页是活动频道最直接的行动入口，优先解决“最近能参与什么”的问题。"
      />

      <CardSection
        eyebrow="活动列表"
        title="先公开说明，再进入真实报名"
        description="当前阶段先把活动页结构和入口讲明白。后续接入登录后，这里会成为活动报名和签到的直接前台。"
        cards={upcomingEventCards}
        columns="3"
        muted
      />
    </>
  );
}
