import Link from "next/link";
import Image from "next/image";

import HeaderMenu from "./Header-menu";
import Searchbar from "./Searchbar";

import largeLogo from "@/public/images/logo/logo-large.png";

const DesktopHeader = () => {
  return (
    <div className="hidden h-full max-w-[1400px] mx-auto lg:flex justify-between px-5">
      <Link href="/">
        <Image
          src={largeLogo}
          alt="Relayable Logo"
          className="h-auto object-contain cursor-pointer"
          width={180}
          priority
        />
      </Link>
      <HeaderMenu />
      <Searchbar mobile={false} />
    </div>
  );
};

export default DesktopHeader;
