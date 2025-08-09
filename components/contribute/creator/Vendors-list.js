"use client";

import { useState } from "react";

import VendorSearchBadge from "./Vendor-search-badge";

import vendors from "@/data/vendors";
import VendorBadge from "@/components/ui/Vendor-badge";
import TextInput from "@/components/ui/Text-input";

import useCreatorCtx from "@/store/useCreatorCtx";
import TextLink from "@/components/ui/Text-link";

const createFilteredVendors = (query, updateVendor) => {
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
      updateVendor={() => updateVendor(vendor.name)}
    />
  ));
};

const VendorsList = () => {
  const [query, setQuery] = useState("");

  const ctx = useCreatorCtx();
  const { vendor, updateFormData } = ctx;

  const updateVendor = (vendorName) => {
    updateFormData("vendor", vendorName);
    setQuery("");
  };

  const filteredVendors = createFilteredVendors(query, updateVendor);

  if (vendor) {
    return (
      <div className="p-4">
        <h2 className="font-navy text-xl">Creating customisable guide for:</h2>
        <VendorBadge
          vendor={vendors.find((v) => v.name === vendor)}
          resetSelectedVendor={() => updateVendor(null)}
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
        Can't find the platform or resource you're looking for? Click{" "}
        <TextLink href="/contribute/request-platform">here</TextLink> to request
        a new platform.
      </p>
    </div>
  );
};

export default VendorsList;
