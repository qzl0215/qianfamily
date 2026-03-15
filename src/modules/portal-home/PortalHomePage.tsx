import { HomeAnnouncementsSection } from "./sections/HomeAnnouncementsSection";
import { HomeCultureGiftsSection } from "./sections/HomeCultureGiftsSection";
import { HomeDecisionJourneySection } from "./sections/HomeDecisionJourneySection";
import { HomeGenealogyEventsSection } from "./sections/HomeGenealogyEventsSection";
import { HomeHeroSection } from "./sections/HomeHeroSection";
import { HomeNarrativeSection } from "./sections/HomeNarrativeSection";

export function PortalHomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeDecisionJourneySection />
      <HomeNarrativeSection />
      <HomeGenealogyEventsSection />
      <HomeCultureGiftsSection />
      <HomeAnnouncementsSection />
    </>
  );
}
