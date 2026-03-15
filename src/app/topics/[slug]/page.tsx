import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { figuresPageMeta, FiguresTopicPage } from "@/modules/topics/figures";
import { jiaxunPageMeta, JiaxunTopicPage } from "@/modules/topics/jiaxun";
import { getTopicRoute, topicRoutes } from "@/modules/topics/registry";
import { wuyuePageMeta, WuyueTopicPage } from "@/modules/topics/wuyue";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

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

  if (topic.slug === "jiaxun") {
    return {
      title: `${jiaxunPageMeta.title}专题`,
      description: jiaxunPageMeta.description,
    };
  }

  if (topic.slug === "wuyue") {
    return {
      title: `${wuyuePageMeta.title}专题`,
      description: wuyuePageMeta.description,
    };
  }

  if (topic.slug === "figures") {
    return {
      title: `${figuresPageMeta.title}专题`,
      description: figuresPageMeta.description,
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

  if (topic.slug === "jiaxun") {
    return <JiaxunTopicPage />;
  }

  if (topic.slug === "wuyue") {
    return <WuyueTopicPage />;
  }

  if (topic.slug === "figures") {
    return <FiguresTopicPage />;
  }

  notFound();
}
