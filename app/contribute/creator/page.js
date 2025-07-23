"use client";

import Image from "next/image";

import vendors from "@/data/vendors";

const GuideCreator = () => {
  return (
    <div>
      {vendors.map((vendor) => {
        return (
          <div key={vendor.name} className="flex">
            <h2 className="text-2xl font-bold text-navy mb-4">{vendor.name}</h2>
            <Image src={vendor.logo} alt={vendor.name} className="w-22 h-22" />
          </div>
        );
      })}
    </div>
  );
};

export default GuideCreator;
