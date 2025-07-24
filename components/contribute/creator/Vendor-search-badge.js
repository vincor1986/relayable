import Image from "next/image";

const VendorSearchBadge = ({ vendor, updateVendor }) => {
  return (
    <div
      key={vendor.name}
      id={vendor.name}
      className="flex h-22 w-100 p-4 gap-4 items-center bg-zinc-300 rounded-md cursor-pointer hover:bg-blue-100 transition-colors duration-300"
      onClick={() => updateVendor(vendor.name)}
    >
      <div className="w-16 h-16 flex items-center justify-center bg-white rounded-md">
        <Image
          src={vendor.logo}
          alt={vendor.name}
          className="max-h-12 max-w-12 rounded-sm"
        />
      </div>
      <h3 className="font-bold">{vendor.name}</h3>
    </div>
  );
};

export default VendorSearchBadge;
