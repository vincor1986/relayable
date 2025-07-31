import Image from "next/image";

import QuicklinksSection from "@/components/general/Quicklinks-section";
import SectionTitle from "@/components/ui/Section-title";
import QuestionHeading from "@/components/why-relayable/Question-heading";

import { whyRelayableQuicklinks } from "@/data/quicklinks";
import faq from "@/data/faq";

import faqImg from "@/public/images/icons/faq.png";
import TextLink from "@/components/ui/Text-link";

const links = whyRelayableQuicklinks.filter((item) => item.href !== "/faq");

const FAQPage = () => {
  return (
    <section className="p-4">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <QuicklinksSection links={links} />
        <div className="w-full">
          <div className="p-4 flex items-center gap-2">
            <p className="text-navy italic">
              Here are some commonly pondered questions about Relayable. If you
              have a question that you can't find the answer to, please feel
              free to reach out to us{" "}
              <TextLink href="mailto:info@vincentcoraldean.com">here</TextLink>.
            </p>

            <Image
              src={faqImg}
              alt="FAQ Icon"
              className="mx-auto w-32 h-32 mt-4 mb-2"
            />
          </div>
          {faq.map((q, index) => (
            <QuestionHeading key={index} index={index} {...q} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
