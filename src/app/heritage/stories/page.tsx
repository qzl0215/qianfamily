import { storyCards } from "@/modules/heritage";
import { CardSection, PageHero } from "@/modules/portal-shell";

export default function HeritageStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="文化传承"
        title="族人故事"
        lead="把寻根经历、迁徙记忆和当代参与留下来。"
        summary="如果你想看真实的人和真实经历，就从这里进入。"
        chips={["族人故事", "迁徙记忆", "真实经历"]}
        facts={[
          { label: "最常见内容", value: "迁徙、寻根、当代参与" },
          { label: "来源", value: "寻根、活动、口述、支派协作" },
          { label: "阅读建议", value: "先看与你最接近的经历" },
        ]}
        primaryAction={{ href: "/heritage/", label: "返回文化传承" }}
        secondaryAction={{ href: "/genealogy/find-roots/", label: "了解寻根入口" }}
        asideBody="先看迁徙、寻根和参与三类故事。"
      />

      <CardSection
        eyebrow="栏目方向"
        title="先看这三类故事"
        description="从迁徙、寻根和当代参与了解家族如何延续。"
        cards={storyCards}
        columns="3"
        muted
      />
    </>
  );
}
