import SectionHeading from "../ui/Section-heading";
import LegalBulletList from "./Legal-bullet-list";
import LegalHeading from "./Legal-heading";
import LegalParagraph from "./Legal-paragraph";
import LegalSubnote from "./Legal-subnote";
import TextLink from "../ui/Text-link";

const TOSSection = () => {
  return (
    <div className="p-4">
      <SectionHeading>TERMS OF USE</SectionHeading>
      <LegalSubnote>Last updated: 9 August 2025</LegalSubnote>
      <LegalParagraph>
        Welcome to Relayable.dev (“we”, “us”, “our”). By using this website, you
        (“you”, “your”, “the user”) agree to the following terms and conditions.
        If you do not agree, please do not use this service.
      </LegalParagraph>
      <LegalHeading>1. Service Overview</LegalHeading>
      <LegalParagraph>
        Relayable.dev is a free online resource designed to help developers
        streamline the process of requesting and managing access to client
        services. We provide interactive guides, resources, and tracking tools.
        No login or paid tier is currently required — anyone may visit and use
        the site.
      </LegalParagraph>
      <LegalHeading>2. Use of Guides and Content</LegalHeading>
      <LegalParagraph>
        You are welcome to use the guides, resources, and information provided
        on Relayable.dev for any purpose, including personal, educational, or
        commercial use. However:
      </LegalParagraph>
      <LegalBulletList
        items={[
          <p key="0">
            While we make every effort to ensure the accuracy and currency of
            our guides (including AI-generated or community-submitted and
            approved guides),{" "}
            <strong>
              we cannot guarantee that all information is correct, complete, or
              up-to-date
            </strong>
            .
          </p>,
          <p key="1">
            You use the guides <strong>at your own risk</strong> and should
            verify important details independently before acting on them.
          </p>,
          <p key="2">
            We are <strong>not liable</strong> for any loss, damage, or issues
            resulting from reliance on the information provided on
            Relayable.dev.
          </p>,
        ]}
      />
      <LegalHeading>3. User-Submitted Content</LegalHeading>
      <LegalParagraph>
        If you submit guides or other materials to Relayable.dev:
      </LegalParagraph>
      <LegalBulletList
        items={[
          "You grant us full ownership rights to that content, including the right to edit, approve, publish, or remove it at our discretion.",
          "You confirm that the content you submit is your own work and does not infringe any copyright or other rights of third parties.",
          "You agree that we may use your name, username, or other identifiers in connection with the content you submit.",
          "You agree to only submit content that is appropriate, honest, legal, and does not violate any laws or rights of others.",
        ]}
      />
      <LegalHeading>4. Intellectual Property</LegalHeading>
      <LegalBulletList
        items={[
          <p key="0">
            All content on Relayable.dev — whether created by us, AI-generated
            under our direction, or submitted by users — is owned by
            Relayable.dev.
          </p>,

          <p key="1">
            The <strong>Relayable</strong> name, the{" "}
            <strong>Relayable.dev</strong> domain, associated branding,
            concepts, and services are the intellectual property of{" "}
            <strong>Vincent Coraldean</strong>.
          </p>,

          <p key="2">
            You may not use our name, branding, or other intellectual property
            in a way that could cause confusion, imply endorsement, or compete
            with our service without our written permission.
          </p>,
        ]}
      />
      <LegalHeading>5. Availability</LegalHeading>
      <LegalParagraph>
        We make no guarantees regarding uptime or continuous availability of the
        site. Relayable.dev may be temporarily unavailable for maintenance,
        updates, or due to technical issues.
      </LegalParagraph>
      <LegalHeading>6. Data and Privacy</LegalHeading>
      <LegalBulletList
        items={[
          <p key="0">
            The only personal data we collect server-side is your{" "}
            <strong>email address</strong> (e.g., when signing up for the
            mailing list or submitting a guide).
          </p>,

          <p key="1">
            Any other personal or sensitive data used with the site will be
            processed <strong>client-side only</strong> and will not be stored
            by us.
          </p>,

          <p key="2">
            Our <TextLink href="/legal/privacy-policy">Privacy Policy</TextLink>{" "}
            explains how we handle your data.
          </p>,
        ]}
      />
      <LegalHeading>7. Governing Law</LegalHeading>
      <LegalParagraph>
        These terms are governed by and interpreted in accordance with the laws
        of the United Kingdom. Any disputes will be handled exclusively in UK
        courts.
      </LegalParagraph>
      <LegalHeading>8. Changes to These Terms</LegalHeading>
      <LegalParagraph>
        We may update these Terms of Service at any time by posting the new
        version on this page. Continued use of the site after changes are posted
        constitutes acceptance of the revised terms.
      </LegalParagraph>
      <LegalHeading>Contact</LegalHeading>
      <LegalParagraph>
        For questions about these Terms of Service, email us at{" "}
        <TextLink href="mailto:info@vincentcoraldean.com">
          info@vincentcoraldean.com
        </TextLink>
        .
      </LegalParagraph>
    </div>
  );
};

export default TOSSection;
