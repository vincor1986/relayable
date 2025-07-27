"use client";

import { useState, useEffect, use } from "react";

import GuideView from "@/components/guides/Guide-view";
import LoadingModal from "@/components/ui/Loading-modal";
import { notFound } from "next/navigation";

import { getIndividualGuide } from "@/actions/actions";
import useNotificationCtx from "@/store/useNotificationCtx";

const ViewGuidePage = ({ params }) => {
  const [loadedGuide, setLoadedGuide] = useState(null);
  const [loading, setLoading] = useState(true);

  const { notifyUser } = useNotificationCtx();

  const { guideDetails } = use(params);
  const [vendorSlug, slug] = guideDetails;

  useEffect(() => {
    getIndividualGuide(vendorSlug, slug).then(([guide, error]) => {
      if (error) {
        notifyUser("warning", error);
      } else {
        setLoadedGuide(guide);
      }
      setLoading(false);
    });
  }, [vendorSlug, slug]);

  if (!loadedGuide && !loading) {
    return notFound();
  }

  return (
    <div className="p-4">
      {loadedGuide ? <GuideView guide={loadedGuide} /> : null};
      <LoadingModal isLoading={loading} message="Loading guide..." />
    </div>
  );
};

export default ViewGuidePage;
