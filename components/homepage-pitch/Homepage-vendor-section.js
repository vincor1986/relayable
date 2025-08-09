import Link from "next/link";
import ALL_VENDORS from "../../data/vendors";
import SmallButton from "../ui/SmallButton";
import VendorSectionRow from "./Vendor-section-row";

const VENDOR_LIST = ALL_VENDORS.sort((a, b) => a.name.length - b.name.length);
const vendorList = [...VENDOR_LIST, ...VENDOR_LIST];

const ROWS = [];

let currentIndex = 0;
for (let i = 0; i < 9; i++) {
  const start = currentIndex;
  const end = currentIndex + 30;
  ROWS.push(vendorList.slice(start, end));
  currentIndex = end;

  if (currentIndex >= vendorList.length - 30) {
    currentIndex -= vendorList.length;
  }
}

const HomepageVendorSection = () => {
  return (
    <div className="relative overflow-hidden h-[720px] mt-28 pt-8 border-t-2 border-b-2 border-navy select-none">
      <div className="absolute left-1/2 -translate-x-1/2 w-max mx-auto">
        {ROWS.map((row, index) => (
          <VendorSectionRow key={index} vendorArr={row} index={index} />
        ))}
        <div className="absolute w-screen top-0 left-1/2 -translate-x-1/2 h-full md:max-w-[1200px]">
          <div className="relative h-[800px] w-screen md:max-w-[1200px]">
            <div className="absolute left-0 h-full w-30 bg-linear-to-r from-white/100 to-white/0 md:w-60 lg:w-[600px]" />
            <div className="absolute right-0 h-full w-50 bg-linear-to-l from-white/100 to-white/0 md:w-[400px] lg:w-[600px]" />
          </div>
        </div>
        <div className="absolute flex flex-col p-8 border border-zinc-200 shadow-md items-center justify-center top-1/2 left-1/2 -translate-1/2 bg-white rounded-sm w-[350px] select-auto">
          <h2 className="font-bold text-xl text-navy text-center">
            Interactive access guides for 100+ platforms
          </h2>
          <Link href="/guides/search">
            <SmallButton type="info" className="mt-4">
              Find the one you need
            </SmallButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomepageVendorSection;
