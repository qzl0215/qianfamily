import { announcementCards } from "./content";

type FocusContext = {
  audience: string;
  duration: string;
  outcome: string;
  summary: string;
};

const focusByRoute: Record<string, FocusContext> = {
  "/genealogy/": {
    audience: "已有家谱线索的族人",
    duration: "预计 8-12 分钟",
    outcome: "可见产出：形成可提交的寻根资料清单",
    summary: "先完成家谱中心的提交前准备，再进入寻根提交，能减少反复补充。",
  },
  "/heritage/jiafeng-jiaxun/": {
    audience: "首次来站与青年族人",
    duration: "预计 10 分钟",
    outcome: "可见产出：确认文化认同后的一步寻根动作",
    summary: "先读家训导读，再进入寻根入口，能更稳地建立“认同到行动”的路径。",
  },
  "/events/upcoming/": {
    audience: "想参与线下活动的族人",
    duration: "预计 5-8 分钟",
    outcome: "可见产出：锁定一场可报名的近期活动",
    summary: "先看活动说明与关键时间点，再报名参与，可避免流程遗漏。",
  },
};

const fallbackFocus: FocusContext = {
  audience: "首次来站访客",
  duration: "预计 8-10 分钟",
  outcome: "可见产出：明确一条可执行的首访路径",
  summary: "先完成文化导读，再进入家谱寻根，通常是最稳妥的起步顺序。",
};

export function getLatestUpdates(limit = 3) {
  return announcementCards.slice(0, limit);
}

export function getWeeklyFocus() {
  const latestUpdates = getLatestUpdates();
  const topUpdate = latestUpdates[0];
  const focusContext = topUpdate
    ? (focusByRoute[topUpdate.href] ?? fallbackFocus)
    : fallbackFocus;

  return {
    title: "本周推荐先做一步",
    summary: focusContext.summary,
    reason: `适合人群：${focusContext.audience} · ${focusContext.duration}`,
    outcome: focusContext.outcome,
    href: topUpdate?.href ?? "/heritage/",
    actionLabel: topUpdate?.actionLabel ?? "先走这一步",
  };
}
