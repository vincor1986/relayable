import Image from "next/image";

import SectionHeading from "../ui/Section-heading";
import LegalBulletList from "./Legal-bullet-list";
import LegalHeading from "./Legal-heading";
import LegalParagraph from "./Legal-paragraph";
import LegalSubnote from "./Legal-subnote";
import TextLink from "../ui/Text-link";

import cookiesImg from "@/public/images/graphics/general/cookies.png";

const CookiesSection = () => {
  return (
    <div className="p-4">
      <h2 className="relative z-20 mt-8 -mb-12 text-center text-2xl font-bold text-navy">
        Cookie Policy
      </h2>
      <SectionHeading>
        {" "}
        <Image
          src={cookiesImg}
          alt="sunglasses"
          className="mx-auto w-16 h-auto mt-4"
        />
      </SectionHeading>
      <LegalSubnote>Last updated: 9 August 2025</LegalSubnote>
      <LegalParagraph>
        Relayable.dev (“we”, “us”, “our”) uses only minimal, necessary cookies
        to ensure the basic functionality of our website.
      </LegalParagraph>
      <LegalBulletList
        items={[
          <p>
            We do <strong>not</strong> use cookies for advertising, tracking, or
            analytics purposes.
          </p>,
          <p>
            Any cookies that may be set are used solely to maintain core site
            operations and improve your browsing experience.
          </p>,
          <p> We do not store personal information in cookies.</p>,
          <p>
            We may also use <strong>local storage</strong> within your browser
            to save certain settings or preferences. This data remains on your
            device and is not shared with us or third parties.
          </p>,
        ]}
      />
      <LegalParagraph>
        By continuing to use Relayable.dev, you consent to the minimal use of
        cookies and local storage as described in this policy.
      </LegalParagraph>
      <LegalParagraph>
        If you wish, you can disable cookies in your browser settings, but
        please note that doing so may affect the functionality of some features
        on the site.
      </LegalParagraph>
      <LegalParagraph>
        For any questions about this Cookie Policy, please contact us at:{" "}
        <TextLink href="mailto:info@vincentcoraldean.com">
          info@vincentcoraldean.com
        </TextLink>
        .
      </LegalParagraph>
    </div>
  );
};

export default CookiesSection;
