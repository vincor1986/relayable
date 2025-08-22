import Image from "next/image";

const VendorSectionRow = ({ image, index }) => {
  const className =
    index % 2 === 0 ? "animate-roll-left" : "animate-roll-right";

  return (
    <div className={`${className} mb-4`}>
      <Image
        src={image}
        alt={`vendor row ${index}`}
        className="vendor-image w-auto grayscale-20 opacity-90"
        width={14368}
        height={128}
      />
    </div>
  );
};

export default VendorSectionRow;
