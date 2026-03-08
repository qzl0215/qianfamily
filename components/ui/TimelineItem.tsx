import type { ReactNode } from "react";

type TimelineItemProps = {
  period: string;
  title: string;
  children: ReactNode;
};

export function TimelineItem({ period, title, children }: TimelineItemProps) {
  return (
    <article className="relative grid gap-4 pl-10 sm:pl-12">
      <span className="absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full border border-accent/20 bg-accent-soft shadow-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
      </span>
      <div className="space-y-2 border-b border-line/80 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
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
