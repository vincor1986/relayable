"use client";

import { useState, useEffect } from "react";

import SectionTitle from "@/components/ui/Section-title";
import LoadingModal from "@/components/ui/Loading-modal";
import SectionHeading from "@/components/ui/Section-heading";
import SearchResultSection from "@/components/guides/SearchResultList";

import { getPendingGuides } from "@/actions/guides";
import useNotificationCtx from "@/store/useNotificationCtx";

const ReviewPendingGuidesPage = () => {
  const [pendingGuides, setPendingGuides] = useState([]);
  const [reviewGuides, setReviewGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initiated, setInitiated] = useState(false);

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
      setInitiated(true);
    });
  }, [notifyUser]);

  return (
    <section className="p-4">
      <SectionTitle>Review Pending Guides</SectionTitle>
      {initiated ? (
        <>
          <SectionHeading>PENDING GUIDES</SectionHeading>
          <SearchResultSection
            guides={pendingGuides}
            hrefStart="/guides/approve"
          />
          <SectionHeading>REVIEW GUIDES</SectionHeading>
          <SearchResultSection guides={reviewGuides} hrefStart="/guides/edit" />
        </>
      ) : null}
      <LoadingModal isLoading={loading} message="Loading pending guides..." />
    </section>
  );
};

export default ReviewPendingGuidesPage;
