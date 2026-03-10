import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { genealogyCenterCards, genealogyFacts } from "@/lib/portal-content";

export default function GenealogyPage() {
  return (
    <>
      <PageHero
        eyebrow="家谱中心"
        title="先确认线索，再进入对应家谱入口"
        lead="这里集中提供寻根、续谱、接谱和进度查看。"
        summary="第一次来先看所需资料；已确认支派可直接续谱；已提交资料可回到进度页查看处理状态。"
        chips={["谱系归属", "先备线索", "按需进入"]}
        facts={genealogyFacts}
        primaryAction={{ href: "/genealogy/find-roots/", label: "先去寻根" }}
        secondaryAction={{ href: "/genealogy/status/", label: "查看进度说明" }}
        asideBody="先判断你要做的是寻根、续谱、接谱，还是查看进度。"
      />

      <CardSection
        eyebrow="四个入口"
        title="按你的当前情况直接进入"
        description="第一次来先寻根；已确认支派去续谱；接手支派维护去接谱；已提交资料就看进度。"
        cards={genealogyCenterCards}
        columns="2"
        muted
      />

      <section className="page-section pt-4">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="ornament-line">提交前准备</p>
                <h2 className="section-title">准备越具体，提交越顺</h2>
                <p className="section-copy">
                  先把祖籍范围、辈分称谓、关键年份和可联系长辈整理好，再进入寻根或续谱，能少走很多补充流程。
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <ButtonLink href="/genealogy/find-roots/">按清单去寻根</ButtonLink>
                  <ButtonLink href="/genealogy/continue/" variant="secondary">
                    已确认支派，去续谱
                  </ButtonLink>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <article className="subtle-card">
                  <p className="eyebrow">基础线索</p>
                  <h3 className="mt-4 font-serif-cn text-[1.5rem] leading-tight text-ink">
                    寻根前至少准备三项信息
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
                    <li>祖籍地与迁徙方向（最早可确认到村镇）。</li>
                    <li>家中辈分字、称谓或口述排行线索。</li>
                    <li>可联系的长辈与支派联系人信息。</li>
                  </ul>
                </article>
                <article className="subtle-card">
                  <p className="eyebrow">续谱材料</p>
                  <h3 className="mt-4 font-serif-cn text-[1.5rem] leading-tight text-ink">
                    续谱以“可校对”而非“信息量”优先
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
                    <li>新增成员姓名、关系与出生年份。</li>
                    <li>迁居信息与关键时间节点说明。</li>
                    <li>证据来源：口述、文档或照片来源标记。</li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section pt-4">
        <Container>
          <div className="soft-panel">
            <div className="space-y-4">
              <p className="ornament-line">常见退回原因</p>
              <h2 className="section-title">提交前先排掉这 5 个常见问题</h2>
              <p className="section-copy">
                先自检一次，通常能减少补充轮次，也更容易尽快找到对应支派线索。
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              <article className="subtle-card">
                <p className="eyebrow">TOP 1</p>
                <h3 className="mt-4 font-serif-cn text-[1.26rem] leading-tight text-ink">
                  祖籍信息过泛
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  只写到省市无法定位谱系分支。
                </p>
                <p className="mt-4 text-sm leading-7 text-accent">
                  修正：至少补到县区或村镇，并附迁徙方向。
                </p>
              </article>
              <article className="subtle-card">
                <p className="eyebrow">TOP 2</p>
                <h3 className="mt-4 font-serif-cn text-[1.26rem] leading-tight text-ink">
                  辈分线索缺失
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  缺少辈分字或排行口述，难以建立校对锚点。
                </p>
                <p className="mt-4 text-sm leading-7 text-accent">
                  修正：补充家中常用称谓、辈分字和上一代关系。
                </p>
              </article>
              <article className="subtle-card">
                <p className="eyebrow">TOP 3</p>
                <h3 className="mt-4 font-serif-cn text-[1.26rem] leading-tight text-ink">
                  时间节点不完整
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  仅有姓名没有出生或迁居时间，难以串联世系。
                </p>
                <p className="mt-4 text-sm leading-7 text-accent">
                  修正：补录关键年份，哪怕是区间也比空缺更有效。
                </p>
              </article>
              <article className="subtle-card">
                <p className="eyebrow">TOP 4</p>
                <h3 className="mt-4 font-serif-cn text-[1.26rem] leading-tight text-ink">
                  证据来源未标注
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  无法区分口述、照片、文档来源，影响可信度。
                </p>
                <p className="mt-4 text-sm leading-7 text-accent">
                  修正：每条新增信息都注明来源类型与提供者。
                </p>
              </article>
              <article className="subtle-card">
                <p className="eyebrow">TOP 5</p>
                <h3 className="mt-4 font-serif-cn text-[1.26rem] leading-tight text-ink">
                  联系方式不可回访
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  提交后无法回联确认，导致流程中断。
                </p>
                <p className="mt-4 text-sm leading-7 text-accent">
                  修正：至少保留 1 位长辈或支派联系人备用。
                </p>
              </article>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
