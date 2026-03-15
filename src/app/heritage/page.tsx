import { cultureHighlightCards, heritageOverviewFacts, storyCards } from "@/modules/heritage";
import { CardSection, PageHero } from "@/modules/portal-shell";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";

export default function HeritagePage() {
  return (
    <>
      <PageHero
        eyebrow="文化传承"
        title="先了解家训、历史与人物，再进入寻根和活动"
        lead="这里帮助第一次进入的族人先建立文化认同。"
        summary="先读家风家训，再看吴越历史与钱氏人物；想看真实经历，就进入族人故事。"
        chips={["文化认同", "家训历史人物", "公开浏览"]}
        facts={heritageOverviewFacts}
        primaryAction={{ href: "/heritage/jiafeng-jiaxun/", label: "先读家风家训" }}
        secondaryAction={{ href: "/heritage/wuyue/", label: "再看吴越历史" }}
        asideBody="如果你刚到站，建议先从家训和吴越历史开始。"
      />

      <CardSection
        eyebrow="专题入口"
        title="先读这四类内容"
        description="先看家训，再看历史与人物；想看真实经历，就进入族人故事。"
        cards={cultureHighlightCards}
        columns="4"
        muted
      />

      <CardSection
        eyebrow="内容回流"
        title="从真实经历看家族如何延续"
        description="这里集中收录迁徙、寻根和参与活动后的真实故事。"
        cards={storyCards}
        columns="3"
      />

      <section className="page-section pt-4">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="ornament-line">读完后立刻执行</p>
                <h2 className="section-title">读完后，先做一个寻根动作</h2>
                <p className="section-copy">
                  先记下一位可回访长辈，补齐祖籍范围，再带着三条线索进入寻根。
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
