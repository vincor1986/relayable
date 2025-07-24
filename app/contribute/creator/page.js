"use client";

import { CreatorCtxProvider } from "@/store/CreatorContext";

import SectionTitle from "@/components/ui/Section-title";
import CreatorForm from "@/components/contribute/creator/Creator-form";

const GuideCreator = () => {
  return (
    <CreatorCtxProvider>
      <SectionTitle>Customisable Guide Creator Tool</SectionTitle>
      <CreatorForm />
    </CreatorCtxProvider>
  );
};

export default GuideCreator;
