import Image from "next/image";

import tickImg from "@/public/images/icons/tick.png";

const TickBox = ({ checked, toggle }) => {
  return (
    <div
      className="relative w-6 h-6 border border-dark-grey rounded-sm cursor-pointer"
      onClick={toggle}
    >
      <span></span>
      {checked ? (
        <Image src={tickImg} alt="Tick" className="absolute left-1 bottom-1" />
      ) : null}
    </div>
  );
};

export default TickBox;
