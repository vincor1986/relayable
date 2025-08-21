import Image from "next/image";

import SectionHeading from "../ui/Section-heading";
import LegalBulletList from "./Legal-bullet-list";
import LegalHeading from "./Legal-heading";
import LegalParagraph from "./Legal-paragraph";
import LegalSubnote from "./Legal-subnote";
import TextLink from "../ui/Text-link";

import glassesImg from "@/public/images/graphics/general/privacy.png";

const PrivacyPolicySection = () => {
  return (
    <div className="p-4">
      <h2 className="relative z-20 mt-8 -mb-12 text-center text-2xl font-bold text-navy">
        Privacy Policy
      </h2>
      <SectionHeading>
        {" "}
        <Image
          src={glassesImg}
          alt="sunglasses"
          className="mx-auto w-24 h-auto mt-4"
        />
      </SectionHeading>
      <LegalSubnote>Last updated: 9 August 2025</LegalSubnote>
      <LegalParagraph>
        This Privacy Policy explains how we handle information collected through
        this website. We respect your privacy and are committed to being
        transparent about how we use any information you provide.
      </LegalParagraph>
      <LegalHeading>Information We Collect</LegalHeading>
      <LegalParagraph>We only collect email addresses when you:</LegalParagraph>
      <LegalBulletList
        items={["Sign up for our mailing list", "Submit a guide-related form"]}
      />
      <LegalParagraph>
        We do not collect any other personal information.
      </LegalParagraph>{" "}
      <LegalHeading>How We Use Your Information</LegalHeading>
      <LegalParagraph>
        We use your email address for the following purposes only:
      </LegalParagraph>
      <LegalBulletList
        items={[
          "Sending updates and information to mailing list subscribers",
          "Contacting guide authors or form submitters about progress or actions taken",
        ]}
      />
      <LegalParagraph>
        We do not sell, share, or give your information to any third parties.
      </LegalParagraph>{" "}
      <LegalHeading>Data Storage</LegalHeading>
      <LegalParagraph>
        Your email address is stored securely and persistently in our database.
        At present, we have no automated process for deleting old data. If you
        want your email address removed or want to see what data we hold, you
        can contact us at{" "}
        <TextLink href="mailto:info@vincentcoraldean.com">
          info@vincentcoraldean.com
        </TextLink>
        .
      </LegalParagraph>
      <LegalHeading>Cookies</LegalHeading>
      <LegalParagraph>
        We do not currently use cookies or any similar tracking technologies.
      </LegalParagraph>
      <LegalHeading>Your Privacy Rights</LegalHeading>
      <LegalParagraph>You have the right to:</LegalParagraph>
      <LegalBulletList
        items={["Request a copy of your data", "Request deletion of your data"]}
      />
      <LegalParagraph>
        To exercise these rights, email us at{" "}
        <TextLink href="mailto:info@vincentcoraldean.com">
          info@vincentcoraldean.com
        </TextLink>
        .
      </LegalParagraph>
      <LegalHeading>Changes to This Policy</LegalHeading>
      <LegalParagraph>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated "Last updated" date.{" "}
      </LegalParagraph>
      <LegalHeading>Contact Us </LegalHeading>
      <LegalParagraph>
        For privacy-related questions or requests, please email:{" "}
        <TextLink href="mailto:info@vincentcoraldean.com">
          info@vincentcoraldean.com
        </TextLink>
        .
      </LegalParagraph>
    </div>
  );
};

export default PrivacyPolicySection;
