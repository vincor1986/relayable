import Link from "next/link";
import Image from "next/image";

const HeaderMenuSublinkItem = ({ name, description, icon, href }) => {
  return (
    <Link href={href}>
      <div className="bg-white rounded-sm h-full w-[300px] py-2 px-4 pb-6 cursor-pointer hover:bg-blue-100 transition-all duration-300">
        <h3 className="font-bold text-navy">{name}</h3>
        <hr className="my-2 border-gray-300" />
        <div className="flex items-center">
          <Image src={icon} alt={name} className="w-16 h-16 mr-2" />
          <p className="text-sm text-dark-grey italic">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default HeaderMenuSublinkItem;
