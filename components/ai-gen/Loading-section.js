import Image from "next/image";

import loadingImg from "@/public/images/icons/loading.png";

const LoadingSection = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full min-h-[400px]">
      <Image
        src={loadingImg}
        alt="Loading..."
        width={50}
        className="h-auto animate-spin timing-600 mx-auto mb-4"
      />
      <h2 className="text-navy mb-2">
        Please wait while Relayable AI generates your guide
      </h2>
      <p>This may take up to a few minutes. Thank you for your patience!</p>
    </div>
  );
};

export default LoadingSection;
