import Image from "next/image";

import searchIcon from "@/public/images/icons/magnifying-glass.png";

const Searchbar = ({ mobile = true }) => {
  return (
    <div
      className={`flex h-full w-70 md:w-100 items-center justify-center ${
        mobile ? "md:hidden" : "hidden md:flex"
      }`}
    >
      <input
        type="text"
        placeholder="Search guides..."
        className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="flex items-center justify-center w-16 h-10  text-white rounded-md cursor-pointer hover:bg-blue-100 transition-colors duration-300">
        <Image src={searchIcon} alt="Search Icon" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Searchbar;
