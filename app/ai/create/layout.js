import { ReCaptchaProvider } from "next-recaptcha-v3";

export const metadata = {
  title: "Create New AI Guide | Relayable",
  description:
    "With a simple form, AI Relayable can create a bespoke, interactive user-guide tailored to your specifications.",
};

const AICreateLayout = ({ children }) => {
  return (
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      {children}
    </ReCaptchaProvider>
  );
};

export default AICreateLayout;
