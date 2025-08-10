import ContributeHeaderSection from "@/components/contribute/Contribute-header-section";
import QuicklinksSection from "@/components/general/Quicklinks-section";
import SectionTitle from "@/components/ui/Section-title";

import { contributeQuicklinks as quicklinks } from "@/data/quicklinks";

export const metadata = {
  title: "Contribute | Relayable",
  description:
    "Learn how you can contribute to Relayable and share your knowledge.",
};

const ContributePage = () => {
  const qL = quicklinks.filter((link) => link.href !== "/contribute");

  return (
    <>
      <SectionTitle>Contribute a How-To Guide</SectionTitle>
      <div className="flex flex-col md:flex-row">
        <QuicklinksSection links={qL} />
        <ContributeHeaderSection />
      </div>
    </>
  );
};

export default ContributePage;
