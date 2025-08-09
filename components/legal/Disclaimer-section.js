import Image from "next/image";

import SectionHeading from "../ui/Section-heading";
import LegalBulletList from "./Legal-bullet-list";
import LegalHeading from "./Legal-heading";
import LegalParagraph from "./Legal-paragraph";
import LegalSubnote from "./Legal-subnote";
import TextLink from "../ui/Text-link";

const DisclaimerSection = () => {
  return (
    <div className="p-4">
      <SectionHeading>DISCLAIMER</SectionHeading>
      <LegalSubnote>Last updated: 9 August 2025</LegalSubnote>
      <LegalParagraph>
        The information provided on Relayable.dev (“we”, “us”, “our”) is for
        general informational purposes only. By using this site, you (“you”,
        “your”, “the user”) agree to the following:
      </LegalParagraph>
      <LegalHeading>1. No Guarantee of Accuracy</LegalHeading>
      <LegalParagraph>
        While we make every reasonable effort to ensure that the content,
        guides, and resources on Relayable.dev are accurate and up-to-date, we
        do not warrant or guarantee the correctness, completeness, or
        reliability of any information provided. This includes, but is not
        limited to:
      </LegalParagraph>
      <LegalBulletList
        items={[
          "Guides created by us.",
          "AI-generated guides.",
          "User-submitted and approved guides.",
        ]}
      />
      <LegalHeading>2. Use at Your Own Risk</LegalHeading>
      <LegalParagraph>
        All information on this site is provided <strong>"as is"</strong>{" "}
        without warranty of any kind — express or implied. You acknowledge and
        agree that:
      </LegalParagraph>
      <LegalBulletList
        items={[
          <p>
            <strong>You assume full responsibility</strong> for any actions
            taken based on the information provided on Relayable.dev.
          </p>,
          <p>
            We are <strong>not liable</strong> for any direct, indirect,
            incidental, consequential, or special damages, including loss of
            profits, data, or business opportunities, arising from your use of
            the site or its content.
          </p>,
        ]}
      />
      <LegalHeading>3. No Professional Advice</LegalHeading>
      <LegalParagraph>
        The content on Relayable.dev is not intended as professional, legal, or
        technical advice. You should seek independent verification and/or
        professional consultation before acting on any information obtained from
        this site.
      </LegalParagraph>
      <LegalHeading>4. Third-Party Links and Content</LegalHeading>
      <LegalParagraph>
        Relayable.dev may contain links to third-party websites or services. We
        do not control, endorse, or guarantee the accuracy or safety of these
        external sites, and we are not responsible for any loss or damage
        resulting from their use.
      </LegalParagraph>
      <LegalHeading>5. Indemnification</LegalHeading>
      <LegalParagraph>
        By using Relayable.dev, you agree to{" "}
        <strong>fully indemnify and hold harmless</strong> Relayable.dev, its
        owners, affiliates, officers, employees, and contributors from and
        against any and all claims, liabilities, damages, losses, or expenses —
        including legal fees — arising from:
      </LegalParagraph>
      <LegalBulletList
        items={[
          "Your use of or reliance on the site or its content.",
          "Your violation of these terms or applicable laws.",
          "Any content you submit to Relayable.dev.",
        ]}
      />
      <LegalHeading>6. Changes to This Disclaimer</LegalHeading>

      <LegalParagraph>
        We may update this Disclaimer from time to time. The most recent version
        will always be posted on this page, and your continued use of the site
        constitutes acceptance of any changes.
      </LegalParagraph>
      <LegalHeading>Contact</LegalHeading>
      <LegalParagraph>
        For questions about this disclaimer, please email{" "}
        <TextLink href="mailto:info@vincentcoraldean.com">
          info@vincentcoraldean.com
        </TextLink>
        .
      </LegalParagraph>
    </div>
  );
};

export default DisclaimerSection;
