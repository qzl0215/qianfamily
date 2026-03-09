import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

const readingSteps = [
  {
    eyebrow: "第一步",
    title: "先读家训立尺度",
    description:
      "先抓住善事国家、重德修身、崇文尚学这些核心价值，知道钱氏真正重视什么。",
  },
  {
    eyebrow: "第二步",
    title: "再看吴越与历史判断",
    description:
      "把价值放回乱世、立国、纳土归宋这些关键选择中，看精神如何落实为历史行动。",
  },
  {
    eyebrow: "第三步",
    title: "最后进入近代人物",
    description:
      "从人物身上看传统如何进入现代中国，不是停留在家训纸页之内，而是继续向现实发声。",
  },
];

const heroHighlights = [
  {
    eyebrow: "精神轴",
    title: "先认同，再进入细读",
    description:
      "首页先帮读者建立认识钱氏的尺度，而不是一开始就把信息打散成并列入口。",
  },
  {
    eyebrow: "历史轴",
    title: "看价值如何落到历史选择",
    description:
      "从钱镠起身、吴越立国到纳土归宋，理解钱氏传统为何常被概括为保境安民与重视民生。",
  },
  {
    eyebrow: "人物轴",
    title: "看传统如何进入现代回响",
    description:
      "近现代钱氏人物不是名人清单，而是这条精神线在教育、科学与公共文化中的继续延伸。",
  },
];

export function HeroSection() {
  return (
    <section className="page-section pt-8 sm:pt-12 lg:pt-16">
      <Container>
        <div className="surface-card surface-card-hero">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-stretch">
            <div className="flex flex-col justify-between gap-8 lg:pr-4">
              <div className="space-y-7">
                <span className="hero-kicker">钱氏文化入口站</span>

                <div className="space-y-6">
                  <p className="ornament-line">卷首导引</p>
                  <h1 className="font-serif-cn text-[3rem] leading-[1.03] text-ink sm:text-[4.25rem] lg:text-[5.35rem]">
                    传承千年智慧，
                    <br />
                    修身齐家治国平天下
                  </h1>
                </div>

                <p className="hero-deck">
                  以家训为精神主轴，以吴越历史为时代背景，以近代人物为现实回响，让进入顺序本身就带出钱氏传统的结构。
                </p>

                <div className="hero-lead-quote">
                  <p className="pl-6 text-[1.02rem] leading-8 text-ink-soft sm:text-[1.08rem]">
                    首页不是族谱工具，也不是资料索引，而是帮助你先建立认识钱氏的坐标，再进入专题细读。
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap gap-4 pt-1">
                  <ButtonLink href="/topics/jiaxun/">先读钱氏家训</ButtonLink>
                  <ButtonLink href="/#core-topics" variant="secondary">
                    浏览三条主线
                  </ButtonLink>
                </div>

                <div className="hero-path-card max-w-3xl">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                      推荐阅读顺序
                    </p>
                    <span className="status-chip">首页导览</span>
                  </div>

                  <div className="mt-3">
                    {readingSteps.map((step) => (
                      <div
                        key={step.title}
                        className="hero-path-step grid gap-3 py-4 sm:grid-cols-[82px_minmax(0,1fr)] sm:gap-5"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                          {step.eyebrow}
                        </p>
                        <div className="space-y-2">
                          <h2 className="font-serif-cn text-[1.25rem] leading-tight text-ink">
                            {step.title}
                          </h2>
                          <p className="text-[0.98rem] leading-8 text-muted">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="soft-panel hero-side-panel flex h-full flex-col justify-between gap-6 lg:gap-8">
              <div className="space-y-5">
                <p className="ornament-line">卷首说明</p>
                <h2 className="font-serif-cn text-[2rem] leading-tight text-ink sm:text-[2.45rem]">
                  文化入口站，
                  <br />
                  不急于直接分流
                </h2>
                <p className="hero-summary">
                  首页先建立认知，再把阅读导向家训、吴越与人物三条主线。这样进入专题时，读者已经知道为什么看、先看什么、看完能带走什么。
                </p>
              </div>

              <div className="hero-side-list">
                {heroHighlights.map((item) => (
                  <div key={item.title} className="hero-side-item">
                    <p className="topic-index">{item.eyebrow}</p>
                    <h3 className="font-serif-cn text-[1.35rem] leading-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="text-[0.96rem] leading-8 text-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.8rem] border border-line/70 bg-white/38 p-5 shadow-[0_12px_28px_rgba(82,65,50,0.045)]">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                      阅读顺序
                    </p>
                    <p className="mt-3 font-serif-cn text-[1.4rem] leading-8 text-ink">
                      家训 → 历史 → 人物
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                      适合谁先看
                    </p>
                    <p className="mt-3 text-[0.96rem] leading-8 text-muted">
                      第一次接触钱氏文化、需要课堂导读、想快速理解三条主线结构的人。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
