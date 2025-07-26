"use client";

import { useState } from "react";

import BurgerIcon from "./Burger-icon";
import BurgerMenu from "./Burger-menu";
import HeaderMenuItem from "./Header-menu-item";
import HeaderMenuSlideout from "./Header-menu-slideout";

import useScreenWidth from "@/hooks/useScreenWidth";
import navLinks from "@/data/navLinks";

const HeaderMenu = () => {
  const screenWidth = useScreenWidth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  if (screenWidth <= 768) {
    return (
      <>
        <BurgerIcon isOpen={menuOpen} setIsOpen={setMenuOpen} />
        {menuOpen ? <BurgerMenu /> : null}
      </>
    );
  }

  const handleSelectItem = (itemName) => {
    setSelectedItem((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <>
      <nav className="relative flex space-x-12 items-center justify-center  bg-white z-30">
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
