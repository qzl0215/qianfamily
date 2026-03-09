import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";

const timelineItems = [
  {
    period: "晚唐五代",
    title: "乱世起身",
    description:
      "钱镠在动荡时代崛起，开启了钱氏真正进入历史核心的起点，也让后来的家风不只停留在家门之内。",
  },
  {
    period: "吴越时期",
    title: "吴越立国与保境安民",
    description:
      "吴越的价值不只在立国，更在重农桑、水利、民生与地方治理，这也是后世持续称道钱氏的重要原因。",
  },
  {
    period: "北宋之初",
    title: "纳土归宋",
    description:
      "以较和平的方式结束割据，使江南少经兵火。这不仅是政治事件，也是一种历史判断与价值取向。",
  },
  {
    period: "宋以后至近现代",
    title: "精神延续至现代中国",
    description:
      "家训与人物相互印证，让这条精神线从家门之内走向教育、科学与公共文化，完成更长时段的回响。",
  },
];

const timelineNotes = [
  {
    title: "不是单纯年表",
    description: "四个节点的意义，在于帮助你理解价值如何一步步被历史塑形。",
  },
  {
    title: "不是碎片轶事",
    description: "把家训、吴越、人物放回这条线索里，阅读会更有整体感。",
  },
];

export function TimelineSection() {
  return (
    <section className="page-section" id="timeline">
      <Container>
        <div className="soft-panel soft-panel-muted">
          <div className="grid gap-10 lg:grid-cols-[minmax(260px,0.68fr)_minmax(0,1fr)]">
            <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="历史线索"
                title="四个历史节点，看见钱氏如何进入中国历史"
                description={
                  <p>
                    把精神放回时代，才知道这些价值为何不是空泛格言，而是长期被历史验证的判断与选择。
                  </p>
                }
              />

              <div className="lead-quote">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  一条线索
                </p>
                <p className="mt-4 font-serif-cn text-[1.6rem] leading-9 text-ink">
                  从钱镠起身，到吴越立国，
                  <br />
                  再到近现代回响，
                  <br />
                  看钱氏精神如何成形。
                </p>
                <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                  历史不是附录，而是帮助读者理解钱氏家训何以被反复传承的重要背景。
                </p>
              </div>

              <div className="stack-list">
                {timelineNotes.map((item) => (
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

            <div className="relative space-y-8 before:absolute before:left-[13px] before:top-3 before:h-[calc(100%-2.5rem)] before:w-px before:bg-line sm:before:left-3.5">
              {timelineItems.map((item) => (
                <TimelineItem
                  key={item.title}
                  period={item.period}
                  title={item.title}
                >
                  <p>{item.description}</p>
                </TimelineItem>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
