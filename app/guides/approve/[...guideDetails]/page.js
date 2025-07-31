import { notFound } from "next/navigation";

import { getIndividualGuide } from "@/actions/guides";
import EditGuideView from "@/components/guides/Edit-guide-view";

const GuideApprovalPage = async ({ params }) => {
  const [vendorSlug, slug] = params.guideDetails;

  const [guide, error] = await getIndividualGuide(vendorSlug, slug, "pending");

  if (!guide || error) {
    return notFound();
  }

  return <EditGuideView guide={guide} type="review" />;
};

export default GuideApprovalPage;
