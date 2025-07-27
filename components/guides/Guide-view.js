"use client";

import { useState } from "react";

import Image from "next/image";

import logoSmall from "@/public/images/logo/logo-small.png";
import shieldImg from "@/public/images/icons/trust.png";

import VendorBadge from "../contribute/creator/Vendor-badge";
import TextVariable from "./Text-variable";
import SelectVariable from "./Select-variable";
import GuideStep from "./Guide-step";

import ALL_VENDORS from "@/data/vendors";
import hRDate from "@/util/hRDate";

const formatVariableObject = (guide) => {
  let variables = {};
  for (const variable of guide.variables) {
    variables[variable.name] = "";
  }

  return variables;
};

const GuideView = ({ guide }) => {
  const [variables, setVariables] = useState(formatVariableObject(guide));

  const imageSrc = guide.author === "Relayable" ? logoSmall : shieldImg;
  const vendor = ALL_VENDORS.find((v) => v.name === guide.vendor);

  const handleVariableUpdate = (name, value) => {
    setVariables((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="p-4">
      <h2 className="text-navy text-4xl font-bold mb-2">
        {guide.title} - {guide.vendor}
      </h2>
      <p className="mb-8 text-navy font-bold italic">{guide.description}</p>
      <VendorBadge vendor={vendor} />
      <div className="mt-2 mb-20 flex gap-2 items-center ">
        <Image src={imageSrc} alt="profile image" className="w-8 h-8" />
        <p className="text-sm text-gray-500">By {guide.author}</p>
        <p className="mx-1 text-3xl text-gray-200">|</p>
        <p className="align-self-end text-sm text-gray-500">
          Last updated: {hRDate(guide.lastUpdated)}
        </p>
      </div>
      <div className="relative my-6 border border-navy p-4 max-w-[800px] rounded-md mx-auto">
        <h2 className="px-4 absolute top-0 left-8 -translate-y-1/2 text-navy font-bold bg-white font-lg">
          Dynamic Variables
        </h2>
        {guide.variables.map((variable) =>
          variable.enum ? (
            <SelectVariable
              key={variable.name}
              name={variable.name}
              label={variable.name}
              value={variables[variable.name]}
              description={variable.description}
              onChange={(e) =>
                handleVariableUpdate(variable.name, e.target.value)
              }
              variations={variable.variations}
            />
          ) : (
            <TextVariable
              key={variable.name}
              name={variable.name}
              description={variable.description}
              value={variables[variable.name]}
              setValue={handleVariableUpdate}
            />
          )
        )}
      </div>
      <div className="relative my-6 border border-navy p-4 max-w-[800px] rounded-md mx-auto">
        <h2 className="px-4 absolute top-0 left-8 -translate-y-1/2 text-navy font-bold bg-white font-lg">
          Step-by-step Guide
        </h2>
        {guide.steps.map((step, index, arr) => (
          <>
            <GuideStep
              key={index}
              index={index}
              step={step}
              variables={variables}
            />
            {index < arr.length - 1 ? <hr className="border-navy/30" /> : null}
          </>
        ))}
      </div>
    </section>
  );
};

export default GuideView;
