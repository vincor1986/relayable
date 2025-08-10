import { notFound } from "next/navigation";

import { getIndividualGuide } from "@/actions/guides";
import EditGuideView from "@/components/guides/Edit-guide-view";

export const generateMetadata = async ({ params }) => {
  const { guideDetails } = await params;
  const [vendorSlug, slug] = guideDetails;

  return {
    title: `Review Guide - ${slug} - ${vendorSlug} | Relayable`,
    description: `Review unapproved guide`,
  };
};

const GuideApprovalPage = async ({ params }) => {
  const { guideDetails } = await params;
  const [vendorSlug, slug] = guideDetails;

  const [guide, error] = await getIndividualGuide(vendorSlug, slug, "pending");

  if (!guide || error) {
    return notFound();
  }

  return <EditGuideView guide={guide} type="review" />;
};

export default GuideApprovalPage;
