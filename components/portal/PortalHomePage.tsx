import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import {
  genealogyFacts,
  homeHeroContent,
  homeJiaxunAnchor,
  homeRootFeature,
  homeStoryFeature,
} from "@/lib/portal-content";

export function PortalHomePage() {
  return (
    <>
      <section className="page-section pb-10 pt-10 sm:pt-14 lg:pt-16" id="portal-home">
        <Container>
          <div className="surface-card surface-card-hero">
            <div className="max-w-4xl space-y-8">
              <span className="hero-kicker">{homeHeroContent.quoteSource}</span>
              <div className="space-y-5">
                <h1 className="font-serif-cn text-[3rem] leading-[1.04] text-ink sm:text-[4rem] lg:text-[5rem]">
                  {homeHeroContent.title}
                </h1>
                <div className="max-w-2xl">
                  <p className="hero-deck font-serif-cn text-[1.15rem] leading-8 text-muted sm:text-[1.3rem]">
                    {homeHeroContent.quote}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <ButtonLink href={homeHeroContent.primaryAction.href}>
                  {homeHeroContent.primaryAction.label}
                </ButtonLink>
                <ButtonLink
                  href={homeHeroContent.secondaryAction.href}
                  variant="secondary"
                >
                  {homeHeroContent.secondaryAction.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section pt-4" id="genealogy-center">
        <Container>
          <div className="soft-panel">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="ornament-line">{homeRootFeature.eyebrow}</p>
                <h2 className="section-title">{homeRootFeature.title}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {genealogyFacts.map((fact, index) => (
                    <div
                      key={fact.label}
                      className={`rounded-[1.45rem] border border-line/70 bg-white/[0.34] p-4 ${
                        index === genealogyFacts.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                        {fact.label}
                      </p>
                      <p className="mt-2 font-serif-cn text-[1.22rem] leading-8 text-ink">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-card space-y-6">
                <p className="eyebrow">{homeRootFeature.eyebrow}</p>
                <h3 className="font-serif-cn text-[2rem] leading-tight text-ink sm:text-[2.35rem]">
                  寻根
                </h3>
                <p className="text-[1rem] leading-8 text-muted">{homeRootFeature.summary}</p>
                <div className="pt-2">
                  <ButtonLink href={homeRootFeature.primaryAction.href}>
                    {homeRootFeature.primaryAction.label}
                  </ButtonLink>
                </div>

                <div className="border-t border-line/70 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                    其余入口
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {homeRootFeature.secondaryLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="inline-flex items-center gap-2 rounded-full border border-line/75 bg-white/[0.5] px-4 py-2 text-sm font-medium text-ink hover:border-accent/25 hover:text-accent"
                      >
                        {link.label}
                        <span aria-hidden="true">↗</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section pt-4" id="living-stories">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.64fr)] lg:items-stretch">
              <article className="surface-card">
                <p className="ornament-line">{homeStoryFeature.eyebrow}</p>
                <h2 className="mt-5 font-serif-cn text-[2.3rem] leading-[1.12] text-ink sm:text-[3rem]">
                  {homeStoryFeature.title}
                </h2>
                <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-muted">
                  {homeStoryFeature.summary}
                </p>
                <Link
                  href={homeStoryFeature.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  {homeStoryFeature.actionLabel}
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>

              <div className="grid gap-4">
                {homeStoryFeature.secondaryLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="subtle-card flex items-center justify-between gap-4"
                  >
                    <span className="font-serif-cn text-[1.4rem] leading-tight text-ink">
                      {link.label}
                    </span>
                    <span className="text-sm font-medium text-accent" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section pt-4" id="jiaxun-anchor">
        <Container>
          <div className="surface-card">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1fr)] lg:items-center">
              <div className="space-y-5">
                <p className="ornament-line">{homeJiaxunAnchor.eyebrow}</p>
                <h2 className="section-title">{homeJiaxunAnchor.title}</h2>
                <p className="text-sm leading-7 text-accent">{homeJiaxunAnchor.summary}</p>
                <ButtonLink href={homeJiaxunAnchor.href} variant="secondary">
                  {homeJiaxunAnchor.actionLabel}
                </ButtonLink>
              </div>

              <blockquote className="rounded-[1.9rem] border border-accent/15 bg-white/[0.42] p-6 sm:p-8 lg:p-10">
                <p className="font-serif-cn text-[1.9rem] leading-[1.55] text-ink sm:text-[2.45rem]">
                  {homeJiaxunAnchor.quote}
                </p>
                <p className="mt-4 text-sm tracking-[0.18em] text-muted">
                  钱氏家训
                </p>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
