"use client";

import { useState, useCallback, useEffect, useRef } from "react";

import BurgerMenuItem from "./Burger-menu-item";

import navLinks from "@/data/navLinks";
import BurgerIcon from "./Burger-icon";

const BurgerMenu = ({ setClose, setMenuOpen, isOpen }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const linkRef = useRef(null);

  useEffect(() => {
    isOpen && linkRef.current && linkRef.current.focus();
  }, [isOpen]);

  const handleItemSelect = useCallback((itemName) => {
    setSelectedItem((prev) => (prev === itemName ? null : itemName));
  }, []);

  return (
    <div
      className={`fixed w-full h-full top-0 left-0 -translate-x-full bg-black/80 z-40 cursor-pointer`}
      onClick={setClose}
      onKeyDown={(e) => e.key === "Escape" && setClose()}
    >
      <div className="relative h-full w-full" id="close-ok">
        <div
          className={`absolute right-0 top-0 w-[400px] max-w-4/5 h-full pt-20 p-4 pb-12 bg-navy text-white animate-slide-in z-20 overflow-y-scroll`}
          onClick={() => {}}
          autoFocus={true}
          id="burger-menu"
          aria-expanded={true}
          role="navigation"
          role-label="Burger Menu"
        >
          <BurgerIcon
            isOpen={true}
            setIsOpen={setMenuOpen}
            className="absolute flex flex-col justify-center items-center cursor-pointer z-60 right-5 top-16"
          />
          <h2 className="text-xl ">MENU</h2>
          <hr className="my-4 border-white" />
          {navLinks.map((item, index) => (
            <BurgerMenuItem
              key={item.name}
              item={item}
              isOpen={selectedItem === item.name}
              setIsOpen={handleItemSelect}
              ref={index === 0 ? linkRef : null}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
