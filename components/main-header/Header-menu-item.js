import Image from "next/image";

import arrowIcon from "@/public/images/icons/arrow-right.png";

const HeaderMenuItem = ({ isOpen, setIsOpen, name }) => {
  return (
    <button
      className={`h-[60px] flex w-[150px] text-center items-center justify-center cursor-pointer ${
        isOpen ? "border-b-4 border-blue" : null
      }`}
      onClick={() => setIsOpen(name)}
      aria-controls="main-menu"
    >
      <h3 className="text-dark-grey text-bold hover:text-blue-500 transition-all duration-300 cursor-pointer">
        {name}
      </h3>
      <Image
        src={arrowIcon}
        alt="Arrow icon"
        className="w-2 h-3 ml-2 transition-all duration-300 rotate-90"
      />
    </button>
  );
};

export default HeaderMenuItem;
