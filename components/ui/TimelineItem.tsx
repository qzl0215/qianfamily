import type { ReactNode } from "react";

type TimelineItemProps = {
  period: string;
  title: string;
  children: ReactNode;
};

export function TimelineItem({ period, title, children }: TimelineItemProps) {
  return (
    <article className="relative grid gap-4 pl-12 sm:pl-16">
      <span className="absolute left-0 top-2 grid h-7 w-7 place-items-center rounded-full border border-accent/20 bg-[linear-gradient(180deg,rgba(232,221,209,0.95),rgba(251,248,242,0.88))] shadow-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
      </span>
      <div className="space-y-3 border-b border-line/80 pb-9">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
          {period}
        </p>
        <h3 className="font-serif-cn text-[1.4rem] leading-tight text-ink sm:text-[1.55rem]">
          {title}
        </h3>
        <div className="max-w-3xl text-[0.98rem] leading-8 text-muted">{children}</div>
      </div>
    </article>
  );
}
