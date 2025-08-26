"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import rightArrow from "@/public/images/icons/arrow-right-full.png";

const {
  default: HeaderMenuSublinkItem,
} = require("./Header-menu-sublink-item");

const HeaderMenuSlideout = ({ activeItem }) => {
  const linkRef = useRef(null);

  useEffect(() => {
    if (activeItem) {
      linkRef.current.focus();
    }
  }, [activeItem]);

  return (
    <div
      className={`fixed top-[100px] left-0 w-[100vw] bg-zinc-100 text-navy transition-height duration-600 z-20 ${
        activeItem ? "p-4 pt-8 max-h-[700px]" : "max-h-0 overflow-hidden"
      }`}
      id="main-menu"
      aria-expanded={activeItem ? true : false}
      role="navigation"
    >
      {activeItem ? (
        <div className="m-auto max-w-[1000px]">
          <div className="flex items-center justify-between">
            <h3>{activeItem.description}</h3>
            <Link
              className="flex cursor-pointer hover:text-blue-400 transition-all duration-300"
              href={activeItem.href}
              ref={linkRef}
            >
              <p>Go to {activeItem.name}</p>
              <Image
                src={rightArrow}
                alt="Right arrow icon"
                className="relative top-[2px] w-5 h-4 inline-block ml-2"
              />
            </Link>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="grid grid-cols-3 gap-4">
            {activeItem.sublinks.map((subItem) => (
              <HeaderMenuSublinkItem {...subItem} key={subItem.name} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HeaderMenuSlideout;
