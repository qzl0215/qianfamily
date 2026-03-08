import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function TimelineSection() {
  return (
    <section className="page-section" id="timeline">
      <Container>
        <div className="soft-panel">
          <SectionHeading
            eyebrow="时间线总览"
            title="从乱世开端到现代回响"
            description={
              <p>
                首页只给一条简明总览，帮助用户先看见这条精神线如何跨越千年延续，而不被大量史料细节打断。
              </p>
            }
          />

          <div className="relative mt-10 space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-line sm:before:left-3">
            <TimelineItem period="晚唐五代" title="钱镠起于乱世，开创吴越">
              <p>
                从晚唐五代的剧烈动荡中起身，钱镠不只是一个地方人物，而是决定了两浙与杭州走向的重要开端。
              </p>
            </TimelineItem>
            <TimelineItem period="吴越时期" title="保境安民，重视民生">
              <p>
                吴越的历史价值，常被落在保境安民、重视农桑水利与百姓生计上。这条判断，也成为后人理解钱氏精神的重要入口。
              </p>
            </TimelineItem>
            <TimelineItem period="纳土归宋" title="以和平方式结束割据">
              <p>
                到钱弘俶纳土归宋时，历史叙事的核心不是强弱之争，而是尽力避免江南再陷兵戈，以相对和平的方式完成转折。
              </p>
            </TimelineItem>
            <TimelineItem period="后世传承" title="钱氏家训不断整理、流传、践行">
              <p>
                家训并不是悬在空中的名句集合，而是在代际传承中不断被整理、阐释与实践，形成稳定的家族教育传统。
              </p>
            </TimelineItem>
            <TimelineItem period="近现代" title="钱氏人物在科学、教育、文化等领域继续发光">
              <p>
                到近现代，这条精神线并未中断，而是进入科学、教育、文化等更现代的公共场域，成为可以被看见的现实贡献。
              </p>
            </TimelineItem>
          </div>
        </div>
      </Container>
    </section>
  );
}
