import {
  eventCalendarCards,
  eventHistoryCards,
  eventsOverviewFacts,
  upcomingEventCards,
} from "./content";
import { CardSection, PageHero } from "@/modules/portal-shell";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";

export function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="祭祖活动"
        title="先看近期活动，再决定是否报名"
        lead="这里集中展示近期活动、年度安排和历届回顾。"
        summary="第一次来先看时间、地点和参与方式；已报名的族人，可直接进入个人活动页查看状态。"
        chips={["宗亲连接", "近期活动", "历届回顾"]}
        facts={eventsOverviewFacts}
        primaryAction={{ href: "/events/upcoming/", label: "查看近期活动" }}
        secondaryAction={{ href: "/events/calendar/", label: "查看年度活动表" }}
        asideBody="想参加活动，先从近期活动开始。"
      />

      <CardSection
        eyebrow="近期活动"
        title="先确认最近能参加什么"
        description="先看时间、地点和流程，再决定是否报名。"
        cards={upcomingEventCards}
        columns="3"
        muted
      />

      <CardSection
        eyebrow="年度活动表"
        title="一年里有哪些重要活动"
        description="提前了解祭祖、联谊和青年活动的大致时间。"
        cards={eventCalendarCards}
        columns="3"
      />

      <CardSection
        eyebrow="历届回顾"
        title="活动结束后还能看什么"
        description="照片、流程、纪要和故事统一保存在历届回顾。"
        cards={eventHistoryCards}
        columns="2"
        muted
      />

      <section className="page-section pt-4">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="ornament-line">参与路径</p>
                <h2 className="section-title">按当前状态直接进入</h2>
                <p className="section-copy">
                  第一次来先看近期活动；已报名就看个人状态；活动结束后去看回顾。
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <ButtonLink href="/events/upcoming/">先看近期活动</ButtonLink>
                  <ButtonLink href="/events/my/" variant="secondary">
                    我已报名，查看我的活动
                  </ButtonLink>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <article className="subtle-card">
                  <p className="eyebrow">首次访客</p>
                  <h3 className="mt-4 font-serif-cn text-[1.35rem] leading-tight text-ink">
                    先看时间地点与流程
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    先用近期活动页判断是否适合参与，再决定是否登录报名。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">报名中</p>
                  <h3 className="mt-4 font-serif-cn text-[1.35rem] leading-tight text-ink">
                    统一在我的活动看状态
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    报名确认、签到提醒、通知更新都集中到个人活动入口。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">活动后</p>
                  <h3 className="mt-4 font-serif-cn text-[1.35rem] leading-tight text-ink">
                    回顾沉淀为公共内容
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    照片、纪要与故事进入回顾区，形成可持续的宗亲连接记忆。
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section pt-4">
        <Container>
          <div className="soft-panel">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="ornament-line">报名前 2 分钟自检</p>
                <h2 className="section-title">报名之前，先完成这三步</h2>
                <p className="section-copy">
                  先选好场次，确认同行和到场方式，再留一个当天可联系的号码。
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <ButtonLink href="/events/upcoming/">完成自检后去报名</ButtonLink>
                  <ButtonLink href="/events/my/" variant="secondary">
                    已报名，查看我的活动
                  </ButtonLink>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <article className="subtle-card">
                  <p className="eyebrow">步骤 1</p>
                  <h3 className="mt-4 font-serif-cn text-[1.32rem] leading-tight text-ink">
                    先确定参与场次
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    在近期活动中先选定一个最可行场次，避免同时关注多个活动导致迟迟不报名。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">步骤 2</p>
                  <h3 className="mt-4 font-serif-cn text-[1.32rem] leading-tight text-ink">
                    确认同行与到场方式
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    先确认是否与家人同行、预计到场时间和交通方式，减少报名后反复改动。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">步骤 3</p>
                  <h3 className="mt-4 font-serif-cn text-[1.32rem] leading-tight text-ink">
                    记录一个可联系号码
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    报名前预留一个活动当天可联系号码，确保临时通知和签到提醒可及时接收。
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
