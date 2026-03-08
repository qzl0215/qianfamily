import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/ButtonLink";

type TopicCardProps = {
  eyebrow: string;
  title: string;
  href: string;
  actionText: string;
  statusText: string;
  children: ReactNode;
};

export function TopicCard({
  eyebrow,
  title,
  href,
  actionText,
  statusText,
  children,
}: TopicCardProps) {
  return (
    <article className="surface-card group flex h-full flex-col gap-6">
      <div className="space-y-4">
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="font-serif-cn text-[1.65rem] leading-tight text-ink sm:text-[1.85rem]">
          {title}
        </h3>
        <div className="space-y-3 text-[0.98rem] leading-8 text-muted">{children}</div>
      </div>
      <div className="mt-auto flex items-center justify-between gap-4 border-t border-line/70 pt-5">
        <span className="status-chip">{statusText}</span>
        <ButtonLink href={href} variant="secondary">
          {actionText}
        </ButtonLink>
      </div>
    </article>
  );
}
