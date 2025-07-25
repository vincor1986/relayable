import Image from "next/image";
import TextLink from "@/components/ui/Text-link";

import image404 from "@/public/images/graphics/sections/404.png";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-100vh gap-8">
      <Image
        src={image404}
        alt="Submarine with periscope above surface of water"
        className="h-[50vw] w-auto mt-16 md:h-[30vw]"
      />
      <h1 className="mx-8 text-navy text-4xl font-bold text-center mt-4">
        Oops! 404 - Page Not Found
      </h1>
      <p className="mx-4 text-navy text-lg text-center mt-2">
        The page you are looking for does not exist or has been moved. Please
        check the URL or return to the <TextLink href="/">homepage</TextLink>.
      </p>
    </div>
  );
};

export default NotFoundPage;
