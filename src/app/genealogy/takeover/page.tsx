import { genealogyTakeoverContent } from "@/modules/genealogy";
import { WorkflowPage } from "@/modules/portal-shell";

export default function GenealogyTakeoverPage() {
  return <WorkflowPage content={genealogyTakeoverContent} />;
}
