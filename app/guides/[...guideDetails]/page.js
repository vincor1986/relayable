"use client";

import { useState, useEffect, use } from "react";

import GuideView from "@/components/guides/Guide-view";
import LoadingModal from "@/components/ui/Loading-modal";
import { notFound } from "next/navigation";

import { getIndividualGuide } from "@/actions/guides";
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
    <div className="relative max-w-[1000px] mx-auto p-4 overflow-hidden">
      <span className="absolute top-4 right-4 h-40 w-20 -translate-y-1/3 bg-green/20 skew-y-35 md:h-80 md:w-40"></span>
      <span className="absolute top-4 right-26 h-30 w-20 -translate-y-2/5 bg-blue/10 skew-y-35 md:h-60 md:w-40 md:right-48"></span>
      {loadedGuide ? <GuideView guide={loadedGuide} /> : null}
      <LoadingModal isLoading={loading} message="Loading guide..." />
    </div>
  );
};

export default ViewGuidePage;
