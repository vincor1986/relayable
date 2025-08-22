"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

import { queryGuides } from "@/actions/guides";

import LoadingModal from "@/components/ui/Loading-modal";
import SearchResultSection from "./SearchResultList";

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);
  const [searchedTerm, setSearchedTerm] = useState(query);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initiated, setInitiated] = useState(false);

  useEffect(() => {
    queryGuides(searchQuery).then(([fetchedResults, error]) => {
      if (error) {
        console.error("Error fetching guides:", error);
      } else {
        setResults(fetchedResults);
      }
      setLoading(false);
      setInitiated(true);
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
    <>
      <div className="mx-auto max-w-[600px] my-12">
        <input
          className="border border-zinc-300 h-12 w-full rounded-md p-2 px-4"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Search by title, platform or description..."
          type="text"
        />
      </div>
      {initiated && (
        <div data-testid="search-summary" className="my-8">
          {summary}
        </div>
      )}
      {initiated && results.length === 0 ? (
        <p className="mt-12 text-center">
          No results to show. Please alter your search term and try again.
        </p>
      ) : null}
      {initiated && results.length > 0 ? (
        <SearchResultSection guides={results} hrefStart="/guides" />
      ) : null}
      <LoadingModal isLoading={loading} message="Searching guides..." />
    </>
  );
};

export default Search;
