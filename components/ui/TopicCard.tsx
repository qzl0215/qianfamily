import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/ButtonLink";

type TopicCardProps = {
  eyebrow: string;
  title: string;
  href: string;
  actionText: string;
  statusText?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
};

export function TopicCard({
  eyebrow,
  title,
  href,
  actionText,
  statusText,
  children,
  className,
  titleClassName,
}: TopicCardProps) {
  return (
    <article
      className={`surface-card group flex h-full flex-col gap-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent/15 hover:shadow-[0_28px_52px_rgba(82,65,50,0.12)]${
        className ? ` ${className}` : ""
      }`}
    >
      <div className="space-y-5">
        {statusText ? (
          <div className="flex items-center justify-between gap-4">
            <p className="topic-index">{eyebrow}</p>
            <span className="status-chip">{statusText}</span>
          </div>
        ) : (
          <p className="topic-index">{eyebrow}</p>
        )}
        <h3
          className={`topic-card-title font-serif-cn text-[1.65rem] leading-tight text-ink sm:text-[1.85rem]${
            titleClassName ? ` ${titleClassName}` : ""
          }`}
        >
          {title}
        </h3>
        <div className="quiet-rule" />
        <div className="topic-card-body space-y-3 text-[0.98rem] leading-8 text-muted">
          {children}
        </div>
      </div>
      <div className="mt-auto flex items-center justify-end gap-4 border-t border-line/70 pt-5">
        <ButtonLink href={href} variant="secondary" className="min-w-[126px]">
          {actionText}
        </ButtonLink>
      </div>
    </article>
  );
}
