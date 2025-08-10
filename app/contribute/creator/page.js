import { CreatorCtxProvider } from "@/store/CreatorContext";

import SectionTitle from "@/components/ui/Section-title";
import CreatorForm from "@/components/contribute/creator/Creator-form";

export const metadata = {
  title: "Guide Creator | Relayable",
  description:
    "Use our guide creator tool to create your own interactive guides on Relayable.",
};

const GuideCreator = () => {
  return (
    <>
      <CreatorCtxProvider>
        <SectionTitle>Customisable Guide Creator Tool</SectionTitle>
        <CreatorForm />
      </CreatorCtxProvider>
    </>
  );
};

export default GuideCreator;
