import Image from "next/image";

import SectionTitle from "@/components/ui/Section-title";
import QuicklinksSection from "@/components/general/Quicklinks-section";

import { contributeQuicklinks } from "@/data/quicklinks";

import dont1 from "@/public/images/graphics/contribute/dont-1.png";
import dont2 from "@/public/images/graphics/contribute/dont-2.png";
import dont3 from "@/public/images/graphics/contribute/dont-3.png";
import dont4 from "@/public/images/graphics/contribute/dont-4.png";
import dont5 from "@/public/images/graphics/contribute/dont-5.png";
import dont6 from "@/public/images/graphics/contribute/dont-6.png";
import do1 from "@/public/images/graphics/contribute/do-1.png";
import do2 from "@/public/images/graphics/contribute/do-2.png";
import do3 from "@/public/images/graphics/contribute/do-3.png";
import do4 from "@/public/images/graphics/contribute/do-4.png";
import do5 from "@/public/images/graphics/contribute/do-5.png";
import do6 from "@/public/images/graphics/contribute/do-6.png";

import tickImg from "@/public/images/icons/tick.png";
import crossImg from "@/public/images/icons/cross-red.png";

const heading = (text) => {
  return (
    <div className="mx-2 my-4">
      <h2 className="text-2xl font-bold">{text}</h2>
      <hr className="w-full mt-2 mb-4 border-blue/20 border-2" />
    </div>
  );
};

const para = (text) => <p className="mx-2 my-2">{text}</p>;

const paraBold = (text) => <p className="mx-2 my-2 font-bold">{text}</p>;

const rule = (text) => (
  <div className="mx-2 mt-6 my-2">
    <h3 className="text-xl font-bold">{text}</h3>
  </div>
);

const DO = (image) => {
  return (
    <div className="relative flex my-6 mb-8 pt-4 items-center border-2 border-green-700 rounded-sm">
      <div className="absolute flex gap-2 items-center top-0 left-8 px-4 -translate-y-1/2 bg-white">
        <h4 className="uppercase font-bold text-2xl">Do</h4>
        <Image src={tickImg} alt="Tick icon" className="w-6 h-6" />
      </div>
      <Image src={image} alt="Do" className="mx-auto" />
    </div>
  );
};

const DONT = (image) => {
  return (
    <div className="relative flex my-6 mt-8 pt-4 items-center border-2 border-red-800 rounded-sm">
      <div className="absolute flex gap-2 items-center top-0 left-8 px-4 -translate-y-1/2 bg-white">
        <h4 className="uppercase font-bold text-2xl">Don't</h4>
        <Image src={crossImg} alt="Tick icon" className="w-6 h-6" />
      </div>
      <Image src={image} alt="Do" className="mx-auto" />
    </div>
  );
};

export const metadata = {
  title: "Contributor Guidance | Relayable",
  description:
    "Guidelines and tips for contributing guides to Relayable, ensuring clarity and quality.",
};

const ContributorGuidancePage = () => {
  const quickLinks = contributeQuicklinks.filter(
    (link) => link.href !== "/contribute/guidance"
  );

  return (
    <section className="p-4">
      <SectionTitle>Contributor Guidance</SectionTitle>
      <div className="flex flex-col md:flex-row">
        <QuicklinksSection links={quickLinks} />
        <div className="w-full text-navy">
          {heading("Guidance and guidelines for contributing guides")}
          {para(
            "Thanks for taking the time to contribute a guide to Relayable! Here you can find some guidance and guidelines to help you create a useful and high-quality guide."
          )}
          {para(
            "We are a community-driven project, and we rely on the contributions of our users to create a comprehensive library of how-to guides. Your contributions are invaluable in helping us achieve this goal."
          )}
          {heading("What makes a good guide?")}
          {para(
            "A good guide is one that is clear, concise, and easy to follow. It should provide step-by-step instructions that are easy to understand, especially for someone who is not familiar with the topic or tech-minded."
          )}
          {para("Here are some tips to help you create a good guide:")}
          {rule("1. Be clear and concise")}
          {para(
            "Use simple language and avoid jargon. If you need to use technical terms, explain them clearly. Keep your sentences short and to the point."
          )}
          {DONT(dont1)}
          {DO(do1)}
          <br />
          {rule("2. Ensure steps are easy to follow and comprehensive")}
          {para(
            "Make sure each step is clear and easy to follow. Make sure to only include one action per step to avoid confusion."
          )}
          {DONT(dont2)}
          {DO(do2)}
          <br />
          {rule("3. Start at the beginning")}
          {para(
            "Begin with the most primitive step involved in the process (for example: 'Visit https://github.com'). Don't assume the user will know where to start the process or what the first steps are. Be thorough."
          )}
          {DONT(dont3)}
          {DO(do3)}
          <br />
          {rule("4. Set up variables correctly")}
          {para(
            "When creating a variable, please use lowercase text unless absolutely necessary. Avoid using spaces in variable names; instead use hyphen ('my-variable') or underscore  ('my_variable') characters. If the variable can only represent a finite number of possible values, please mark the variable as an enum and provide these possible values as a comma-separated list. All variables must be used at least once in the steps of the guide."
          )}
          {paraBold(
            "Remember, these variables will be available to the developers using your guide, and the values they provide will be inserted into the guide for them to use."
          )}
          {DONT(dont4)}
          {DO(do4)}
          <br />
          {rule("5. Enter full URLs")}
          {para(
            "When entering URLs, please ensure you include the full URL, including the protocol (e.g., 'https://'). This will help avoid errors when users try to access resources."
          )}
          {DONT(dont5)}
          {DO(do5)}
          <br />
          {rule("6. Enter named resources correctly")}
          {para(
            `When entering named resources, please ensure you enter them between single quotes (e.g., 'My Account'). Also, please match the casing of the resource exactly as it appears in the platform application. This will help users to identify the resources they need to interact with. Also, do your best to describe where to find the named resource on the page, (e.g., "Click 'Settings' in the navigation panel.").`
          )}
          {DONT(dont6)}
          {DO(do6)}
          <br />
          {rule("7. Check over your guide before submitting")}
          {para(
            `Once you've completed your guide, please review it carefully to ensure it is clear, with correct spelling and grammar. We will review all submitted guides, and will clean up any minor errors, but we ask that you do your best to ensure your guide is as polished as possible before submitting it to ensure a smooth review process.`
          )}
          <br />
          {heading("A final note")}
          {para(
            "That's it! If you follow these guidelines, and keep in mind that developers will use these to create their own bespoke guides for their non-technical clients to follow, you should be able to create a useful and high-quality guide."
          )}
          {paraBold("Thanks so much for your contribution, and happy guiding!")}
        </div>
      </div>
    </section>
  );
};

export default ContributorGuidancePage;
