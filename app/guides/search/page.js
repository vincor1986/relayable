import { Suspense } from "react";

import LoadingModal from "@/components/ui/Loading-modal";
import SectionTitle from "@/components/ui/Section-title";
import Search from "@/components/guides/Search";

export const metadata = {
  title: "Search Guides | Relayable",
  description:
    "Search through our interactive guides covering 100+ web service platforms to find the step-by-step instructions for you or your clients.",
};

const GuideSearch = () => {
  return (
    <section className="p-4">
      <SectionTitle>Search our guides</SectionTitle>
      <Suspense
        fallback={<LoadingModal isLoading={true} message="Loading search..." />}
      >
        <Search />
      </Suspense>
    </section>
  );
};

export default GuideSearch;
