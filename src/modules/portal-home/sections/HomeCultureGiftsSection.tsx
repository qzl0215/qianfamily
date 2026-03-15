import Link from "next/link";

import { cultureHighlightCards } from "@/modules/heritage";
import { giftHighlightCards } from "@/modules/gifts";
import { Container } from "@/shared/ui/Container";

export function HomeCultureGiftsSection() {
  return (
    <>
      <section className="page-section pt-4" id="culture-preview">
        <Container>
          <div className="soft-panel">
            <div className="space-y-4">
              <p className="ornament-line">文化传承</p>
              <h2 className="section-title">把家风家训、吴越历史、人物与故事收回一个频道</h2>
              <p className="section-copy">
                文化传承是一个总频道，而不是多个平行顶层入口。首页只展示精选内容，正式阅读统一进入频道内部完成。
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {cultureHighlightCards.map((card) => (
                <article key={card.title} className="subtle-card">
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3 className="mt-4 font-serif-cn text-[1.4rem] leading-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-accent">{card.meta}</p>
                  <p className="mt-4 text-[0.96rem] leading-8 text-muted">{card.summary}</p>
                  <Link
                    href={card.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
                  >
                    {card.actionLabel}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section pt-4" id="gifts-preview">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="space-y-4">
              <p className="ornament-line">宣传礼品</p>
              <h2 className="section-title">礼品频道按文化意义与使用场景组织，而不是先堆商品</h2>
              <p className="section-copy">
                这里承接门户中的“参与行动”层。礼品既是纪念物，也是文化传播工具，所以页面要先讲用途和场景，再讲下单与订单。
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {giftHighlightCards.map((card) => (
                <article key={card.title} className="subtle-card">
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3 className="mt-4 font-serif-cn text-[1.5rem] leading-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-accent">{card.meta}</p>
                  <p className="mt-4 text-[0.98rem] leading-8 text-muted">{card.summary}</p>
                  {card.tags ? (
                    <div className="mt-5 flex flex-wrap gap-2 text-sm text-accent">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-accent/10 bg-white/50 px-3 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <Link
                    href={card.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
                  >
                    {card.actionLabel}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
