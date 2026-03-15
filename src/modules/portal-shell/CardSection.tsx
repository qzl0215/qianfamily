import Link from "next/link";

import { Container } from "@/shared/ui/Container";

import type { PortalCard } from "./types";

type CardSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  cards: PortalCard[];
  columns?: "2" | "3" | "4";
  muted?: boolean;
};

const columnClassMap = {
  "2": "lg:grid-cols-2",
  "3": "lg:grid-cols-3",
  "4": "sm:grid-cols-2 xl:grid-cols-4",
} as const;

export function CardSection({
  id,
  eyebrow,
  title,
  description,
  cards,
  columns = "3",
  muted = false,
}: CardSectionProps) {
  return (
    <section className="page-section pt-4" id={id}>
      <Container>
        <div className={muted ? "soft-panel soft-panel-muted" : "soft-panel"}>
          <div className="space-y-4">
            <p className="ornament-line">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-copy">{description}</p>
          </div>

          <div className={`mt-10 grid gap-5 ${columnClassMap[columns]}`}>
            {cards.map((card) => (
              <article key={`${card.href}-${card.title}`} className="subtle-card">
                {card.eyebrow ? <p className="eyebrow">{card.eyebrow}</p> : null}
                <h3 className="mt-4 font-serif-cn text-[1.55rem] leading-tight text-ink">
                  {card.title}
                </h3>
                {card.meta ? (
                  <p className="mt-3 text-sm leading-7 text-accent">{card.meta}</p>
                ) : null}
                <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                  {card.summary}
                </p>
                {card.tags && card.tags.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-2.5 text-sm text-accent">
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
                  {card.actionLabel ?? "查看详情"}
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
