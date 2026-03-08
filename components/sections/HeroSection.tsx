import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="page-section pt-8 sm:pt-12 lg:pt-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.9fr)] lg:items-end">
          <div className="surface-card surface-card-hero">
            <div className="max-w-3xl space-y-6">
              <p className="eyebrow">首页 Home</p>
              <h1 className="font-serif-cn text-[2.85rem] leading-[1.05] text-ink sm:text-[4rem] lg:text-[5.1rem]">
                钱氏家训
              </h1>
              <p className="max-w-2xl font-serif-cn text-[1.25rem] leading-8 text-accent sm:text-[1.45rem] sm:leading-9">
                从钱镠到近代钱氏人物，读懂一个家族跨越千年的精神线。
              </p>
              <p className="max-w-2xl text-[1rem] leading-8 text-muted sm:text-[1.05rem]">
                这不是一个急着把名字录进去的家谱工具，而是一座从上海出发的文化入口站。先读家训，理解精神的根；再看钱王与吴越，理解历史的脉；最后再进入近现代人物，理解这条精神线如何走进现代中国。
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <ButtonLink href="/topics/jiaxun/">先读钱氏家训</ButtonLink>
                <ButtonLink href="/topics/wuyue/" variant="secondary">
                  看钱王与吴越
                </ButtonLink>
              </div>
            </div>
          </div>

          <aside className="surface-card h-full bg-panel/90">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="eyebrow">首期结构</p>
                <h2 className="font-serif-cn text-[1.8rem] leading-tight text-ink">
                  文化入口站，不急于入谱
                </h2>
                <p className="text-[0.98rem] leading-8 text-muted">
                  第一版聚焦四页结构：首页负责建立认知，其余三页分别承接家训、吴越与近现代人物专题。
                </p>
              </div>
              <div className="space-y-4 border-t border-line/80 pt-5 text-sm leading-7 text-muted">
                <div className="flex items-start justify-between gap-4">
                  <span>叙事顺序</span>
                  <span className="text-right text-ink">家训 → 历史 → 人物</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>当前交付</span>
                  <span className="text-right text-ink">首页 Demo + 专题占位页</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>后续开放</span>
                  <span className="text-right text-ink">家谱入谱功能</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
