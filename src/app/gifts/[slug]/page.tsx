import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { giftDetails } from "@/modules/gifts";
import { DetailPage } from "@/modules/portal-shell";

type GiftDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return giftDetails.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: GiftDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = giftDetails.find((entry) => entry.slug === slug);

  if (!item) {
    return {
      title: "礼品不存在",
    };
  }

  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function GiftDetailPage({ params }: GiftDetailPageProps) {
  const { slug } = await params;
  const item = giftDetails.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return <DetailPage content={item} />;
}
