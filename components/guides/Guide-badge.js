import Link from "next/link";

const GuideBadge = ({ guide, href }) => {
  return (
    <Link
      href={href}
      className="flex flex-col gap-2 p-4 my-4 bg-white rounded-lg shadow hover:bg-zinc-100 transition-colors duration-300"
    >
      <h3 className="text-lg font-bold">{guide.title}</h3>
      <p className="text-sm text-gray-600">{guide.description}</p>
      <span className="text-xs text-gray-500">By {guide.author}</span>
    </Link>
  );
};

export default GuideBadge;
