import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const positioningCards = [
  {
    index: "一",
    title: "先看家训，知道钱氏重什么",
    description:
      "家训最集中地回答了钱氏认同什么价值，是理解这个家族精神气质的第一把钥匙。",
  },
  {
    index: "二",
    title: "再看历史，理解价值如何被实践",
    description:
      "吴越历史把抽象理念落到真实选择里，看见钱氏如何在时代之中做判断。",
  },
  {
    index: "三",
    title: "最后看人物，确认精神如何延续",
    description:
      "近现代人物让这条精神线不止停留在纸面，而是在教育、科学与公共文化中继续发声。",
  },
];

const positioningBenefits = [
  {
    title: "适合初识",
    description: "第一次来到站点，也能迅速知道先看哪里、为什么这样看。",
  },
  {
    title: "适合导读",
    description: "首页的进入顺序本身就可以承担课堂、展陈或文章导读的开场工作。",
  },
  {
    title: "适合深读",
    description: "带着价值尺度进入专题，历史与人物不再只是零散材料，而有了主轴。",
  },
];

export function PositioningSection() {
  return (
    <section className="page-section" id="why-start">
      <Container>
        <div className="soft-panel soft-panel-muted">
          <div className="grid gap-10 lg:grid-cols-[minmax(260px,0.82fr)_minmax(0,1.18fr)] lg:items-start">
            <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="导览逻辑"
                title="为什么首页先讲家训，再进入历史与人物"
                description={
                  <p>
                    首页不是把专题并列摆放，而是先让读者抓到价值尺度，再去理解历史判断与近现代回响。
                  </p>
                }
              />

              <div className="lead-quote">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  一句话理解
                </p>
                <p className="mt-4 font-serif-cn text-[1.6rem] leading-9 text-ink sm:text-[1.8rem]">
                  先看价值，再看选择；
                  <br />
                  先看尺度，再看成就。
                </p>
                <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                  这样读，家训不再像格言摘录，历史不只剩事件串联，人物也不只是名人列表。
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid gap-5 md:grid-cols-3">
                {positioningCards.map((card) => (
                  <article key={card.title} className="subtle-card">
                    <p className="topic-index">{card.index}</p>
                    <h3 className="mt-4 font-serif-cn text-[1.4rem] leading-tight text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[0.98rem] leading-8 text-muted">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="stack-list lg:grid lg:grid-cols-3">
                {positioningBenefits.map((item) => (
                  <div key={item.title} className="stack-list-item bg-white/[0.32]">
                    <h3 className="font-serif-cn text-[1.2rem] leading-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="text-[0.95rem] leading-7 text-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
