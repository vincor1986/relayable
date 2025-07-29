import QuicklinksSection from "@/components/general/Quicklinks-section";
import SectionTitle from "@/components/ui/Section-title";
import InteractiveGuidesSection from "@/components/why-relayable/Interactive-guides";
import TimeSavingSection from "@/components/why-relayable/Time-saving-section";
import TrackingSection from "@/components/why-relayable/Tracking-section";
import TrustSection from "@/components/why-relayable/Trust-section";

import { whyRelayableQuicklinks } from "@/data/quicklinks";

const BenefitsPage = () => {
  return (
    <section className="p-4">
      <SectionTitle>Why Relayable?</SectionTitle>
      <div className="flex flex-col gap-2 md:flex-row md:gap-6">
        <QuicklinksSection links={whyRelayableQuicklinks} />
        <div>
          <InteractiveGuidesSection />
          <TimeSavingSection />
          <TrustSection />
          <TrackingSection />
        </div>
      </div>
    </section>
  );
};

export default BenefitsPage;
