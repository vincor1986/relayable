"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

import LoadingModal from "@/components/ui/Loading-modal";

import { queryGuides } from "@/actions/guides";

import ALL_VENDORS from "@/data/vendors";
import GuideBadge from "@/components/guides/Guide-badge";
import SectionTitle from "@/components/ui/Section-title";
import VendorHeader from "@/components/ui/Vendor-header";

const GuideSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);
  const [searchedTerm, setSearchedTerm] = useState(query);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchQuery !== "" &&
      queryGuides(searchQuery).then(([fetchedResults, error]) => {
        if (error) {
          console.error("Error fetching guides:", error);
        } else {
          setResults(fetchedResults);
        }
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      queryGuides(searchQuery).then(([fetchedResults, error]) => {
        if (error) {
          console.error("Error fetching guides:", error);
        } else {
          setResults(fetchedResults);
          setSearchedTerm(searchQuery);
        }
        setLoading(false);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const activeVendors = useMemo(() => {
    const vendorNames = new Set(results.map((guide) => guide.vendor));
    return ALL_VENDORS.filter((vendor) => vendorNames.has(vendor.name));
  }, [results]);

  const resultCount = <span className="font-bold">{results.length}</span>;
  const sTElement = <span className="font-bold">{searchedTerm}</span>;

  const summary = (
    <p className="text-navy text-2xl">
      {resultCount}
      {results.length === 1 ? " result " : " results "}
      {searchedTerm !== "" ? "for " : null}
      {searchedTerm !== "" ? sTElement : null}
    </p>
  );

  return (
    <section className="p-4">
      <SectionTitle>Search our guides</SectionTitle>
      <div className="mx-auto max-w-[600px] my-12">
        <input
          className="border border-zinc-300 h-12 w-full rounded-md p-2 px-4"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Search by title, vendor or description..."
          type="text"
        />
      </div>
      <div className="my-8">{summary}</div>
      {results.length === 0 ? (
        <p className="mt-12 text-center">
          No results to show. Please alter your search term and try again.
        </p>
      ) : null}
      {results.length > 0 && (
        <>
          {activeVendors.map((vendor) => (
            <div key={vendor.name} className="mb-8">
              <VendorHeader vendor={vendor} updateVendor={() => null} />
              <ul className="mt-2 md:grid md:grid-cols-3 md:gap-4">
                {results
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
      <LoadingModal isLoading={loading} message="Searching guides..." />
    </section>
  );
};

export default GuideSearch;
