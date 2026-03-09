import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import type { PortalFact } from "@/lib/portal-content";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  summary: string;
  facts: PortalFact[];
  chips?: string[];
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  asideTitle?: string;
  asideBody: string;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  summary,
  facts,
  chips,
  primaryAction,
  secondaryAction,
  asideTitle = "页面定位",
  asideBody,
}: PageHeroProps) {
  return (
    <section className="page-section pb-10 pt-10 sm:pt-14 lg:pt-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:items-stretch">
          <div className="surface-card bg-[linear-gradient(145deg,rgba(251,248,242,0.96),rgba(232,221,209,0.68))]">
            <div className="max-w-4xl space-y-7">
              <span className="hero-kicker">{eyebrow}</span>
              <div className="space-y-5">
                <p className="ornament-line">宗亲门户</p>
                <h1 className="font-serif-cn text-[3rem] leading-[1.06] text-ink sm:text-[4rem] lg:text-[4.9rem]">
                  {title}
                </h1>
              </div>
              <p className="hero-deck">{lead}</p>
              <p className="hero-summary">{summary}</p>
              {chips && chips.length > 0 ? (
                <div className="flex flex-wrap gap-2.5 text-sm text-accent">
                  {chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-accent/10 bg-white/50 px-4 py-2"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
              {primaryAction || secondaryAction ? (
                <div className="flex flex-wrap gap-4 pt-1">
                  {primaryAction ? (
                    <ButtonLink href={primaryAction.href}>
                      {primaryAction.label}
                    </ButtonLink>
                  ) : null}
                  {secondaryAction ? (
                    <ButtonLink
                      href={secondaryAction.href}
                      variant={secondaryAction.variant ?? "secondary"}
                    >
                      {secondaryAction.label}
                    </ButtonLink>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>

          <aside className="surface-card hero-side-panel">
            <div className="space-y-5">
              <p className="ornament-line">专题速览</p>
              <div className="space-y-4">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-[1.5rem] border border-line/75 bg-white/[0.38] p-5"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                      {fact.label}
                    </p>
                    <p className="mt-3 font-serif-cn text-[1.28rem] leading-8 text-ink">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-[1.55rem] border border-line/75 bg-white/[0.34] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  {asideTitle}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">{asideBody}</p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
