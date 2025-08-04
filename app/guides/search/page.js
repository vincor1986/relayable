import { Suspense } from "react";

import LoadingModal from "@/components/ui/Loading-modal";
import SectionTitle from "@/components/ui/Section-title";
import Search from "@/components/guides/Search";

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
