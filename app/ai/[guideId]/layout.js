import { notFound } from "next/navigation";

import { getGuideById } from "@/actions/guides";

export const generateMetadata = async ({ params }) => {
  const { guideId } = await params;

  const [guide, error] = await getGuideById(guideId, "ai");

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
