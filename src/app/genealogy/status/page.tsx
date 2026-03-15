import { genealogyStatusContent } from "@/modules/genealogy";
import { WorkflowPage } from "@/modules/portal-shell";

export default function GenealogyStatusPage() {
  return <WorkflowPage content={genealogyStatusContent} />;
}
