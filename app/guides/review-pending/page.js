"use client";

import { useState, useEffect, useMemo } from "react";

import SectionTitle from "@/components/ui/Section-title";
import LoadingModal from "@/components/ui/Loading-modal";

import ALL_VENDORS from "@/data/vendors";

import { fetchAllGuides } from "@/actions/actions";
import useNotificationCtx from "@/store/useNotificationCtx";
import VendorBadge from "@/components/contribute/creator/Vendor-badge";
import GuideBadge from "@/components/guides/Guide-badge";

const ReviewPendingGuidesPage = () => {
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  const notificationCtx = useNotificationCtx();
  const { notifyUser } = notificationCtx;

  useEffect(() => {
    fetchAllGuides("pending").then(([data, error]) => {
      if (error) {
        notifyUser("warning", error);
      } else {
        setGuides(data);
      }

      setLoading(false);
    });
  }, []);

  const activeVendors = useMemo(() => {
    const vendorNames = new Set(guides.map((guide) => guide.vendor));
    return ALL_VENDORS.filter((vendor) => vendorNames.has(vendor.name));
  }, [guides]);

  return (
    <section className="p-4">
      <SectionTitle>Review Pending Guides</SectionTitle>
      {guides.length === 0 ? (
        <p>No pending guides to review.</p>
      ) : (
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
                      href={`/guides/approve/${filteredGuide.vendorSlug}/${filteredGuide.slug}`}
                    />
                  ))}
              </ul>
            </div>
          ))}
        </>
      )}
      <LoadingModal isLoading={loading} message="Loading pending guides..." />
    </section>
  );
};

export default ReviewPendingGuidesPage;
