"use client";

import { useState } from "react";

import VendorSearchBadge from "@/components/contribute/creator/Vendor-search-badge";
import VendorBadge from "@/components/ui/Vendor-badge";
import TextInput from "@/components/ui/Text-input";
import TextLink from "../ui/Text-link";

import vendors from "@/data/vendors";

const createFilteredVendors = (query, updateVendor, setQuery) => {
  if (!query.trim()) return [];

  const vendorMatches = vendors
    .filter((vendor) =>
      vendor.name.toLowerCase().includes(query.trim().toLowerCase())
    )
    .slice(0, 5);

  return vendorMatches.map((vendor) => (
    <VendorSearchBadge
      key={vendor.name}
      id={vendor.name}
      vendor={vendor}
      updateVendor={() => {
        setQuery("");
        updateVendor(vendor.name);
      }}
    />
  ));
};

const VendorsList = ({ vendor, updateVendor }) => {
  const [query, setQuery] = useState("");

  const filteredVendors = createFilteredVendors(query, updateVendor, setQuery);

  if (vendor) {
    return (
      <div className="p-4">
        <h2 className="font-navy text-xl">Creating customisable guide for:</h2>
        <VendorBadge
          vendor={vendors.find((v) => v.name === vendor)}
          resetSelectedVendor={() => updateVendor("")}
        />
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="relative">
        <TextInput
          label="Choose a Platform / Resource"
          name="query"
          placeholder="Start typing resource name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          data_testid="vendor-search-input"
        />

        {filteredVendors.length ? (
          <div className="p-2 absolute flex w-full left-0 bottom-0 translate-y-full flex-col gap-2 bg-zinc-900/80">
            {filteredVendors}
          </div>
        ) : null}
      </div>
      <p className="italic text-sm">
        Can&apos;t find the platform or resource you&apos;re looking for? Click{" "}
        <TextLink href="/contribute/request-platform">here</TextLink> to request
        a new platform.
      </p>
    </div>
  );
};

export default VendorsList;
