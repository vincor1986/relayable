"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

import BurgerIcon from "./Burger-icon";
import BurgerMenu from "./Burger-menu";
import Searchbar from "./Searchbar";

import smallLogo from "@/public/images/logo/logo-small.png";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const iconRef = useRef(null);

  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
    iconRef.current && iconRef.current.focus();
  };

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
      <BurgerIcon isOpen={menuOpen} setIsOpen={setMenuOpen} ref={iconRef} />
      {menuOpen
        ? createPortal(
            <BurgerMenu
              setClose={(e) =>
                !e || e.target.id === "close-ok" ? closeMenu() : null
              }
              setMenuOpen={setMenuOpen}
              isOpen={menuOpen}
            />,
            document.getElementById("mobile-menu")
          )
        : null}
    </div>
  );
};

export default MobileHeader;
