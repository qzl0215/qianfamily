import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PositioningSection() {
  return (
    <section className="page-section" id="positioning">
      <Container>
        <div className="soft-panel">
          <SectionHeading
            eyebrow="站点定位"
            title="先理解，再认同，再连接"
            description={
              <p>
                这个站点的第一步，不是让用户立刻填写信息，而是先建立一条清晰的文化叙事线。先把精神与历史讲明白，后续的连接才有根。
              </p>
            }
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="subtle-card">
              <h3 className="font-serif-cn text-[1.45rem] leading-tight text-ink">
                家谱记录名字与关系
              </h3>
              <p className="mt-3 text-[0.98rem] leading-8 text-muted">
                家谱当然重要，它保存血脉、世系与迁徙脉络，帮助人知道自己来自哪里，也知道与谁相连。
              </p>
            </article>
            <article className="subtle-card">
              <h3 className="font-serif-cn text-[1.45rem] leading-tight text-ink">
                家训承载家族真正的灵魂
              </h3>
              <p className="mt-3 text-[0.98rem] leading-8 text-muted">
                真正决定一个家族如何被记住的，不只是名字被写进谱里，而是它留下了怎样的做人准则、公共精神与教育方式。
              </p>
            </article>
            <article className="subtle-card">
              <h3 className="font-serif-cn text-[1.45rem] leading-tight text-ink">
                第一版先讲精神与历史
              </h3>
              <p className="mt-3 text-[0.98rem] leading-8 text-muted">
                因此这一版先把钱氏家训、钱王与吴越、近现代人物三条线搭起来，不急着做入谱与工具化功能。
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
