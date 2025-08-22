import Image from "next/image";

import SectionTitle from "@/components/ui/Section-title";

import Logo from "@/public/images/logo/logo-small.png";
import SectionHeading from "@/components/ui/Section-heading";

export const metadata = {
  title: "About Us | Relayable",
  description:
    "Learn more about Relayable, our mission, and how you can contribute.",
};

const AboutPage = () => {
  return (
    <section className="p-4">
      <SectionTitle>About Us</SectionTitle>
      <div className="flex justify-center w-full mx-auto">
        <Image src={Logo} alt="Logo" className="h-34 w-auto" />
      </div>
      <p className="text-navy font-bold mt-8 text-center">
        Welcome to Relayable, a platform designed to simplify the process of
        managing access to client systems for developers.
      </p>
      <SectionHeading>Who are we?</SectionHeading>
      <p className="text-navy text-center w-full mb-4">
        <strong>Relayable.dev</strong> is a community-driven platform dedicated
        to providing comprehensive guides for developers. Our mission is to
        empower developers by sharing step-by-step guides that they can share
        with their clients during access-granting and revoking processes.
      </p>
      <p className="text-navy text-center w-full mb-4">
        Created in 2025, Relayable addresses the difficulties for professional
        and freelance developers in managing access to their clients&apos;
        systems. We understand the challenges of ensuring secure and efficient
        access to these systems, and we strive to provide the tools and
        resources needed to navigate these complexities.
      </p>
      <p className="text-navy text-center w-full mb-4">
        Our platform is built on the principles of collaboration and knowledge
        sharing. We believe that by working together, we can create a more
        secure and efficient environment for developers and their clients. We
        encourage contributions from the community to expand our library of
        guides, making it a valuable resource for all.
      </p>
      <SectionHeading>How you can help</SectionHeading>
      <p className="text-navy text-center w-full mb-4">
        There are several ways you can contribute to Relayable.dev and help us
        achieve our mission:
      </p>
      <p className="text-navy text-center w-full mb-4">
        <strong>1. Share Your Guides:</strong> If you have created guides that
        can help others, we encourage you to share them on our platform. Your
        contributions will help expand our library and provide valuable
        resources for the community.
      </p>
      <p className="text-navy text-center w-full mb-4">
        <strong>2. Provide Feedback:</strong> We welcome feedback on our
        platform and guides. Your insights can help us improve the user
        experience and ensure that our guides are effective and easy to follow.
        If you find errors or have suggestions for improvements, please let us
        know by requesting a guide-review through the interactive guide page and
        providing a detailed summary of the issue.
      </p>
      <p className="text-navy text-center w-full mb-4">
        <strong>3. Spread the Word:</strong> Help us reach more developers by
        sharing Relayable.dev with your network. The more people know about our
        platform, the more guides we can gather, and the more we can help the
        community.
      </p>
    </section>
  );
};

export default AboutPage;
