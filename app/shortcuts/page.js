"use client";

import { useState, useEffect, useMemo } from "react";

import SectionTitle from "@/components/ui/Section-title";
import GuideBadge from "@/components/guides/Guide-badge";
import LoadingModal from "@/components/ui/Loading-modal";

import useFavourites from "@/hooks/useFavourites";
import { getGuidesByIds } from "@/actions/guides";

import ALL_VENDORS from "@/data/vendors";
import VendorHeader from "@/components/ui/Vendor-header";
import TextLink from "@/components/ui/Text-link";
import SearchResultSection from "@/components/guides/SearchResultList";

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
        <>
          <p className="mt-12 text-center">No shortcuts have been marked.</p>
          <p className="mt-12 text-center">
            <TextLink href="/guides/search">Search our guides</TextLink> to find
            the right one(s) for your project.
          </p>
        </>
      ) : null}
      {guides.length > 0 && (
        <SearchResultSection guides={guides} hrefStart="/guides" />
      )}
      <LoadingModal isLoading={loading} message="Loading shortcuts..." />
    </section>
  );
};

export default ShortcutsPage;
