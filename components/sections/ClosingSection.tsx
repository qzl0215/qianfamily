import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function ClosingSection() {
  return (
    <section className="page-section">
      <Container>
        <div className="surface-card bg-[linear-gradient(180deg,rgba(251,248,242,0.95),rgba(232,221,209,0.72))]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
            <div className="space-y-5">
              <p className="eyebrow">结尾引导</p>
              <h2 className="font-serif-cn text-[2rem] leading-tight text-ink sm:text-[2.75rem]">
                从这里开始认识钱氏
              </h2>
              <p className="max-w-2xl text-[1rem] leading-8 text-muted">
                你可以先从钱氏家训进入，先认识这套精神为何被代代传承；也可以先从吴越历史进入，看它如何在真实历史中形成。家谱入谱功能会在后续阶段开放，但不是这一版的起点。
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <ButtonLink href="/topics/jiaxun/">进入钱氏家训</ButtonLink>
              <ButtonLink href="/topics/wuyue/" variant="secondary">
                进入钱王与吴越
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
