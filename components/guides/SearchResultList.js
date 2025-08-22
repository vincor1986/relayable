import ALL_VENDORS from "@/data/vendors";
import VendorBadge from "../ui/Vendor-badge";
import GuideBadge from "./Guide-badge";
import VendorHeader from "../ui/Vendor-header";

const SearchResultSection = ({ guides, hrefStart }) => {
  const activeVendors = ALL_VENDORS.filter((vendor) =>
    guides.some((guide) => guide.vendor === vendor.name)
  ).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {guides.length === 0 ? (
        <p>No published guides to review.</p>
      ) : (
        <>
          {activeVendors.map((vendor) => (
            <div key={vendor.name} className="">
              <VendorHeader vendor={vendor} />
              <ul className="mt-2 md:grid md:grid-cols-3 md:gap-4">
                {guides
                  .filter((guide) => guide.vendor === vendor.name)
                  .map((filteredGuide) => (
                    <GuideBadge
                      key={filteredGuide.id}
                      guide={filteredGuide}
                      href={`${hrefStart}/${filteredGuide.vendorSlug}/${filteredGuide.slug}`}
                    />
                  ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SearchResultSection;
