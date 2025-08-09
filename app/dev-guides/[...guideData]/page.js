import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import VendorBadge from "@/components/ui/Vendor-badge";
import SectionHeading from "@/components/ui/Section-heading";
import SSRStep from "@/components/guides/SSR-step";
import SmallButton from "@/components/ui/SmallButton";

import { getIndividualGuide } from "@/actions/guides";

import hRDate from "@/util/hRDate";
import ALL_VENDORS from "@/data/vendors";

import shieldImg from "@/public/images/icons/trust.png";
import logoSmall from "@/public/images/logo/logo-small.png";

const DevGuidePage = async ({ params }) => {
  const { guideData } = await params;
  const [vendorSlug, titleSlug] = guideData;

  const [guide, error] = await getIndividualGuide(vendorSlug, titleSlug);

  if (error) {
    return notFound();
  }

  console.log("guide", guide);

  const imageSrc = guide.author.includes("Relayable") ? logoSmall : shieldImg;
  const vendor = ALL_VENDORS.find((v) => v.name === guide.vendor);

  return (
    <section className="relative mt-4 p-4">
      <span className="absolute top-4 right-4 h-40 w-20 -translate-y-1/3 bg-green/20 skew-y-35 md:h-80 md:w-40"></span>
      <span className="absolute top-4 right-26 h-30 w-20 -translate-y-2/5 bg-blue/10 skew-y-35 md:h-60 md:w-40 md:right-48"></span>
      <h2
        className="text-navy text-4xl font-bold mb-2 mr-14 text-wrap max-w-[600px]"
        data-testid={`guide-title-${guide.slug}`}
      >
        {guide.title} - {guide.vendor}
      </h2>
      <p className="mb-8 text-navy font-bold italic">{guide.description}</p>
      <VendorBadge vendor={vendor} />
      <div className="mt-2 mb-20 flex gap-2 items-center ">
        <Image src={imageSrc} alt="profile image" className="w-8 h-8" />
        <p className="text-sm text-gray-500">By {guide.author}</p>
        <p className="mx-1 text-3xl text-gray-200">|</p>
        <p className="align-self-end text-sm text-gray-500">
          Last updated: {hRDate(guide.lastUpdated)}
        </p>
      </div>
      <Link href={`/guides/${vendorSlug}/${titleSlug}`}>
        <SmallButton type="info" className="mx-auto max-w-[300px]">
          Click here for the interactive version
        </SmallButton>
      </Link>
      <SectionHeading>Step-by-step instructions</SectionHeading>
      <div className="mx-auto flex-col max-w-[1000px] pt-6">
        {guide.steps.map((step, index) => (
          <SSRStep key={`step-${index + 1}`} index={index} step={step} />
        ))}
      </div>
    </section>
  );
};

export default DevGuidePage;
