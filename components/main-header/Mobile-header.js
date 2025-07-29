"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import BurgerIcon from "./Burger-icon";
import BurgerMenu from "./Burger-menu";
import Searchbar from "./Searchbar";

import smallLogo from "@/public/images/logo/logo-small.png";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="flex h-full max-w-[1400px] mx-auto lg:hidden justify-between px-5 items-center">
      <Link href="/">
        <Image
          src={smallLogo}
          alt="Relayable Logo"
          className="h-full object-contain cursor-pointer"
          width={60}
          priority
        />
      </Link>
      <Searchbar mobile={true} />
      <BurgerIcon isOpen={menuOpen} setIsOpen={setMenuOpen} />
      {menuOpen ? (
        <BurgerMenu
          setClose={(e) => e.target.id === "close-ok" && setMenuOpen(false)}
        />
      ) : null}
    </div>
  );
};

export default MobileHeader;
