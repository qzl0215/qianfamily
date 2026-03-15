"use client";

import { useMemo, useState } from "react";

import type { JiaxunCaseFilter, JiaxunQuoteCaseBlock } from "./content";

type CaseFilterValue = "all" | JiaxunCaseFilter;

const filterOptions: { value: CaseFilterValue; label: string; helper: string }[] = [
  { value: "all", label: "全部案例", helper: "先通览全部案例" },
  { value: "修身", label: "我想看修身", helper: "先看自持与做事分寸" },
  { value: "治家", label: "我想看治家", helper: "先看家风与代际责任" },
  { value: "报国", label: "我想看报国", helper: "先看家国担当与行动" },
];

type QuoteCaseSectionProps = {
  blocks: JiaxunQuoteCaseBlock[];
};

export function QuoteCaseSection({ blocks }: QuoteCaseSectionProps) {
  const [activeFilter, setActiveFilter] = useState<CaseFilterValue>("all");

  const filteredBlocks = useMemo(() => {
    if (activeFilter === "all") return blocks;
    return blocks.filter((block) => block.focus.includes(activeFilter));
  }, [activeFilter, blocks]);

  return (
    <>
      <div className="mt-8 rounded-[1.6rem] border border-line/70 bg-white/[0.34] p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
          按问题筛选
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {filterOptions.map((option) => {
            const isActive = option.value === activeFilter;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setActiveFilter(option.value)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-accent/40 bg-accent-soft text-accent"
                    : "border-accent/12 bg-white/50 text-accent hover:border-accent/30"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs leading-6 text-muted">
          {
            filterOptions.find((option) => option.value === activeFilter)?.helper
          }，当前显示 {filteredBlocks.length} 组案例。
        </p>
      </div>

      <div className="mt-6 space-y-6">
        {filteredBlocks.map((block, index) => {
          const isReversed = index % 2 === 1;

          return (
            <article key={block.id} className="surface-card">
              <div
                className={`grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)] lg:items-center${
                  isReversed ? " lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="space-y-3">
                  <img
                    src={block.imageSrc}
                    alt={block.imageAlt}
                    className="h-[260px] w-full rounded-[1.85rem] border border-line/70 object-cover sm:h-[320px]"
                  />
                  <p className="text-xs leading-6 text-muted">{block.imageCaption}</p>
                </div>

                <div className="space-y-5">
                  <p className="eyebrow">{block.theme}</p>
                  <div className="flex flex-wrap gap-2.5 text-sm text-accent">
                    <span className="rounded-full border border-accent/10 bg-white/50 px-4 py-2">
                      对应篇章：{block.chapter}
                    </span>
                    {block.focus.map((focusItem) => (
                      <span
                        key={`${block.id}-${focusItem}`}
                        className="rounded-full border border-accent/20 bg-accent-soft px-4 py-2 text-accent"
                      >
                        {focusItem}
                      </span>
                    ))}
                    {block.caseTags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`rounded-full border border-accent/10 bg-white/50 px-4 py-2 ${
                          tagIndex > 1 ? "hidden sm:inline-flex" : ""
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <blockquote className="rounded-[1.85rem] border border-line/70 bg-white/[0.38] px-6 py-6">
                    <div className="space-y-3">
                      {block.quote.split("\n\n").map((line) => (
                        <p
                          key={line}
                          className="font-serif-cn text-[1.6rem] leading-9 text-ink sm:text-[1.82rem]"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </blockquote>
                  <p className="text-[0.99rem] leading-8 text-muted">{block.explanation}</p>
                  <div className="rounded-[1.75rem] border border-line/75 bg-white/[0.34] p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                      族人案例
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <h3 className="font-serif-cn text-[1.45rem] leading-tight text-ink">
                        {block.casePerson}
                      </h3>
                      <span className="rounded-full border border-accent/10 bg-accent-soft px-3 py-1 text-xs tracking-[0.14em] text-accent">
                        {block.caseEra}
                      </span>
                    </div>
                    <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                      {block.caseSummary}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
