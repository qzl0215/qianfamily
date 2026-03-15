import Link from "next/link";

import { homeNarrativeCards } from "@/modules/heritage";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";

export function HomeNarrativeSection() {
  return (
    <section className="page-section pt-4" id="family-narrative">
      <Container>
        <div className="soft-panel soft-panel-muted">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-5">
              <p className="ornament-line">家族主叙事</p>
              <h2 className="section-title">文化内容后移，但不能消失</h2>
              <p className="section-copy">
                家谱是连接，活动是组织，礼品是参与，但真正让这个站有身份感的仍然是家训、吴越与人物三条文化主线。它们构成门户的信任基础。
              </p>
              <div className="lead-quote">
                <p className="font-serif-cn text-[1.38rem] leading-9 text-ink">
                  钱氏网站不是“先做工具，文化以后再说”，而是“先有精神认同，再进入办事与连接”。
                </p>
              </div>
              <ButtonLink href="/heritage/" variant="secondary">
                进入文化传承
              </ButtonLink>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {homeNarrativeCards.map((card) => (
                <article key={card.title} className="subtle-card">
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3 className="mt-4 font-serif-cn text-[1.48rem] leading-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-accent">{card.meta}</p>
                  <p className="mt-4 text-[0.98rem] leading-8 text-muted">{card.summary}</p>
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
        </div>
      </Container>
    </section>
  );
}
