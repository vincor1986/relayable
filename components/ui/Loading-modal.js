import Image from "next/image";

import logoSmall from "@/public/images/logo/logo-small.png";

const LoadingModal = ({ isLoading, message = "Loading..." }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 min-h-screen w-full inset-0 flex items-center justify-center bg-black/80">
      <div className="p-4 rounded shadow-md">
        <Image
          src={logoSmall}
          alt="Loading..."
          width={50}
          className="h-auto animate-spin timing-600 mx-auto mb-4"
        />
        <p className="text-white font-lg font-bold">{message}</p>
      </div>
    </div>
  );
};

export default LoadingModal;
