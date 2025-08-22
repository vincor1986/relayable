import SectionHeading from "../ui/Section-heading";
import LegalBulletList from "./Legal-bullet-list";
import LegalHeading from "./Legal-heading";
import LegalParagraph from "./Legal-paragraph";
import LegalSubnote from "./Legal-subnote";
import TextLink from "../ui/Text-link";

const DPASection = () => {
  return (
    <div className="p-4">
      <SectionHeading>Data Processing Agreement (DPA)</SectionHeading>
      <LegalSubnote>Last updated: 9 August 2025</LegalSubnote>
      <LegalParagraph>
        This Data Processing Agreement (“Agreement”) forms part of the Terms of
        Service for the Relayable.dev website and governs the processing of
        personal data by <strong>Relayable.dev</strong> (“we”, “us”, “our”) on
        behalf of website users (“you”, “your”).
      </LegalParagraph>
      <LegalParagraph>
        We are based in the United Kingdom and comply with the{" "}
        <strong>UK General Data Protection Regulation (UK GDPR)</strong> and,
        where applicable, the{" "}
        <strong>EU General Data Protection Regulation (EU GDPR)</strong>.
      </LegalParagraph>
      <LegalHeading>1. Purpose of Processing</LegalHeading>
      <LegalParagraph>
        We process personal data solely for the purpose of:
      </LegalParagraph>
      <LegalBulletList
        items={[
          "Sending mailing list communications when you have subscribed.",
          "Contacting you regarding submitted guides or related forms.",
          "Providing updates on progress or actions taken in response to your submissions.",
        ]}
      />
      <LegalHeading>2. Nature of the Data</LegalHeading>
      <LegalParagraph>
        The only personal data we collect and process is:
      </LegalParagraph>
      <LegalBulletList
        items={[
          "Your email address (submitted via mailing list signup or form submissions).",
        ]}
      />
      <LegalParagraph>
        We do not request, process, or store other personal or sensitive data.
        Any other information you use with the service (e.g., credentials for
        access guides) is processed <strong>client-side only</strong> and is
        never sent to our servers.
      </LegalParagraph>
      <LegalHeading>3. Legal Basis for Processing</LegalHeading>
      <LegalParagraph>
        We process your personal data on one or more of the following legal
        bases:
      </LegalParagraph>
      <LegalBulletList
        items={[
          <p key="a">
            <strong>Consent</strong> &ndash; when you voluntarily sign up to the
            mailing list or submit a form.
          </p>,
          <p key="b">
            <strong>Legitimate Interest</strong> &ndash; to respond to your
            enquiries or submissions.
          </p>,
        ]}
      />
      <LegalHeading>4. Data Storage & Retention</LegalHeading>
      <LegalBulletList
        items={[
          <p key="0">
            Email addresses are stored securely in our systems and retained
            until you request deletion.
          </p>,

          <p key="1">There are currently no automatic deletion processes.</p>,

          <p key="2">
            You may request a copy or deletion of your data at any time by
            emailing:{" "}
            <TextLink href="mailto:info@vincentcoraldean.com">
              info@vincentcoraldean.com
            </TextLink>
            .
          </p>,
        ]}
      />
      <LegalHeading>5. Data Sharing</LegalHeading>
      <LegalParagraph>
        We do not share your personal data with any third parties, except where
        required by law.
      </LegalParagraph>
      <LegalHeading>6. Security</LegalHeading>
      <LegalParagraph>
        We implement appropriate technical and organisational measures to
        protect your data against unauthorised access, alteration, disclosure,
        or destruction.
      </LegalParagraph>
      <LegalHeading>7. International Transfers</LegalHeading>
      <LegalParagraph>
        We store and process data in the United Kingdom. No data is transferred
        outside the UK/EU unless adequate safeguards are in place.
      </LegalParagraph>
      <LegalHeading>8. Your Rights</LegalHeading>
      <LegalParagraph>
        You have the following rights under UK/EU data protection laws:
      </LegalParagraph>
      <LegalBulletList
        items={[
          "Access to your personal data.",
          "Rectification of inaccurate data.",
          "Erasure of your personal data (“right to be forgotten”).",
          "Restriction of processing.",
          "Data portability.",
          "Withdrawal of consent at any time.",
        ]}
      />
      <LegalParagraph>
        To exercise your rights, contact{" "}
        <TextLink href="mailto:info@vincentcoraldean.com">
          info@vincentcoraldean.com
        </TextLink>
        .
      </LegalParagraph>
      <LegalHeading>9. Sub-Processors</LegalHeading>
      <LegalParagraph>
        At present, we do not use any sub-processors for storing or managing
        personal data.
      </LegalParagraph>
      <LegalHeading>10. Changes to this Agreement</LegalHeading>
      <LegalParagraph>
        We may update this DPA from time to time. The “Last updated” date will
        always reflect the latest revision.
      </LegalParagraph>
      <br />
      <LegalParagraph>
        <strong>
          By using Relayable.dev and providing your email address, you agree to
          the terms of this Data Processing Agreement.
        </strong>
      </LegalParagraph>
    </div>
  );
};

export default DPASection;
