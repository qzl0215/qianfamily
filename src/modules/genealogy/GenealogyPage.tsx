import { accessRoles, genealogyCenterCards, genealogyFacts } from "./content";
import { CardSection, PageHero } from "@/modules/portal-shell";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";

export function GenealogyPage() {
  return (
    <>
      <PageHero
        eyebrow="家谱中心"
        title="把寻根、续谱、接谱统一收回一个中心入口"
        lead="家谱中心不是一堆平行入口，而是谱系归属的唯一办事中心。"
        summary="这个频道回答的是“我与钱氏家族如何连接”。公开状态下先讲用途、流程和所需资料；登录后再进入寻根、续谱、接谱和个人进度的真正办理过程。"
        chips={["谱系归属", "公开先读说明", "登录后办事"]}
        facts={genealogyFacts}
        primaryAction={{ href: "/genealogy/find-roots/", label: "先去寻根" }}
        secondaryAction={{ href: "/genealogy/status/", label: "查看进度说明" }}
        asideBody="家谱中心负责把寻根、续谱、接谱与状态查询统一起来，避免族人在多个入口之间来回寻找。"
      />

      <CardSection
        eyebrow="四个入口"
        title="先知道自己要做什么，再进入对应入口"
        description="首页只给动作提示，真正的办事逻辑放在家谱中心内。四个入口分别承接首次寻根、持续续谱、支派接谱和个人记录查看。"
        cards={genealogyCenterCards}
        columns="2"
        muted
      />

      <section className="page-section pt-4">
        <Container>
          <div className="surface-card">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="space-y-5">
                <p className="ornament-line">使用原则</p>
                <h2 className="section-title">先解释用途，再开放动作</h2>
                <div className="stack-list">
                  <div className="stack-list-item">
                    <p className="font-serif-cn text-[1.22rem] leading-8 text-ink">
                      寻根是确认线索，不是直接配出整本家谱。
                    </p>
                  </div>
                  <div className="stack-list-item">
                    <p className="font-serif-cn text-[1.22rem] leading-8 text-ink">
                      续谱是支派协作，不是单次补录一个名字。
                    </p>
                  </div>
                  <div className="stack-list-item">
                    <p className="font-serif-cn text-[1.22rem] leading-8 text-ink">
                      接谱是长期维护责任，不是一次性认领。
                    </p>
                  </div>
                  <div className="stack-list-item">
                    <p className="font-serif-cn text-[1.22rem] leading-8 text-ink">
                      状态页让每次提交都能被追踪、反馈和回看。
                    </p>
                  </div>
                </div>
              </div>

              <aside className="rounded-[1.8rem] border border-line/70 bg-white/[0.35] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  权限结构
                </p>
                <div className="mt-5 space-y-4">
                  {accessRoles.map((role) => (
                    <div
                      key={role.role}
                      className="rounded-[1.4rem] border border-line/70 bg-white/[0.45] p-4"
                    >
                      <p className="font-serif-cn text-[1.18rem] leading-8 text-ink">
                        {role.role}
                      </p>
                      <p className="mt-1 text-sm leading-7 text-accent">{role.scope}</p>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {role.description}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section pt-4">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="ornament-line">提交前准备</p>
                <h2 className="section-title">先把线索准备到位，再进入寻根或续谱</h2>
                <p className="section-copy">
                  家谱中心最常见的问题不是“入口找不到”，而是提交材料不足导致反复补充。先按清单准备，再进入对应入口，整体通过率更高。
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
              <h2 className="section-title">提交被退回，通常不是入口问题，而是材料可校对性不足</h2>
              <p className="section-copy">
                以下五类原因最常见。提交前先做一次自检，通常能显著减少补充轮次并缩短处理时间。
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

      <section className="page-section pt-4">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="space-y-4">
              <p className="ornament-line">提交前一一映射自检</p>
              <h2 className="section-title">把“准备动作”直接对齐到“可避免的退回原因”</h2>
              <p className="section-copy">
                只看准备清单容易遗漏重点，只看退回原因又容易焦虑。把两者合并为一张自检表，提交前逐条勾选更高效。
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              <article className="subtle-card">
                <p className="eyebrow">映射 1</p>
                <h3 className="mt-4 font-serif-cn text-[1.2rem] leading-tight text-ink">
                  补到县区/村镇
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">对应避免：祖籍信息过泛（TOP1）</p>
              </article>
              <article className="subtle-card">
                <p className="eyebrow">映射 2</p>
                <h3 className="mt-4 font-serif-cn text-[1.2rem] leading-tight text-ink">
                  写清辈分与称谓
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">对应避免：辈分线索缺失（TOP2）</p>
              </article>
              <article className="subtle-card">
                <p className="eyebrow">映射 3</p>
                <h3 className="mt-4 font-serif-cn text-[1.2rem] leading-tight text-ink">
                  关键年份先补区间
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">对应避免：时间节点不完整（TOP3）</p>
              </article>
              <article className="subtle-card">
                <p className="eyebrow">映射 4</p>
                <h3 className="mt-4 font-serif-cn text-[1.2rem] leading-tight text-ink">
                  每条信息标注来源
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">对应避免：证据来源未标注（TOP4）</p>
              </article>
              <article className="subtle-card">
                <p className="eyebrow">映射 5</p>
                <h3 className="mt-4 font-serif-cn text-[1.2rem] leading-tight text-ink">
                  预留可回访联系人
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">对应避免：联系方式不可回访（TOP5）</p>
              </article>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/genealogy/find-roots/">完成自检后去寻根提交</ButtonLink>
              <ButtonLink href="/genealogy/status/" variant="secondary">
                我已提交，查看进度说明
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
