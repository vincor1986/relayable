import Link from "next/link";

const TextLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="font-bold underline text-blue hover:text-blue-300 transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

export default TextLink;
