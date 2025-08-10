import { getIndividualGuide } from "@/actions/guides";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const { guideDetails } = await params;
  const [vendorSlug, slug] = guideDetails;

  const [guide, error] = await getIndividualGuide(vendorSlug, slug);

  if (error) {
    return notFound();
  }

  return {
    title: `${guide.title} - ${guide.vendor} | Relayable`,
    description: guide.description,
  };
};

const GuideLayout = ({ children }) => {
  return <>{children}</>;
};

export default GuideLayout;
