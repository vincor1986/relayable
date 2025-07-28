"use client";

import { useState, useEffect, useMemo } from "react";

import SectionTitle from "@/components/ui/Section-title";
import GuideBadge from "@/components/guides/Guide-badge";
import VendorBadge from "@/components/contribute/creator/Vendor-badge";
import LoadingModal from "@/components/ui/Loading-modal";

import useFavourites from "@/hooks/useFavourites";
import { getGuidesByIds } from "@/actions/actions";

import ALL_VENDORS from "@/data/vendors";

const ShortcutsPage = () => {
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const { favourites } = useFavourites();

  useEffect(() => {
    let timer;

    if (favourites.length > 0) {
      getGuidesByIds(favourites).then(([fetchedGuides, error]) => {
        if (error) {
          console.error("Error fetching guides:", error);
        } else {
          setGuides(fetchedGuides);
        }
        setLoading(false);
      });
    } else {
      timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [favourites]);

  const activeVendors = useMemo(() => {
    const vendorNames = new Set(guides.map((guide) => guide.vendor));
    return ALL_VENDORS.filter((vendor) => vendorNames.has(vendor.name));
  }, [guides]);

  return (
    <section className="p-4">
      <SectionTitle>Saved Shortcuts</SectionTitle>
      {guides.length === 0 ? (
        <p className="mt-12 text-center">No shortcuts have been marked.</p>
      ) : null}
      {guides.length > 0 && (
        <>
          {activeVendors.map((vendor) => (
            <div key={vendor.name} className="">
              <VendorBadge vendor={vendor} updateVendor={() => null} />
              <ul className="mt-2 md:grid md:grid-cols-3 md:gap-4">
                {guides
                  .filter((guide) => guide.vendor === vendor.name)
                  .map((filteredGuide) => (
                    <GuideBadge
                      key={filteredGuide.id}
                      guide={filteredGuide}
                      href={`/guides/${filteredGuide.vendorSlug}/${filteredGuide.slug}`}
                    />
                  ))}
              </ul>
            </div>
          ))}
        </>
      )}
      <LoadingModal isLoading={loading} message="Loading shortcuts..." />
    </section>
  );
};

export default ShortcutsPage;
