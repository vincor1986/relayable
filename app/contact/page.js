import Image from "next/image";

import contactImg from "@/public/images/graphics/sections/contact.png";
import SectionTitle from "@/components/ui/Section-title";
import TextLink from "@/components/ui/Text-link";

export const metadata = {
  title: "Contact Us | Relayable",
  description: "Get in touch with Relayable for any inquiries or support.",
};

const ContactPage = () => {
  return (
    <section className="p-4 flex-col items-center">
      <SectionTitle>Get In Touch</SectionTitle>
      <h2 className="mt-16 text-navy font-bold text-xl text-center">
        We&apos;d love to hear from you!
      </h2>
      <div className="w-full flex justify-center">
        <Image
          src={contactImg}
          alt="Contact"
          className="my-4 w-1/3 h-auto"
          priority
        />
      </div>
      <p className="text-center text-dark-grey mb-8">
        Whether you have questions, feedback, or just want to say hello, feel
        free to reach out. We&apos;re here to help!
      </p>
      <p className="text-center text-dark-grey mb-8">
        You can contact us via email at{" "}
        <TextLink href="mailto:info@vincentcoraldean.com">
          info@vincentcoraldean.com
        </TextLink>
        .
      </p>
    </section>
  );
};

export default ContactPage;
