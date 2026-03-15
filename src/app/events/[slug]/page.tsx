import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { eventDetails } from "@/modules/events";
import { DetailPage } from "@/modules/portal-shell";

type EventDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return eventDetails.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = eventDetails.find((entry) => entry.slug === slug);

  if (!item) {
    return {
      title: "活动不存在",
    };
  }

  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { slug } = await params;
  const item = eventDetails.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return <DetailPage content={item} />;
}
