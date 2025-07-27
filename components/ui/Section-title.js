import Image from "next/image";

import logo from "@/public/images/logo/logo-small.png";

const SectionTitle = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center py-8 px-4 bg-navy text-white text-center mt-4 mb-8 rounded-sm shadow-lg overflow-hidden">
      <Image
        src={logo}
        alt="Relayable logo"
        className="h-full w-auto absolute -bottom-4 right-4 md:h-[200%]"
      />
      <h2 className="relative text-2xl">{children}</h2>
    </div>
  );
};

export default SectionTitle;
