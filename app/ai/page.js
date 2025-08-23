"use client";

import { useState, useEffect } from "react";

import SectionTitle from "@/components/ui/Section-title";

import { getAIGeneratedGuides } from "@/actions/guides";
import useAIGenerated from "@/hooks/useAIGenerated";
import useNotificationCtx from "@/store/useNotificationCtx";
import SectionHeading from "@/components/ui/Section-heading";
import TextLink from "@/components/ui/Text-link";
import SearchResultSection from "@/components/guides/SearchResultList";

const AIOverviewPage = () => {
  const [loading, setLoading] = useState(true);
  const [guides, setGuides] = useState([]);

  const { notifyUser } = useNotificationCtx();
  const { guideIds } = useAIGenerated();

  useEffect(() => {
    getAIGeneratedGuides(guideIds).then(([guides, error]) => {
      if (error) {
        notifyUser(
          "warning",
          "Failed to fetch guides. Please try again later."
        );
        setLoading(false);
      } else {
        setGuides(guides);
        setLoading(false);
      }
    });
  }, [guideIds]);

  return (
    <section className="p-4">
      <SectionTitle>Your AI Generated Guides</SectionTitle>
      <SectionHeading>Generate a new guide</SectionHeading>
      <p className="w-full font-navy text-center">
        Create a new interactive guide using Relayable AI{" "}
        <TextLink href="/ai-generated/create">here</TextLink>
      </p>
      <SectionHeading>Your existing AI guides</SectionHeading>
      {loading ? (
        <p className="w-full text-center">Loading...</p>
      ) : guides.length > 0 ? (
        <SearchResultSection guides={guides} hrefStart="/ai" />
      ) : (
        <p className="w-full text-center">
          You currently have no AI generated guides.
        </p>
      )}
    </section>
  );
};

export default AIOverviewPage;
