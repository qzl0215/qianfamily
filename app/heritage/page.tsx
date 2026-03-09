import { CardSection } from "@/components/portal/CardSection";
import { PageHero } from "@/components/portal/PageHero";
import { storyCards, cultureHighlightCards, heritageOverviewFacts } from "@/lib/portal-content";

export default function HeritagePage() {
  return (
    <>
      <PageHero
        eyebrow="文化传承"
        title="把钱氏家风家训、历史与人物收回一个总频道"
        lead="文化传承回答的是认同问题，而不是办事问题。"
        summary="这个频道吸纳家风家训、吴越历史、近代人物和族人故事四条内容线，作为宗亲门户的认知底板。它让族人在进入寻根、活动和礼品之前，先知道自己为何与这个家族相连。"
        chips={["文化认同", "总频道", "公开浏览"]}
        facts={heritageOverviewFacts}
        primaryAction={{ href: "/heritage/jiafeng-jiaxun/", label: "先读家风家训" }}
        secondaryAction={{ href: "/heritage/wuyue/", label: "再看吴越历史" }}
        asideBody="文化传承不再拆成多个顶层导航，而是以一个总频道承载家训、历史、人物和故事。"
      />

      <CardSection
        eyebrow="专题入口"
        title="先用三条主线立住认知，再把真实故事补进来"
        description="家风家训、吴越历史和近代人物是稳定的三条主线，族人故事则承接寻根、活动和现实参与后的内容回流。"
        cards={cultureHighlightCards}
        columns="4"
        muted
      />

      <CardSection
        eyebrow="内容回流"
        title="让族人故事成为持续更新的公共内容"
        description="故事栏目既承接文化频道，也与家谱中心和活动系统联动。它让网站不只是读资料，而是持续沉淀现实参与后的真实经验。"
        cards={storyCards}
        columns="3"
      />
    </>
  );
}
