const LegalBulletList = ({ items }) => {
  return (
    <ul className="pl-8 list-disc mb-4 text-gray-800 dark:text-gray-200">
      {items.map((item, index) => (
        <li key={index} className="text-md">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default LegalBulletList;
