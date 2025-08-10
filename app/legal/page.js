import Image from "next/image";

import SectionTitle from "@/components/ui/Section-title";
import QuicklinksSection from "@/components/general/Quicklinks-section";
import TextLink from "@/components/ui/Text-link";

import scalesImg from "@/public/images/graphics/sections/legal.png";

import { legalQuicklinks } from "@/data/quicklinks";

export const metadata = {
  title: "Legal Information | Relayable",
  description:
    "Find links and information about Relayable's legal policies, including terms of service, privacy policy, and more.",
};

const LegalPage = () => {
  return (
    <div className="p-4">
      <SectionTitle>Legal Information and Policies</SectionTitle>
      <Image
        src={scalesImg}
        alt="scales img"
        className="h-32 w-auto mx-auto mb-4"
      />
      <p>
        This page outlines the legal information and policies related to our
        services. If there's something you can't find, please email us at{" "}
        <TextLink href="mailto:info@vincentcoraldean.com">
          info@vincentcoraldean.com
        </TextLink>
        .
      </p>
      <QuicklinksSection links={legalQuicklinks} />
    </div>
  );
};

export default LegalPage;
