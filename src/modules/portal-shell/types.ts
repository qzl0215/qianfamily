export type PortalFact = {
  label: string;
  value: string;
};

export type PortalAction = {
  title: string;
  href: string;
  summary: string;
  note: string;
  status?: string;
};

export type HomeDecisionCard = {
  title: string;
  href: string;
  summary: string;
  effortHint: string;
  outcomeHint: string;
  nextStep: string;
  actionLabel: string;
};

export type PortalCard = {
  title: string;
  href: string;
  summary: string;
  eyebrow?: string;
  meta?: string;
  actionLabel?: string;
  tags?: string[];
};

export type PortalRole = {
  role: string;
  scope: string;
  description: string;
};

export type WorkflowStep = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type WorkflowPageContent = {
  eyebrow: string;
  title: string;
  lead: string;
  summary: string;
  chips?: string[];
  facts: PortalFact[];
  steps: WorkflowStep[];
  checklist: string[];
  faq: FaqItem[];
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  note: string;
};

export type DetailPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  summary: string;
  chips?: string[];
  facts: PortalFact[];
  highlights: WorkflowStep[];
  checklist: string[];
  faq: FaqItem[];
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  note: string;
};
