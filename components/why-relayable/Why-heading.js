import Image from "next/image";

const WhyHeading = ({ image, name }) => {
  return (
    <>
      <div className="mt-16 mb-6 relative h-[2px] bg-light-grey/60 w-full">
        <p className="absolute px-4 top-0 left-1/2 -translate-1/2 font-bold text-navy bg-white">
          <Image src={image} alt={name} className="h-24 w-auto" />
        </p>
      </div>
      <div className="relative flex items-center justify-center h-16 bg-blue/10">
        <h2 className="w-full text-center text-navy text-2xl font-bold">
          {name}
        </h2>
      </div>
    </>
  );
};

export default WhyHeading;
