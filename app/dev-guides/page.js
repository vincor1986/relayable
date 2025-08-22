import SearchResultSection from "@/components/guides/SearchResultList";
import SectionTitle from "@/components/ui/Section-title";
import { BASE_URL } from "@/util/URL";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Developer Access Guides | Relayable",
  description:
    "Find access guides for over 100 platforms and resources, with detailed explanations of any variables required.",
};

const DevGuidesOverview = async () => {
  const response = await fetch(BASE_URL + "/api/all-guides", {
    next: { revalidate: 600 },
  });

  const { data: guides } = await response.json();

  if (!guides || guides.length === 0) {
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
