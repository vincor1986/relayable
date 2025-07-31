import Link from "next/link";
import Image from "next/image";

import grantingIcon from "@/public/images/icons/grant.png";
import revokeIcon from "@/public/images/icons/revoke.png";
import otherIcon from "@/public/images/icons/toolkit.png";

const iconMap = {
  "Granting access": grantingIcon,
  "Revoking access": revokeIcon,
  Other: otherIcon,
};

const GuideBadge = ({ guide, href }) => {
  return (
    <Link
      href={href}
      className="relative flex flex-col gap-2 p-4 my-4 bg-white rounded-lg shadow hover:bg-zinc-100 transition-colors duration-300"
    >
      <h3 className="text-lg font-bold mr-16">{guide.title}</h3>
      <p className="text-sm text-gray-600">{guide.description}</p>
      <span className="text-xs text-gray-500">By {guide.author}</span>
      <Image
        src={iconMap[guide.category]}
        alt={guide.category}
        className="absolute right-2 top-2 w-10 h-10"
      />
    </Link>
  );
};

export default GuideBadge;
