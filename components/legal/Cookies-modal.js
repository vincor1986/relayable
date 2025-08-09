"use client";

import Image from "next/image";

import { useState, useEffect } from "react";

import cookiesImg from "@/public/images/graphics/general/cookies.png";
import TextLink from "../ui/Text-link";
import SmallButton from "../ui/SmallButton";

const CookiesModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const setAgreed = () => {
    localStorage.setItem("cookies-agreed", "true");
    setIsVisible(false);
  };

  useEffect(() => {
    const hasAgreed = localStorage.getItem("cookies-agreed");
    if (hasAgreed !== "true") {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return <></>;

  return (
    <div className="fixed right-4 bottom-4 p-4 border max-w-screen border-navy rounded-sm shadow-lg z-30 bg-white md:max-w-[400px]">
      <div className="w-full">
        <Image
          src={cookiesImg}
          alt="Cookies"
          className="float-right ml-1 mb-1 h-26 w-auto"
        />
        <p>
          We use minimal cookies to enhance your browsing experience. For more
          information, see our{" "}
          <TextLink href="/legal/cookies-policy">cookies policy</TextLink>.
        </p>
      </div>
      <SmallButton className="mt-4 w-full" onClick={setAgreed} type="info">
        I Agree
      </SmallButton>
    </div>
  );
};

export default CookiesModal;
