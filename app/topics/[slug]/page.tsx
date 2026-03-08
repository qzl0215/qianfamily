import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { getTopicRoute, topicRoutes } from "@/lib/topic-routes";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

const placeholderDetails = {
  jiaxun: [
    "导读版结构会优先解释这部家训是什么、为什么重要，以及它如何被概括为个人、家庭、社会、国家四个层次。",
    "首期会精选少量核心句并给出现代释义，不直接把页面做成一整篇堆叠长文。",
  ],
  wuyue: [
    "专题会以五个节点串起钱镠与吴越，从立国、治水、保境安民到纳土归宋，避免变成无重点百科。",
    "页面会强调历史判断，而不是影视剧情简介或资料摘抄。",
  ],
  figures: [
    "首期只会先选取少量代表人物，让人物与家训精神之间的关联说得更清楚。",
    "人物页将作为现代中国语境中的落脚点，而不是名人名单集合页。",
  ],
} as const;

export function generateStaticParams() {
  return topicRoutes.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicRoute(slug);

  if (!topic) {
    return {
      title: "专题不存在",
    };
  }

  return {
    title: `${topic.title}专题`,
    description: topic.summary,
  };
}

export default async function TopicPlaceholderPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopicRoute(slug);

  if (!topic) {
    notFound();
  }

  const details =
    placeholderDetails[topic.slug as keyof typeof placeholderDetails] ?? [];

  return (
    <section className="page-section py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="surface-card mx-auto max-w-4xl">
          <div className="space-y-6">
            <p className="eyebrow">专题占位页</p>
            <h1 className="font-serif-cn text-[2.3rem] leading-tight text-ink sm:text-[3.3rem]">
              {topic.title}
            </h1>
            <p className="max-w-3xl text-[1.02rem] leading-8 text-muted">
              {topic.summary}
            </p>
            <div className="rounded-[1.75rem] border border-line/80 bg-white/40 p-6">
              <p className="text-sm leading-7 text-muted">
                当前页面只负责承接首页入口，避免第一版 Demo 出现死链。正式内容页会在后续阶段逐步替换这里。
              </p>
              <div className="mt-5 space-y-3 text-[0.98rem] leading-8 text-muted">
                {details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <ButtonLink href="/">返回首页</ButtonLink>
              <ButtonLink href="/topics/wuyue/" variant="secondary">
                查看其他专题
              </ButtonLink>
            </div>
            <div className="border-t border-line/80 pt-5 text-sm leading-7 text-muted">
              <p>
                首页仍然是当前版本的主要预览入口：
                <Link href="/" className="ml-2 text-accent">
                  返回 Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
