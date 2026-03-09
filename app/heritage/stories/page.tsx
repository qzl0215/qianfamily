import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import { storyCards } from "@/lib/portal-content";

export default function HeritageStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="文化传承"
        title="族人故事"
        lead="把寻根经历、迁徙记忆和当代参与沉淀为站内可持续更新的内容。"
        summary="故事栏目不是单纯的投稿区，而是宗亲门户中的内容回流入口。它把寻根、活动、家训共读和现实参与重新转化为公共记忆，补强文化频道的厚度。"
        chips={["内容回流", "口述与迁徙", "持续更新"]}
        facts={[
          { label: "栏目定位", value: "文化频道中的真实经验入口" },
          { label: "来源", value: "寻根、活动、口述、支派协作" },
          { label: "当前阶段", value: "结构先行，内容逐步沉淀" },
        ]}
        primaryAction={{ href: "/heritage/", label: "返回文化传承" }}
        secondaryAction={{ href: "/genealogy/find-roots/", label: "了解寻根入口" }}
        asideBody="故事栏目会与家谱中心和活动系统联动，让宗亲门户逐步形成真实的内容沉淀能力。"
      />

      <CardSection
        eyebrow="栏目方向"
        title="三类故事，承接整站的内容回流"
        description="未来这一栏会持续增加真实案例。当前先把栏目逻辑、来源和与其他频道的关系搭稳。"
        cards={storyCards}
        columns="3"
        muted
      />
    </>
  );
}
