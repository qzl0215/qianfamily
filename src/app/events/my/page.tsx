import { eventsMyContent } from "@/modules/events";
import { WorkflowPage } from "@/modules/portal-shell";

export default function EventsMyPage() {
  return <WorkflowPage content={eventsMyContent} />;
}
