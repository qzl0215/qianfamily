import { Container } from "@/components/ui/Container";
import type { FaqItem } from "@/lib/portal-content";

type FaqSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
};

export function FaqSection({
  eyebrow,
  title,
  description,
  items,
}: FaqSectionProps) {
  return (
    <section className="page-section pt-6">
      <Container>
        <div className="surface-card">
          <div className="space-y-4">
            <p className="ornament-line">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-copy">{description}</p>
          </div>

          <div className="mt-10 space-y-4">
            {items.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.55rem] border border-line/70 bg-white/[0.36] p-5"
              >
                <h3 className="font-serif-cn text-[1.35rem] leading-8 text-ink">
                  {item.question}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-8 text-muted">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
