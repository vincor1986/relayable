import Link from "next/link";
import TextLink from "../ui/Text-link";

const QuicklinksSection = ({ links }) => {
  return (
    <div className="relative flex flex-col h-min gap-2 m-4 p-4 py-8 border-2 border-navy rounded-md min-w-80">
      <h2 className="absolute py-2 px-4 top-0 left-1/2 -translate-1/2 text-md bg-white text-navy font-bold">
        QUICKLINKS
      </h2>
      {links.map((link) => (
        <TextLink key={link.href} href={link.href}>
          {link.text}
        </TextLink>
      ))}
    </div>
  );
};

export default QuicklinksSection;
