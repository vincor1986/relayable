"use client";

import Image from "next/image";

import useScreenWidth from "@/hooks/useScreenWidth";

import LargeLogo from "@/public/images/logo/logo-large.png";
import SmallLogo from "@/public/images/logo/logo-small.png";
import Link from "next/link";

const MainLogo = () => {
  const screenWidth = useScreenWidth();

  const largeScreen = screenWidth && screenWidth > 768;

  const logoImg = largeScreen ? LargeLogo : SmallLogo;
  const dimensions = largeScreen
    ? { width: 640, height: 229 }
    : { width: 216, height: 229 };

  return (
    <Link href="/">
      <Image
        src={logoImg}
        alt="Relayable Logo"
        className="h-full w-auto object-contain cursor-pointer"
        {...dimensions}
      />
    </Link>
  );
};

export default MainLogo;
