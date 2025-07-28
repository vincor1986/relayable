import { notFound } from "next/navigation";

import { getIndividualGuide } from "@/actions/actions";
import EditGuideView from "@/components/guides/Edit-guide-view";
import RRBadge from "@/components/guides/RR-badge";
import SectionHeading from "@/components/guides/Section-heading";

const EditGuidePage = async ({ params }) => {
  const [vendorSlug, slug] = params.guideDetails;

  const [guide, error] = await getIndividualGuide(vendorSlug, slug, "approved");

  if (!guide || error) {
    return notFound();
  }

  return (
    <>
      {guide.reviewRequests.length ? (
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
