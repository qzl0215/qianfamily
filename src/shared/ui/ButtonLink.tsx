import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const variantClass =
    variant === "primary" ? "button-primary" : "button-secondary";

  return (
    <Link
      href={href}
      className={`button-base ${variantClass}${className ? ` ${className}` : ""}`}
    >
      {children}
    </Link>
  );
}
