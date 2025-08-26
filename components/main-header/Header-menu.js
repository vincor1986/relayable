"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import HeaderMenuItem from "./Header-menu-item";
import HeaderMenuSlideout from "./Header-menu-slideout";

import navLinks from "@/data/navLinks";

const HeaderMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const pathname = usePathname();

  const handleSelectItem = (itemName) => {
    setSelectedItem((prev) => (prev === itemName ? null : itemName));
  };

  useEffect(() => {
    setSelectedItem(null);
  }, [pathname]);

  return (
    <>
      <nav className="relative flex items-center justify-between gap-6 bg-white z-30">
        {navLinks.map((link) => (
          <HeaderMenuItem
            key={link.name}
            isOpen={selectedItem === link.name}
            setIsOpen={handleSelectItem}
            name={link.name}
          />
        ))}
        <HeaderMenuSlideout
          activeItem={navLinks.find((item) => item.name === selectedItem)}
        />
      </nav>
    </>
  );
};

export default HeaderMenu;
