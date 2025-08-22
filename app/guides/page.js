import Image from "next/image";
import Link from "next/link";

import SectionTitle from "@/components/ui/Section-title";

import slugify from "slugify";
import ALL_VENDORS from "@/data/vendors.js";

export const metadata = {
  title: "Browse Guides by Platform | Relayable",
  description:
    "Explore a wide range of guides organized by platform on Relayable.",
};

const GuidesOverview = () => {
  const VENDORS = ALL_VENDORS.sort((a, b) => a.name.localeCompare(b.name));
  const ALPHABET = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 65)
  );

  const ACTIVE_ALPHABET = ALPHABET.filter((letter) =>
    VENDORS.some((vendor) => vendor.name[0] === letter)
  );

  return (
    <section className="p-4">
      <SectionTitle>Find Guides by Platform</SectionTitle>
      <h2 className="text-navy font-bold text-xs">JUMP TO:</h2>
      <hr className="border border-light-grey" />
      <div className="w-full grid grid-cols-13 md:grid-cols-26">
        {ALPHABET.map((letter) => (
          <Link href={`/guides/#${letter}`} key={letter}>
            <div className="flex items-center justify-center p-1 rounded-full hover:bg-zinc-100 cursor-pointer">
              <p
                className={`text-dark-grey font-bold ${
                  !ACTIVE_ALPHABET.includes(letter)
                    ? "opacity-20 pointer-events-none"
                    : ""
                }`}
              >
                {letter}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {ACTIVE_ALPHABET.map((letter) => (
        <div key={letter}>
          <div className="pt-8" id={letter}>
            <div className="relative w-full h-2 bg-blue/60 rounded-md">
              <p className="absolute top-1/2 left-6 -translate-y-1/2 bg-white px-2 text-navy font-bold text-2xl">
                {letter}
              </p>
            </div>
            <div className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-5  pt-8 pb-12 ">
              {VENDORS.filter((vendor) => vendor.name[0] === letter).map(
                (vendor) => (
                  <Link
                    href={`/guides/${slugify(vendor.name, {
                      lower: true,
                      strict: true,
                    })}`}
                    key={vendor.name}
                  >
                    <div className="bg-white p-4 flex flex-col justify-center items-center shadow-md hover:bg-zinc-50 transition-all duration-200 ease-in-out rounded-lg cursor-pointer">
                      <Image
                        src={vendor.logo}
                        alt={vendor.name}
                        height={60}
                        className="h-16 w-auto"
                      />
                      <h5 className="text-center mt-1">{vendor.name}</h5>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GuidesOverview;
