import { TopicCard } from "@/components/ui/TopicCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { topicRoutes, type TopicSlug } from "@/lib/topic-routes";

const topicContent: Record<
  TopicSlug,
  { eyebrow: string; actionText: string; paragraphs: string[] }
> = {
  jiaxun: {
    eyebrow: "专题一",
    actionText: "查看专题",
    paragraphs: [
      "从导读版进入钱氏家训，不先堆全文，而是先理解它为什么会被反复传承与引用。",
      "这一页会把善事国家、重德修身、崇文尚学这条价值线讲清楚，让首页的精神主轴先站稳。",
    ],
  },
  wuyue: {
    eyebrow: "专题二",
    actionText: "查看专题",
    paragraphs: [
      "从钱镠起于乱世讲到吴越立国，再到纳土归宋，用一条清晰时间线代替碎片化史实堆砌。",
      "重点不是百科，而是理解保境安民、重视民生、避免战火为何成为这段历史的核心判断。",
    ],
  },
  figures: {
    eyebrow: "专题三",
    actionText: "查看专题",
    paragraphs: [
      "近代人物页不追求名单堆砌，而是选取代表人物，解释他们如何把家训中的担当、学问与底线带入现代中国。",
      "这会成为精神主线在现代语境中的落脚点，也为后续扩展更多人物留下空间。",
    ],
  },
};

export function CoreSections() {
  return (
    <section className="page-section" id="core-topics">
      <Container>
        <SectionHeading
          eyebrow="三大核心入口"
          title="先把三条主线摆在眼前"
          description={
            <p>
              首页不试图替代内容页，而是用三个明确入口告诉用户，这个站先讲什么、为什么这样讲，以及后续会往哪里展开。
            </p>
          }
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {topicRoutes.map((topic) => {
            const content = topicContent[topic.slug];

            return (
              <TopicCard
                key={topic.slug}
                eyebrow={content.eyebrow}
                title={topic.title}
                href={topic.href}
                actionText={content.actionText}
                statusText="专题建设中"
              >
                <>
                  <p>{content.paragraphs[0]}</p>
                  <p>{content.paragraphs[1]}</p>
                </>
              </TopicCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
