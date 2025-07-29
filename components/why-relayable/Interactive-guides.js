import guideImg from "@/public/images/icons/customise.png";
import WhyHeading from "./Why-heading";

import TextLink from "../ui/Text-link";

const P = ({ children }) => <p className="text-navy mb-4">{children}</p>;

const InteractiveGuidesSection = () => {
  return (
    <>
      <div id="interactive-guides">
        <WhyHeading image={guideImg} name="Interactive Guides" />
      </div>
      <div className="bg-dark-green/5 pt-4 px-4 mt-3 mb-6 border border-zinc-200 rounded-sm">
        <P>
          Save time, eliminate guesswork, and impress your clients with
          beautifully structured interactive guides — automatically generated
          and ready to share. When access requests get messy, these guides make
          the process seamless and professional.
        </P>
        <P>
          Creating step-by-step instructions manually is tedious and
          error-prone. Our system simplifies it. You choose the access resource
          — whether it&apos;s Google Cloud Console, CPanel, AWS, or dozens of
          others — and we build out a precise, visual guide tailored to that
          exact process. It&apos;s fast, accurate, and always up to date.
        </P>
        <P>
          Your client sees a branded, clear walkthrough that builds confidence.
          They don&apos;t need to search through outdated help docs or decode
          cryptic permissions panels. You look professional, polished, and
          prepared — <span className="font-bold">because you are.</span>
        </P>
        <P>
          Not only do these guides cut down your workload and avoid
          back-and-forth emails, they also reduce delays and misunderstandings.
          And because each guide is generated dynamically, you&apos;ll never
          waste time rewriting instructions again. Simply select the service,
          enter your dynamic variables, and your bespoke instruction guide is
          instantly available to share, download or copy.
        </P>
        <P>
          Give your clients the clarity they need — and free yourself up to
          focus on what you do best.
        </P>
        <P>
          Check out our{" "}
          <TextLink href="/guides/search">interactive guides</TextLink> to see
          how they can transform your client interactions.
        </P>
      </div>
    </>
  );
};

export default InteractiveGuidesSection;
