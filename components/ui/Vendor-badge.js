import SmallButton from "@/components/ui/SmallButton";
import Image from "next/image";

const VendorBadge = ({ vendor, resetSelectedVendor }) => {
  return (
    <div id={vendor.name} className="flex flex-col gap-2">
      <div className="flex relative h-22 w-86 max-w-[100%] mt-2 p-4 gap-4 items-center bg-navy text-white rounded-md transition-colors duration-300">
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-md">
          <Image
            src={vendor.logo}
            alt={vendor.name}
            className="max-h-12 max-w-12 rounded-sm"
          />
        </div>
        <h3 className="font-bold" data-testid={`vendor-${vendor.name}`}>
          {vendor.name}
        </h3>
      </div>
      {resetSelectedVendor ? (
        <SmallButton onClick={resetSelectedVendor} type="warning">
          Remove
        </SmallButton>
      ) : null}
    </div>
  );
};

export default VendorBadge;
