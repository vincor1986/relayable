"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

import arrowIcon from "@/public/images/icons/arrow-right-white.png";
import BurgerMenuSublink from "./Burger-menu-sublink";

const BurgerMenuItem = ({ item, isOpen, setIsOpen }) => {
  return (
    <button
      className="text-left"
      autoFocus={item.name === "Engage"}
      onClick={() => setIsOpen(item.name)}
    >
      <div className="flex justify-between items-center my-6 cursor-pointer hover:text-blue-300 transition-all duration-500">
        <div>
          <h4 className={`text-lg ${isOpen ? "text-amber-300" : null}`}>
            {item.name}
          </h4>
          <p className="text-zinc-200 text-sm italic">{item.description}</p>
        </div>
        <Image
          src={arrowIcon}
          alt="Arrow icon"
          className={`w-3 h-4 ml-4 transition-all duration-300 ${
            isOpen ? "rotate-90" : null
          }`}
        />
      </div>
      <div
        className={`bg-white overflow-hidden transition-all transition-800 ${
          !isOpen ? "max-h-0" : "max-h-[700px]"
        }`}
        aria-expanded={isOpen}
        autoFocus={isOpen}
      >
        {isOpen
          ? item.sublinks.map((sublink, index, arr) => (
              <div
                key={sublink.name}
                aria-expanded={true}
                role="navigation"
                role-label="burger-sub-menu"
              >
                <BurgerMenuSublink {...sublink} index={index} />
                {index < arr.length - 1 ? (
                  <hr className="border-gray-300" />
                ) : null}
              </div>
            ))
          : null}
      </div>
    </button>
  );
};

export default BurgerMenuItem;
