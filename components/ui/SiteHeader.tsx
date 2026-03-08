import Link from "next/link";

import { Container } from "@/components/ui/Container";

const navItems = [
  { href: "/#positioning", label: "站点定位" },
  { href: "/#core-topics", label: "三大入口" },
  { href: "/#timeline", label: "时间线" },
  { href: "/topics/jiaxun/", label: "钱氏家训" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur">
      <Container className="py-4">
        <div className="flex flex-col gap-4 rounded-[1.75rem] border border-line/70 bg-panel/90 px-5 py-4 shadow-card md:flex-row md:items-center md:justify-between md:px-6">
          <Link href="/" className="flex items-center gap-4 text-ink">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-accent/15 bg-accent-soft font-serif-cn text-lg font-semibold text-accent">
              钱
            </span>
            <span className="flex flex-col">
              <span className="font-serif-cn text-lg leading-none">钱氏文化入口站</span>
              <span className="mt-1 text-sm text-muted">
                先家训，再历史，后人物
              </span>
            </span>
          </Link>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-accent focus-visible:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
