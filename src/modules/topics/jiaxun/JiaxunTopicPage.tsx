import Link from "next/link";

import jiaxunIllustration from "@/app/materials/钱氏家训图解.jpg";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";

import {
  chapterBlocks,
  formationSteps,
  heroFacts,
  jiaxunPageMeta,
  quoteCaseBlocks,
  shanghaiDetails,
  sourceLinks,
  transmissionBlocks,
  valueBlocks,
} from "./content";

import { QuoteCaseSection } from "./QuoteCaseSection";

const anchorItems = [
  { href: "#overview", label: "概述" },
  { href: "#values", label: "三大价值" },
  { href: "#formation", label: "形成过程" },
  { href: "#structure", label: "四篇结构" },
  { href: "#cases", label: "原句案例" },
  { href: "#shanghai", label: "上海传承" },
] as const;

const totalQuoteCount = quoteCaseBlocks.reduce(
  (count, block) => count + block.quote.split("\n\n").length,
  0,
);

export function JiaxunTopicPage() {
  return (
    <>
      <section className="page-section pb-10 pt-10 sm:pt-14 lg:pt-16" id="overview">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-stretch">
            <div className="surface-card bg-[linear-gradient(145deg,rgba(251,248,242,0.96),rgba(232,221,209,0.68))]">
              <div className="max-w-4xl space-y-7">
                <span className="hero-kicker">用户导读专题页</span>
                <div className="space-y-5">
                  <p className="ornament-line">钱氏家训专题</p>
                  <h1 className="font-serif-cn text-[3rem] leading-[1.06] text-ink sm:text-[4rem] lg:text-[4.9rem]">
                    {jiaxunPageMeta.title}
                  </h1>
                </div>
                <p className="hero-deck">
                  第一次读钱氏家训，先看核心原句、再看人物案例，会更容易读懂。
                </p>
                <p className="hero-summary">
                  这页把钱氏家训拆成“核心价值、四篇结构、原句案例、上海传承”四段。你可以先快速理解它讲什么，再判断哪些内容与你的现实生活和家族参与最相关。
                </p>
                <div className="flex flex-wrap gap-2.5 text-sm text-accent">
                  <span className="rounded-full border border-accent/10 bg-white/50 px-4 py-2">
                    善事国家
                  </span>
                  <span className="rounded-full border border-accent/10 bg-white/50 px-4 py-2">
                    重德修身
                  </span>
                  <span className="rounded-full border border-accent/10 bg-white/50 px-4 py-2">
                    崇文尚学
                  </span>
                </div>
                <div className="rounded-[1.85rem] border border-line/70 bg-white/40 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                    阅读提示
                  </p>
                  <p className="mt-3 font-serif-cn text-[1.28rem] leading-8 text-ink sm:text-[1.42rem]">
                    先读 12 条核心原句，再看 5 组人物案例。
                  </p>
                  <p className="mt-3 text-[0.98rem] leading-8 text-muted">
                    先抓住家训的四个层次，再把原句放回历史人物与现代场景中理解，会更容易形成可执行的判断。
                  </p>
                </div>
                <div className="editorial-band grid gap-0 sm:grid-cols-3">
                  <div className="editorial-band-item">
                    <p className="eyebrow">阅读长度</p>
                    <p className="mt-3 font-serif-cn text-[1.5rem] leading-8 text-ink">
                      约 6 分钟
                    </p>
                  </div>
                  <div className="editorial-band-item">
                    <p className="eyebrow">原句总数</p>
                    <p className="mt-3 font-serif-cn text-[1.5rem] leading-8 text-ink">
                      {totalQuoteCount} 条
                    </p>
                  </div>
                  <div className="editorial-band-item">
                    <p className="eyebrow">案例总数</p>
                    <p className="mt-3 font-serif-cn text-[1.5rem] leading-8 text-ink">
                      {quoteCaseBlocks.length} 组
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-1">
                  <ButtonLink href="#cases">先看原句与案例</ButtonLink>
                  <ButtonLink href="#structure" variant="secondary">
                    看四篇结构
                  </ButtonLink>
                </div>
              </div>
            </div>

            <aside className="surface-card hero-side-panel lg:p-7">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="ornament-line">图解导读</p>
                  <figure className="overflow-hidden rounded-[1.9rem] border border-line/75 bg-white/[0.42] p-2 shadow-soft">
                    <div className="aspect-[1398/752] overflow-hidden rounded-[1.35rem] border border-line/60">
                      <img
                        src={jiaxunIllustration.src}
                        alt="钱氏家训图解，展示修身、齐家、治国、平天下与家训四篇结构之间的关系。"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="px-1 pt-3 text-xs leading-6 text-muted">
                      素材图：《钱氏家训》图解。用于首屏导读视觉，帮助读者先把修身、齐家、治国、平天下的总体关系看清。
                      <a
                        href={jiaxunIllustration.src}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-2 text-accent underline-offset-4 hover:underline"
                      >
                        查看原图
                      </a>
                    </figcaption>
                  </figure>
                </div>

                <p className="ornament-line">官方事实带</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {heroFacts.map((fact, index) => (
                    <div
                      key={fact.label}
                      className={`rounded-[1.4rem] border border-line/75 bg-white/[0.38] px-5 py-4 ${
                        index === 2 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                        {fact.label}
                      </p>
                      <p className="mt-2 font-serif-cn text-[1.22rem] leading-8 text-ink">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[1.55rem] border border-line/75 bg-white/[0.34] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                    你读完会得到
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    你会明确三件事：钱氏家训的核心价值、它在历史中的落点、以及下一步该去哪个专题继续深读。
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <nav className="sticky top-[92px] z-30 rounded-full border border-line/75 bg-paper/90 px-3 py-3 backdrop-blur-md sm:px-4">
            <div className="no-scrollbar flex items-center gap-x-5 overflow-x-auto whitespace-nowrap px-2 text-sm text-muted sm:justify-center">
              {anchorItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative py-1 transition hover:text-accent focus-visible:text-accent after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent/50 after:transition-[width] after:duration-150 hover:after:w-full focus-visible:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </Container>
      </section>

      <section className="page-section pt-8" id="values">
        <Container>
          <div className="soft-panel soft-panel-muted">
            <div className="space-y-4">
              <p className="ornament-line">为什么重要</p>
              <h2 className="section-title">三大价值，不止于一姓之家</h2>
              <p className="section-copy">
                官方介绍把钱氏家训家教的基本内容概括为“善事国家、重德修身、崇文尚学”。这三个关键词不是并列口号，而是从做人到治家的连续尺度。
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {valueBlocks.map((block) => (
                <article key={block.id} className="subtle-card">
                  <p className="eyebrow">核心价值</p>
                  <h3 className="mt-4 font-serif-cn text-[1.62rem] leading-tight text-ink">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                    {block.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section pt-2" id="formation">
        <Container>
          <div className="space-y-4">
            <p className="ornament-line">形成过程</p>
            <h2 className="section-title">它不是一篇突然出现的文字</h2>
            <p className="section-copy">
              钱氏家训不是一次写成、从此不动的文本。它从钱镠遗训出发，经过历代支派增补、谱牒整理和现代采辑，才形成今天通行的导读形态。
            </p>
          </div>

          <div className="editorial-band mt-10 grid gap-0 sm:grid-cols-2 xl:grid-cols-4">
            {formationSteps.map((step, index) => (
              <article key={step.id} className="editorial-band-item">
                <p className="editorial-number">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-4 eyebrow">形成节点</p>
                <p className="mt-3 font-serif-cn text-[1.15rem] leading-8 text-accent">
                  {step.period}
                </p>
                <h3 className="mt-2 font-serif-cn text-[1.48rem] leading-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-4 text-[0.97rem] leading-8 text-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="page-section" id="structure">
        <Container>
          <div className="space-y-4">
            <p className="ornament-line">四篇结构</p>
            <h2 className="section-title">先读结构，再读原句</h2>
            <p className="section-copy">
              当下流传版本常被概括为个人、家庭、社会、国家四个篇章。先把结构看清，后面的原句与人物案例就更容易对上它真正关心的层次。
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {chapterBlocks.map((chapter) => (
              <article key={chapter.id} className="surface-card">
                <img
                  src={chapter.imageSrc}
                  alt={chapter.imageAlt}
                  className="h-[220px] w-full rounded-[1.75rem] border border-line/70 object-cover"
                />
                <p className="mt-3 text-xs leading-6 text-muted">{chapter.imageCaption}</p>
                <div className="mt-6 space-y-4">
                  <p className="eyebrow">章节导读</p>
                  <h3 className="font-serif-cn text-[1.85rem] leading-tight text-ink">
                    {chapter.title}
                  </h3>
                  <p className="text-[0.98rem] leading-8 text-muted">
                    {chapter.summary}
                  </p>
                  <div className="flex flex-wrap gap-2.5 pt-1 text-sm text-accent">
                    {chapter.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-accent/10 bg-white/50 px-4 py-2"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="page-section" id="cases">
        <Container>
          <div className="space-y-4">
            <p className="ornament-line">原句图解与族人案例</p>
            <h2 className="section-title">让原句落到可以看见的人和事</h2>
            <p className="section-copy">
              你可以在每组内容里同时看到原句、图解和人物案例，快速判断“这句家训在现实里是怎么做出来的”。
            </p>
            <div className="lead-quote max-w-4xl">
              <p className="text-sm leading-7 text-muted">
                版本说明：以下原句采用公开整理版本中的通行表述，用于导读和结构理解，不替代全文校勘或版本比对。
              </p>
            </div>
          </div>

          <QuoteCaseSection blocks={quoteCaseBlocks} />
        </Container>
      </section>

      <section className="page-section" id="shanghai">
        <Container>
          <div className="soft-panel">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
              <div className="space-y-5">
                <p className="ornament-line">上海传承</p>
                <h2 className="section-title">为什么钱氏家训在上海有明确抓手</h2>
                <p className="section-copy">
                  钱氏家训家教已经被列为国家级非遗扩展项目，所属地区为上海市，保护单位为上海市地方史志学会。这个事实决定了它不仅是钱氏族人的内部文本，也是一项具有明确地方文化落点的公共文化遗产。
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.55rem] border border-line/70 bg-white/[0.38] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                      国家级非遗
                    </p>
                    <p className="mt-3 font-serif-cn text-[1.3rem] leading-8 text-ink">
                      2021 年
                    </p>
                  </div>
                  <div className="rounded-[1.55rem] border border-line/70 bg-white/[0.38] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                      所属地区
                    </p>
                    <p className="mt-3 font-serif-cn text-[1.3rem] leading-8 text-ink">
                      上海市
                    </p>
                  </div>
                  <div className="rounded-[1.55rem] border border-line/70 bg-white/[0.38] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                      保护单位
                    </p>
                    <p className="mt-3 font-serif-cn text-[1.3rem] leading-8 text-ink">
                      上海市地方史志学会
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="eyebrow">今天如何传承</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {transmissionBlocks.map((block) => (
                      <article
                        key={block.id}
                        className="rounded-[1.55rem] border border-line/70 bg-white/[0.38] p-4"
                      >
                        <h3 className="font-serif-cn text-[1.2rem] leading-8 text-ink">
                          {block.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-muted">
                          {block.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <p className="eyebrow">为什么是上海</p>
                  <div className="mt-4 grid gap-4">
                    {shanghaiDetails.map((item) => (
                      <article
                        key={item.id}
                        className="rounded-[1.55rem] border border-line/70 bg-white/[0.38] p-4"
                      >
                        <h3 className="font-serif-cn text-[1.2rem] leading-8 text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-muted">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <img
                  src="/topics/jiaxun/shanghai-inheritance.svg"
                  alt="上海传承图板，展示钱氏家训家教与上海非遗保护之间的联系。"
                  className="h-[320px] w-full rounded-[1.85rem] border border-line/70 object-cover"
                />
                <p className="text-xs leading-6 text-muted">
                  传承图板：从国家级非遗扩展项目到上海地方保护单位，这条线把专题页的地方抓手明确下来。来源：站内专题图板。
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section pt-8">
        <Container>
          <div className="surface-card">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="space-y-5">
                <p className="ornament-line">参考来源</p>
                <h2 className="section-title">本页所依据的公开资料</h2>
                <div className="lead-quote max-w-4xl">
                  <p className="text-sm leading-7 text-muted">
                    资料说明：本页优先采用国家级非遗、地方政府、高校和科研机构公开资料，帮助你快速建立可靠的一手认知。
                  </p>
                </div>
                <div className="grid gap-4 xl:grid-cols-2">
                  {sourceLinks.map((source) => (
                    <div
                      key={source.href}
                      className="rounded-[1.45rem] border border-line/70 bg-white/[0.36] p-4"
                    >
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-accent underline-offset-4 hover:underline"
                      >
                        {source.label}
                      </a>
                      <p className="mt-2 text-sm leading-7 text-muted">{source.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-line/70 bg-white/[0.35] p-6 lg:sticky lg:top-28 lg:self-start">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
                  下一步
                </p>
                <p className="mt-4 font-serif-cn text-[1.35rem] leading-8 text-ink">
                  家训读完之后，继续进入吴越历史主线。
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  钱氏家训解释了这条精神线是什么，而“钱王与吴越”专题会继续回答它如何在历史中形成、为何被今天反复记忆。
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <ButtonLink href="/">返回首页</ButtonLink>
                  <ButtonLink href="/heritage/wuyue/" variant="secondary">
                    进入钱王与吴越
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
