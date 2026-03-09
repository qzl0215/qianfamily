import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import { Container } from "@/components/ui/Container";
import {
  accessRoles,
  genealogyCenterCards,
  genealogyFacts,
} from "@/lib/portal-content";

export default function GenealogyPage() {
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
    </>
  );
}
