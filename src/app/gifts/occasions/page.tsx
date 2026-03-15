import { giftOccasionCards } from "@/modules/gifts";
import { CardSection, PageHero } from "@/modules/portal-shell";

export default function GiftsOccasionsPage() {
  return (
    <>
      <PageHero
        eyebrow="宣传礼品"
        title="先按场景选礼品，不再盲目翻目录"
        lead="如果你还没确定买什么，这一页会先帮你在 30 秒内找到合适的使用场景。"
        summary="根据祭祖活动、家庭陈设和赠礼传播三类场景进入，再查看对应礼品详情，通常比直接浏览商品列表更高效。"
        chips={["活动场景", "家庭场景", "赠礼传播"]}
        facts={[
          { label: "你会得到", value: "每个场景的礼品建议与直达入口" },
          { label: "常见场景", value: "祭祖活动、家堂陈设、赠礼传播" },
          { label: "下一步", value: "进入详情页或总览确认规格" },
        ]}
        primaryAction={{ href: "/gifts/catalog/", label: "场景已明确，查看礼品总览" }}
        secondaryAction={{ href: "/gifts/", label: "返回礼品频道" }}
        asideTitle="先做这个判断"
        asideBody="先判断礼品将在哪个场景使用，再进入对应礼品详情；这样比直接看商品列表更省时间。"
      />

      <CardSection
        eyebrow="典型场景"
        title="三类场景，直接进入对应礼品"
        description="先确定你当前是活动使用、家庭陈设还是对外赠礼，再按场景选择礼品，决策会更快。"
        cards={giftOccasionCards}
        columns="3"
        muted
      />
    </>
  );
}
