"use client";

import { useState } from "react";

import BurgerMenuItem from "./Burger-menu-item";

import navLinks from "@/data/navLinks";
import BurgerIcon from "./Burger-icon";

const BurgerMenu = ({ setClose, setMenuOpen }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelect = (itemName) => {
    setSelectedItem((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <div
      className={`fixed w-full h-full top-0 left-0 -translate-x-full bg-black/80 z-40 cursor-pointer`}
      onClick={setClose}
    >
      <div className="relative h-full w-full" id="close-ok">
        <div
          className={`absolute right-0 top-0 w-[400px] max-w-4/5 h-full pt-20 p-4 pb-12 bg-navy text-white animate-slide-in z-20 overflow-y-scroll`}
          onClick={() => {}}
          autoFocus={true}
          id="burger-menu"
        >
          <BurgerIcon
            isOpen={true}
            setIsOpen={setMenuOpen}
            className="absolute flex flex-col justify-center items-center cursor-pointer z-60 right-5 top-16"
          />
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
