import { notFound } from "next/navigation";

import { getGuideById } from "@/actions/guides";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const [guide, error] = await getGuideById(id);

  if (error) {
    return notFound();
  }

  return {
    title: `Request Review for ${guide.title} | Relayable`,
    description: `Request a review for the guide titled "${guide.title}" - ${guide.vendor}.`,
  };
};

const RequestReviewLayout = ({ children }) => {
  return <>{children}</>;
};

export default RequestReviewLayout;
