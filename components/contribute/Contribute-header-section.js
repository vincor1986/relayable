import Image from "next/image";

import SectionTitle from "../ui/Section-title";
import guideImg from "@/public/images/graphics/sections/guides.png";

import TextLink from "../ui/Text-link";

const ContributeHeaderSection = () => {
  console.log(guideImg);

  return (
    <section>
      <SectionTitle>Contribute a How-To Guide</SectionTitle>
      <div className="flex w-full justify-center items-center">
        <Image src={guideImg} alt="How-to Guide" />
      </div>
      <div className="w-full text-center px-6 md:px-40">
        <h2 className="font-bold text-xl">
          Share your knowledge and help others
        </h2>
        <br />
        <p>
          Our selection of interactive and documentation how-to guides help
          developers and their clients to streamline and simplify the process of
          adding or revoking developer access. Since verifying the processes in
          each guide requires access to the respective resource, we are unable
          to create guides for every instance, and have therefore taken a
          community-driven approach to collating a comprehensive library of
          access-related documentation.
        </p>
        <br />
        <p>
          By contributing a guide, you can help fill these gaps and ensure that
          our library remains a valuable resource for everyone. Whether you have
          expertise in a specific area or have encountered a unique challenge,
          your insights could make a significant difference.
        </p>
        <br />
        <p>
          If you are interested in contributing a how-to guide using our bespoke
          interactive guide creator tool, please click{" "}
          <TextLink href="/contribute/creator">here</TextLink>.
        </p>
        <br />
        <p>
          You can also read more about our{" "}
          <TextLink href="/contribute/terms">
            contributor guidance and guidelines
          </TextLink>{" "}
          for more information on best practices and preferred approaches.
        </p>
      </div>
    </section>
  );
};

export default ContributeHeaderSection;
