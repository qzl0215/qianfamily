import { genealogyFindRootsContent } from "@/modules/genealogy";
import { WorkflowPage } from "@/modules/portal-shell";

export default function GenealogyFindRootsPage() {
  return <WorkflowPage content={genealogyFindRootsContent} />;
}
