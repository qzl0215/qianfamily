import { ClosingSection } from "@/components/sections/ClosingSection";
import { CoreSections } from "@/components/sections/CoreSections";
import { HeroSection } from "@/components/sections/HeroSection";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { TimelineSection } from "@/components/sections/TimelineSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PositioningSection />
      <CoreSections />
      <TimelineSection />
      <ClosingSection />
    </>
  );
}
