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

      <section className="page-section pt-4">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="ornament-line">参与路径</p>
                <h2 className="section-title">按你当前状态进入，不必从头读完整频道</h2>
                <p className="section-copy">
                  活动信息持续增长后，首次访问者容易迷失。将路径拆成“先看活动、直接报名、活动回流”三个入口，可明显缩短决策时间。
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
                <p className="ornament-line">本月关键时间点</p>
                <h2 className="section-title">把“看到活动”到“内容回流”收敛成一个月内可执行节奏</h2>
                <p className="section-copy">
                  活动参与的断点通常发生在“我知道有活动，但不知道何时做什么”。用微时间轴给出最小节奏，帮助首次参与者按节点行动。
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <ButtonLink href="/events/calendar/">查看完整年度活动表</ButtonLink>
                  <ButtonLink href="/events/history/" variant="secondary">
                    活动后进入历届回顾
                  </ButtonLink>
                </div>
              </div>

              <div className="space-y-4">
                <article className="subtle-card">
                  <p className="eyebrow">第 1 周</p>
                  <h3 className="mt-4 font-serif-cn text-[1.35rem] leading-tight text-ink">
                    公开说明与行程评估
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    先看活动时间、地点、流程和参与对象，确认是否适配家庭安排与支派计划。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">第 2 周</p>
                  <h3 className="mt-4 font-serif-cn text-[1.35rem] leading-tight text-ink">
                    登录报名与资料确认
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    统一在“我的活动”完成报名、通知确认与签到信息检查，避免临场缺资料。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">第 3-4 周</p>
                  <h3 className="mt-4 font-serif-cn text-[1.35rem] leading-tight text-ink">
                    到场参与并回流内容
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    活动结束后将照片、纪要和故事沉淀到历届回顾，形成下一轮活动的公共记忆基底。
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section pt-4">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="ornament-line">活动后 72 小时回流清单</p>
                <h2 className="section-title">把参与结果尽快沉淀，避免“活动结束即断流”</h2>
                <p className="section-copy">
                  活动价值不只在当天完成，而在于 72 小时内回流成公共内容。按清单执行可显著提高后续可复用性。
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <ButtonLink href="/events/history/">上传到历届回顾入口</ButtonLink>
                  <ButtonLink href="/heritage/stories/" variant="secondary">
                    转成族人故事沉淀
                  </ButtonLink>
                </div>
              </div>

              <div className="space-y-4">
                <article className="subtle-card">
                  <p className="eyebrow">活动后 24h</p>
                  <h3 className="mt-4 font-serif-cn text-[1.32rem] leading-tight text-ink">
                    整理素材并标注时间地点
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    先整理照片、流程纪要和参与名单，统一标注时间、地点与活动名称，避免后续素材失焦。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">活动后 48h</p>
                  <h3 className="mt-4 font-serif-cn text-[1.32rem] leading-tight text-ink">
                    形成 3 条可复用结论
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    总结“本次做得好、可改进、下次沿用”三条结论，优先给下一轮活动组织者直接复用。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">活动后 72h</p>
                  <h3 className="mt-4 font-serif-cn text-[1.32rem] leading-tight text-ink">
                    回流到回顾与故事双入口
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    一份进入活动回顾保存事实资料，一份进入族人故事保留口述与感受，形成可持续公共记忆。
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
