import SmallButton from "@/components/ui/SmallButton";
import Image from "next/image";

const VendorHeader = ({ vendor }) => {
  return (
    <div
      id={vendor.name}
      className="pl-12 relative flex h-12 w-full mt-2 p-4 gap-4 items-center bg-navy text-white rounded-md transition-colors duration-300"
    >
      <div className="border-3 border-blue w-16 h-16 flex items-center justify-center bg-white rounded-md">
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

export default VendorHeader;
