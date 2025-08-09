import Link from "next/link";
import Image from "next/image";

import logoImg from "@/public/images/logo/logo-large.png";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full p-4 py-6 drop-shadow-above border-t border-blue-200 bg-blue-50">
      <div className="flex items-center justify-center mb-4 gap-4">
        <Image
          src={logoImg}
          alt="Logo"
          className="h-12 w-auto mr-2"
          height={80}
          width={200}
        />
        <Link href="/about" className="text-sm text-navy">
          About
        </Link>
        <Link href="/contribute" className="text-sm text-navy">
          Contribute
        </Link>
        <Link href="/contact-us" className="text-sm text-navy">
          Contact us
        </Link>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <p className="text-sm text-gray-600">
          © 2025 Relayable. All rights reserved.
        </p>
        <Link href="/legal" className="text-sm text-navy">
          Legal
        </Link>
        <Link href="/legal/privacy-policy" className="text-sm text-navy">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
