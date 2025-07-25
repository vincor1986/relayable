import Image from "next/image";

import crossImg from "@/public/images/icons/cross-red.png";

const VariableBadge = ({ variable, handleDeleteVariable }) => {
  return (
    <div className="flex cursor-default items-center bg-zinc-200 px-2 py-1 rounded-md">
      <p className="font-bold text-dark-grey">{variable.name}</p>
      {handleDeleteVariable ? (
        <Image
          src={crossImg}
          alt="Cross mark to delete variable"
          className="h-4 w-4 ml-4 cursor-pointer hover:scale-110 transition-all duration-600"
          onClick={() => handleDeleteVariable(variable.name)}
        />
      ) : null}
    </div>
  );
};

export default VariableBadge;
