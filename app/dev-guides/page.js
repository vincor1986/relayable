import { notFound } from "next/navigation";

import SearchResultSection from "@/components/guides/SearchResultList";
import SectionTitle from "@/components/ui/Section-title";
import { fetchAllGuides } from "@/actions/guides";

export const metadata = {
  title: "Developer Access Guides | Relayable",
  description:
    "Find access guides for over 100 platforms and resources, with detailed explanations of any variables required.",
};

export const revalidate = 600;

const DevGuidesOverview = async () => {
  const [guides, error] = await fetchAllGuides("approved");

  if (error || !guides || guides.length === 0) {
    notFound();
  }

  return (
    <section className="p-4">
      <SectionTitle>Developer Access Guides</SectionTitle>
      <SearchResultSection guides={guides} hrefStart="/dev-guides" />
    </section>
  );
};

export default DevGuidesOverview;
