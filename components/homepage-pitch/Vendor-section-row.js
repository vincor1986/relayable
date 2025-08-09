import Image from "next/image";

const VendorSectionRow = ({ vendorArr, index }) => {
  const className =
    index % 2 === 0 ? "animate-roll-left" : "animate-roll-right";

  const arr = [...vendorArr, ...vendorArr, ...vendorArr];

  return (
    <div className={`flex flex-nowrap gap-4 ${className} mb-4 opacity-60`}>
      {arr.map((vendor, index) => (
        <Image
          src={vendor.logo}
          alt={vendor.name}
          width={100}
          height={100}
          className="h-16 w-16 object-contain"
          key={index}
        />
      ))}
    </div>
  );
};

export default VendorSectionRow;
