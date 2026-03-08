import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { siteMeta } from "@/lib/site-meta";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-12 pt-20 sm:pt-24">
      <Container>
        <div className="surface-card grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
          <div className="space-y-4">
            <p className="eyebrow">第一版说明</p>
            <h2 className="font-serif-cn text-[1.85rem] leading-tight text-ink sm:text-[2.3rem]">
              先把精神线讲清，再谈后续连接与入谱。
            </h2>
            <p className="max-w-2xl text-[0.98rem] leading-8 text-muted">
              当前版本聚焦钱氏家训、吴越历史与近代人物三条线索。家谱功能会在后续阶段开放，不在这一版首页范围内。
            </p>
          </div>
          <div className="space-y-4 text-sm leading-7 text-muted">
            <p>
              入口预留：
              <Link href="/topics/jiaxun/" className="ml-2 text-accent">
                钱氏家训
              </Link>
              <Link href="/topics/wuyue/" className="ml-4 text-accent">
                钱王与吴越
              </Link>
              <Link href="/topics/figures/" className="ml-4 text-accent">
                近代人物
              </Link>
            </p>
            <p>{siteMeta.description}</p>
            <p>
              © {year} {siteMeta.name}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
