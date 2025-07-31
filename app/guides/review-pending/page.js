"use client";

import { useState, useEffect, useMemo } from "react";

import SectionTitle from "@/components/ui/Section-title";
import LoadingModal from "@/components/ui/Loading-modal";

import ALL_VENDORS from "@/data/vendors";

import { getPendingGuides } from "@/actions/guides";
import useNotificationCtx from "@/store/useNotificationCtx";

import VendorBadge from "@/components/ui/Vendor-badge";
import GuideBadge from "@/components/guides/Guide-badge";
import SectionHeading from "@/components/ui/Section-heading";
import VendorHeader from "@/components/ui/Vendor-header";

const ReviewPendingGuidesPage = () => {
  const [pendingGuides, setPendingGuides] = useState([]);
  const [reviewGuides, setReviewGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  const notificationCtx = useNotificationCtx();
  const { notifyUser } = notificationCtx;

  useEffect(() => {
    getPendingGuides("pending").then(([pending, review, error]) => {
      if (error) {
        notifyUser("warning", error);
      } else {
        setPendingGuides(pending);
        setReviewGuides(review);
      }

      setLoading(false);
    });
  }, []);

  const activePendingVendors = useMemo(() => {
    const vendorNames = new Set(pendingGuides.map((guide) => guide.vendor));
    return ALL_VENDORS.filter((vendor) => vendorNames.has(vendor.name));
  }, [pendingGuides]);

  const activeReviewVendors = useMemo(() => {
    const vendorNames = new Set(reviewGuides.map((guide) => guide.vendor));
    return ALL_VENDORS.filter((vendor) => vendorNames.has(vendor.name));
  }, [reviewGuides]);

  return (
    <section className="p-4">
      <SectionTitle>Review Pending Guides</SectionTitle>
      <SectionHeading>PENDING GUIDES</SectionHeading>
      {pendingGuides.length === 0 ? (
        <p>No pending guides to review.</p>
      ) : (
        <>
          {activePendingVendors.map((vendor) => (
            <div key={vendor.name} className="">
              <VendorHeader vendor={vendor} />
              <ul className="mt-2 md:grid md:grid-cols-3 md:gap-4">
                {pendingGuides
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

      <SectionHeading>REVIEW GUIDES</SectionHeading>
      {reviewGuides.length === 0 ? (
        <p>No published guides to review.</p>
      ) : (
        <>
          {activeReviewVendors.map((vendor) => (
            <div key={vendor.name} className="">
              <VendorBadge vendor={vendor} updateVendor={() => null} />
              <ul className="mt-2 md:grid md:grid-cols-3 md:gap-4">
                {reviewGuides
                  .filter((guide) => guide.vendor === vendor.name)
                  .map((filteredGuide) => (
                    <GuideBadge
                      key={filteredGuide.id}
                      guide={filteredGuide}
                      href={`/guides/edit/${filteredGuide.vendorSlug}/${filteredGuide.slug}`}
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
