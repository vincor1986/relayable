import Image from "next/image";

const HomepagePitchItem = ({ image, title, text }) => {
  return (
    <div className="p-6 flex-col">
      <div className="flex relative w-full items-center justify-center">
        <Image src={image} alt={title} className="w-2/5" />
        <div className="pl-4">
          <h2 className="font-bold text-navy text-xl w-3/5">{title}</h2>
          <h3 className="mt-2 text-navy text-md italic hidden md:block">
            {text}
          </h3>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h3 className="text-navy text-md italic md:hidden">{text}</h3>
      </div>
    </div>
  );
};

export default HomepagePitchItem;
