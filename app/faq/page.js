import QuicklinksSection from "@/components/general/Quicklinks-section";
import SectionTitle from "@/components/ui/Section-title";
import QuestionHeading from "@/components/why-relayable/Question-heading";

import { whyRelayableQuicklinks } from "@/data/quicklinks";
import faq from "@/data/faq";

const links = whyRelayableQuicklinks.filter((item) => item.href !== "/faq");

const FAQPage = () => {
  return (
    <section className="p-4">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <QuicklinksSection links={links} />
        <div className="w-full">
          {faq.map((q, index) => (
            <QuestionHeading key={index} {...q} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
