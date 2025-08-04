import { notFound } from "next/navigation";

import { getIndividualGuide } from "@/actions/guides";
import EditGuideView from "@/components/guides/Edit-guide-view";
import RRBadge from "@/components/guides/RR-badge";
import SectionHeading from "@/components/ui/Section-heading";

const EditGuidePage = async ({ params }) => {
  const { guideDetails } = await params;
  const [vendorSlug, slug] = guideDetails;

  const [guide, error] = await getIndividualGuide(vendorSlug, slug);

  if (!guide || error) {
    return notFound();
  }

  return (
    <>
      {guide.reviewRequests?.length ? (
        <>
          <SectionHeading>User Review Requests</SectionHeading>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {guide.reviewRequests.map((req, index) => (
              <RRBadge key={index} reviewRequest={req} />
            ))}
          </div>
        </>
      ) : null}
      <EditGuideView guide={guide} type="edit" />
    </>
  );
};

export default EditGuidePage;
