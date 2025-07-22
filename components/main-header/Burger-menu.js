"use client";

import { useState } from "react";

import BurgerMenuItem from "./Burger-menu-item";

import navLinks from "@/data/navLinks";

const BurgerMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelect = (itemName) => {
    setSelectedItem((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <div className="fixed right-0 top-0 w-[350px] h-[100vh] pt-20 p-4 bg-navy text-white animate-slide-in z-20 overflow-y-scroll">
      <h2 className="text-xl ">MENU</h2>
      <hr className="my-4 border-white" />
      {navLinks.map((item) => (
        <BurgerMenuItem
          key={item.name}
          item={item}
          isOpen={selectedItem === item.name}
          setIsOpen={handleItemSelect}
        />
      ))}
    </div>
  );
};

export default BurgerMenu;
