import Image from "next/image";
import Link from "next/link";

const BurgerMenuSublink = ({ icon, description, href, name }) => {
  return (
    <div className="px-2 py-4 hover:bg-zinc-200 transition-all duration-300">
      <Link href={href} className="text-sm">
        <h3 className="text-dark-grey text-md font-bold mb-2">{name}</h3>
        <div className="flex">
          <Image src={icon} alt={name} className="h-12 w-12 mr-2" />
          <p className="text-xs text-gray-500 italic">{description}</p>
        </div>{" "}
      </Link>
    </div>
  );
};

export default BurgerMenuSublink;
