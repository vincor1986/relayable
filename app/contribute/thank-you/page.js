import Image from "next/image";

import TextLink from "@/components/ui/Text-link";

import thankYouImg from "@/public/images/graphics/sections/thankyou.png";

export const metadata = {
  title: "Thank You | Relayable",
  description: "Thank you for your contribution to Relayable.",
};

const ThankYouPage = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-8 min-h-[80vh] w-full">
      <span className="absolute rounded-full top-1/3 left-1/2 -translate-1/2 h-[250px] w-[250px] bg-blue/15 -z-20" />
      <Image
        src={thankYouImg}
        alt="Thank You"
        className="max-w-[80vw] max-h-[30vh]"
      />
      <p className="text-center text-navy text-lg max-w-[80vw] md:max-w-[800px]">
        Thank you so much for your contribution. We&apos;ll look closely at your
        submission and let you know if we can add it to our library.
      </p>
      <p className="text-center text-navy text-lg max-w-[80vw] md:max-w-[800px]">
        Feel free to submit another guide{" "}
        <TextLink href="/contribute/creator">here</TextLink>.
      </p>
    </section>
  );
};

export default ThankYouPage;
