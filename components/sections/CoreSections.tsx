import { TopicCard } from "@/components/ui/TopicCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { topicRoutes, type TopicSlug } from "@/lib/topic-routes";

const orderedSlugs: TopicSlug[] = ["jiaxun", "wuyue", "figures"];

const topicContent: Record<
  TopicSlug,
  {
    eyebrow: string;
    actionText: string;
    whyStart: string;
    description: string;
    tags: string[];
  }
> = {
  jiaxun: {
    eyebrow: "家训精神",
    actionText: "进入家训专题",
    description:
      "先从家训读懂钱氏精神，把善事国家、重德修身、崇文尚学放回真实的文化脉络。",
    whyStart:
      "如果你第一次进入钱氏传统，这里最适合作为起点，因为它先回答“钱氏为什么值得被反复谈起”。",
    tags: ["家风", "修身"],
  },
  wuyue: {
    eyebrow: "历史脉络",
    actionText: "进入历史专题",
    description:
      "从钱王到吴越，看家族如何在历史转折中抉择、发展，并把价值落实为现实治理。",
    whyStart:
      "想知道家训不是空话，而是怎样进入战争、治理和归宋这些重大抉择，就从这里进入。",
    tags: ["吴越", "保境安民"],
  },
  figures: {
    eyebrow: "现代回响",
    actionText: "进入人物专题",
    description:
      "从近现代人物的行动与贡献，看钱氏精神如何进入现代中国的科学、教育与公共文化。",
    whyStart:
      "如果你更关心精神如何走到近现代现实，这里会把“传统”转化成可感的时代回响。",
    tags: ["人物", "现代中国"],
  },
};

const readerGuides = [
  {
    title: "第一次来到站点",
    description: "先读家训，最快建立对钱氏精神的整体认识。",
  },
  {
    title: "想把价值放回历史",
    description: "进入吴越专题，看关键判断怎样塑造家风与家族声望。",
  },
  {
    title: "想看现代回响",
    description: "进入人物专题，从现代中国的真实行动去理解钱氏延续。",
  },
];

export function CoreSections() {
  const topics = orderedSlugs
    .map((slug) => topicRoutes.find((topic) => topic.slug === slug))
    .filter((topic): topic is NonNullable<typeof topic> => Boolean(topic));
  const [featuredTopic, ...secondaryTopics] = topics;

  return (
    <section className="page-section" id="core-topics">
      <Container>
        <SectionHeading
          eyebrow="三条主线入口"
          title="从精神、历史与人物进入钱氏传统"
          description={
            <p>
              首页负责建立认知，进入这里开始专题阅读。三个入口不是并列信息堆叠，而是三种不同的阅读重心。
            </p>
          }
        />

        <div className="mt-6 quiet-rule" />

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          {featuredTopic ? (
            <TopicCard
              eyebrow={topicContent[featuredTopic.slug].eyebrow}
              title={featuredTopic.title}
              href={featuredTopic.href}
              actionText={topicContent[featuredTopic.slug].actionText}
              className="topic-card-featured"
              statusText="推荐起点"
            >
              <>
                <p>{topicContent[featuredTopic.slug].description}</p>
                <div className="lead-quote mt-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                    为什么从这里开始
                  </p>
                  <p className="mt-3 text-[0.98rem] leading-8 text-ink-soft">
                    {topicContent[featuredTopic.slug].whyStart}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 text-sm text-accent">
                  {topicContent[featuredTopic.slug].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-accent/10 bg-white/50 px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            </TopicCard>
          ) : null}

          <div className="topic-stack">
            {secondaryTopics.map((topic) => {
              const content = topicContent[topic.slug];

              return (
                <TopicCard
                  key={topic.slug}
                  eyebrow={content.eyebrow}
                  title={topic.title}
                  href={topic.href}
                  actionText={content.actionText}
                  className="topic-card-subtle"
                >
                  <>
                    <p>{content.description}</p>
                    <p className="text-[0.96rem] leading-8 text-ink-soft">
                      {content.whyStart}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2 text-sm text-accent">
                      {content.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-accent/10 bg-white/50 px-3 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                </TopicCard>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(260px,0.82fr)_minmax(0,1.18fr)]">
          <div className="lead-quote">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
              进入建议
            </p>
            <p className="mt-4 font-serif-cn text-[1.55rem] leading-9 text-ink">
              如果只能从一个入口开始，
              <br />
              建议先读家训。
            </p>
            <p className="mt-4 text-[0.98rem] leading-8 text-muted">
              家训最像一把钥匙。它先把价值尺度交给你，再去看历史与人物时，很多材料会自然连起来。
            </p>
          </div>

          <div className="stack-list">
            {readerGuides.map((item) => (
              <div key={item.title} className="stack-list-item">
                <h3 className="font-serif-cn text-[1.2rem] leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="text-[0.96rem] leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
