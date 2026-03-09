import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

const closingChips = ["适合普通读者", "适合课堂导读", "适合专题深读前浏览"];

export function ClosingSection() {
  return (
    <section className="page-section">
      <Container>
        <div className="surface-card bg-[linear-gradient(180deg,rgba(251,248,242,0.95),rgba(232,221,209,0.72))]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-end">
            <div className="max-w-3xl space-y-6">
              <p className="ornament-line">页底收束</p>
              <h2 className="font-serif-cn text-[2rem] leading-tight text-ink sm:text-[2.75rem]">
                愿你由此读懂钱氏传统
              </h2>
              <p className="max-w-2xl text-[1rem] leading-8 text-muted">
                愿你从家训读到家风，从历史看家族选择，从人物理解精神延续。首页的使命，不是替代专题，而是帮你带着判断进入专题。
              </p>

              <div className="lead-quote max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  首页使命
                </p>
                <p className="mt-4 font-serif-cn text-[1.45rem] leading-8 text-ink sm:text-[1.65rem] sm:leading-9">
                  不是把信息平铺给你，
                  <br />
                  而是先帮你建立进入钱氏传统的判断力。
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-[1.8rem] border border-line/70 bg-white/35 p-6 shadow-[0_12px_28px_rgba(82,65,50,0.05)]">
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  从哪条线开始
                </p>
                <p className="text-[0.98rem] leading-8 text-muted">
                  第一次来站，建议先读家训；想先看历史决断，进入吴越；想直接看现代回响，进入人物专题。
                </p>
              </div>

              <ButtonLink href="/topics/jiaxun/" className="w-full">
                进入钱氏家训
              </ButtonLink>
              <ButtonLink href="/topics/wuyue/" variant="secondary" className="w-full">
                进入历史专题
              </ButtonLink>
              <ButtonLink href="/topics/figures/" variant="secondary" className="w-full">
                进入人物专题
              </ButtonLink>
            </div>
          </div>

          <div className="mt-8 quiet-rule" />

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
            {closingChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-line/70 bg-white/38 px-4 py-2"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
