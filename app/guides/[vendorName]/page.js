import slugify from "slugify";

import { notFound } from "next/navigation";

import SectionTitle from "@/components/ui/Section-title";
import SearchResultSection from "@/components/guides/SearchResultList";

import { BASE_URL } from "@/util/URL";
import ALL_VENDORS from "@/data/vendors";

export const generateMetadata = ({ params }) => {
  const { vendorName } = params;
  const vendor = ALL_VENDORS.find(
    (v) => vendorName === slugify(v.name, { lower: true, strict: true })
  );

  if (!vendor) {
    notFound();
  }

  return {
    title: `${vendor.name} Guides | Relayable`,
    description: `Find access-related how-to guides for ${vendor.name} on Relayable.`,
  };
};

const VendorGuidesPage = async ({ params }) => {
  const { vendorName } = await params;

  const response = await fetch(
    `${BASE_URL}/api/guides-by-vendor?vendor=${vendorName}`,
    {
      next: { revalidate: 600 },
    }
  );

  const { data: guides } = await response.json();

  if (!guides || guides.length === 0) {
    notFound();
  }

  const VENDOR = ALL_VENDORS.find((v) => v.name === guides[0].vendor);

  return (
    <section className="p-4">
      <SectionTitle>{VENDOR.name} Guides</SectionTitle>
      <h2 className="font-bold text-navy my-4 text-2xl">
        {guides.length} Results
      </h2>
      <SearchResultSection guides={guides} hrefStart="/guides" />
    </section>
  );
};

export default VendorGuidesPage;
