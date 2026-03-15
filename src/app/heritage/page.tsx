import { cultureHighlightCards, heritageOverviewFacts, storyCards } from "@/modules/heritage";
import { CardSection, PageHero } from "@/modules/portal-shell";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";

export default function HeritagePage() {
  return (
    <>
      <PageHero
        eyebrow="文化传承"
        title="把钱氏家风家训、历史与人物收回一个总频道"
        lead="文化传承回答的是认同问题，而不是办事问题。"
        summary="这个频道吸纳家风家训、吴越历史、近代人物和族人故事四条内容线，作为宗亲门户的认知底板。它让族人在进入寻根、活动和礼品之前，先知道自己为何与这个家族相连。"
        chips={["文化认同", "总频道", "公开浏览"]}
        facts={heritageOverviewFacts}
        primaryAction={{ href: "/heritage/jiafeng-jiaxun/", label: "先读家风家训" }}
        secondaryAction={{ href: "/heritage/wuyue/", label: "再看吴越历史" }}
        asideBody="文化传承不再拆成多个顶层导航，而是以一个总频道承载家训、历史、人物和故事。"
      />

      <CardSection
        eyebrow="专题入口"
        title="先用三条主线立住认知，再把真实故事补进来"
        description="家风家训、吴越历史和近代人物是稳定的三条主线，族人故事则承接寻根、活动和现实参与后的内容回流。"
        cards={cultureHighlightCards}
        columns="4"
        muted
      />

      <CardSection
        eyebrow="内容回流"
        title="让族人故事成为持续更新的公共内容"
        description="故事栏目既承接文化频道，也与家谱中心和活动系统联动。它让网站不只是读资料，而是持续沉淀现实参与后的真实经验。"
        cards={storyCards}
        columns="3"
      />

      <section className="page-section pt-4">
        <Container>
          <div className="surface-card">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="ornament-line">30 秒导读</p>
                <h2 className="section-title">先读三条主线，再进入归属与参与</h2>
                <p className="section-copy">
                  文化传承不是独立终点，而是全站主线的起点。先看家训建立价值认同，再用历史与人物确认家族脉络，最后进入寻根和活动完成现实连接。
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <ButtonLink href="/genealogy/find-roots/">认同后去寻根</ButtonLink>
                  <ButtonLink href="/events/upcoming/" variant="secondary">
                    认同后去看活动
                  </ButtonLink>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <article className="subtle-card">
                  <p className="eyebrow">1 / 价值底板</p>
                  <h3 className="mt-4 font-serif-cn text-[1.36rem] leading-tight text-ink">
                    家训先回答“为何相连”
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    从善事国家、重德修身到崇文尚学，先建立家族共同价值。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">2 / 历史脉络</p>
                  <h3 className="mt-4 font-serif-cn text-[1.36rem] leading-tight text-ink">
                    吴越与人物回答“从何而来”
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    把历史与近现代人物放在同一脉络里，形成完整认知。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">3 / 现实行动</p>
                  <h3 className="mt-4 font-serif-cn text-[1.36rem] leading-tight text-ink">
                    回到寻根与活动完成连接
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    文化认同最终应转成谱系归属与宗亲参与，而不是停留在阅读。
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
                <p className="ornament-line">读完后立刻执行</p>
                <h2 className="section-title">把文化阅读转成 3 分钟可完成的寻根启动动作</h2>
                <p className="section-copy">
                  读完家训、历史与人物后，不建议停留在“我理解了”。先完成一个最小寻根动作，可让文化认同立刻进入谱系归属阶段。
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <ButtonLink href="/genealogy/find-roots/">现在去做寻根首步</ButtonLink>
                  <ButtonLink href="/genealogy/" variant="secondary">
                    查看家谱中心全流程
                  </ButtonLink>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <article className="subtle-card">
                  <p className="eyebrow">1 / 写下线索</p>
                  <h3 className="mt-4 font-serif-cn text-[1.3rem] leading-tight text-ink">
                    先记 1 位可回访长辈
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    先确认一位能补充家族口述的联系人，优先补齐祖籍、辈分或迁徙记忆中的任一项。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">2 / 锁定最小范围</p>
                  <h3 className="mt-4 font-serif-cn text-[1.3rem] leading-tight text-ink">
                    补到县区或村镇级别
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    地域越具体，匹配支派效率越高。先把祖籍信息收敛到县区/村镇，避免“省级信息过泛”被退回。
                  </p>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">3 / 进入提交页</p>
                  <h3 className="mt-4 font-serif-cn text-[1.3rem] leading-tight text-ink">
                    带着 3 条线索提交
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    建议至少携带“祖籍范围 + 辈分称谓 + 关键年份”三条信息，先完成首提，再按进度页持续补充。
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
