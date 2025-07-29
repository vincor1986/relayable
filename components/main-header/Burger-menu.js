"use client";

import { useState } from "react";

import BurgerMenuItem from "./Burger-menu-item";

import navLinks from "@/data/navLinks";

const BurgerMenu = ({ setClose }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelect = (itemName) => {
    setSelectedItem((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <div
      className={`fixed w-full h-[3000px] top-0 left-0 bg-black/80 z-40 cursor-pointer`}
      onClick={setClose}
    >
      <div className="relative h-full w-full" id="close-ok">
        <div
          className={`absolute right-0 top-0 w-[400px] pt-20 p-4 pb-12 bg-navy text-white animate-slide-in z-20`}
          onClick={() => {}}
        >
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
      </div>
    </div>
  );
};

export default BurgerMenu;
