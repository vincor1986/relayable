"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import VendorBadge from "../ui/Vendor-badge";
import TextVariable from "./Text-variable";
import SelectVariable from "./Select-variable";
import GuideStep from "./Guide-step";
import SmallButton from "../ui/SmallButton";

import { URL_REGEX, VARIABLE_REGEX } from "@/util/regex";

import ALL_VENDORS from "@/data/vendors";
import hRDate from "@/util/hRDate";

import { EyeIcon, StarIcon } from "../ui/Icons";
import logoSmall from "@/public/images/logo/logo-small.png";
import shieldImg from "@/public/images/icons/trust.png";
import copyImg from "@/public/images/icons/copy.png";
import useFavourites from "@/hooks/useFavourites";
import MultipleVariable from "./Multiple-variable";
import GuideVariable from "./Guide-variable";

const formatVariableObject = (guide) => {
  console.log(guide.variables);

  let variables = {};
  for (const variable of guide.variables) {
    if (!variables.enum || !variable.multipleValues) {
      variables[variable.name] = "";
    } else {
      variables[variable.name] = [];
    }
  }

  return variables;
};

const formatStepsClipboard = (guide) => {
  let text = "";

  for (let i = 0; i < guide.steps.length; i++) {
    const step = guide.steps[i];
    text += `Step ${i + 1}: ${step}\n`;
    text += "\n";
  }

  return text;
};

const GuideView = ({ guide }) => {
  const [variables, setVariables] = useState(formatVariableObject(guide));
  const [clipboardText, setClipboardText] = useState(
    formatStepsClipboard(guide)
  );

  const { favourites, toggleFavourite } = useFavourites();
  const router = useRouter();

  const isFavourite = favourites.includes(guide.id);

  const imageSrc = guide.author === "Relayable" ? logoSmall : shieldImg;
  const vendor = ALL_VENDORS.find((v) => v.name === guide.vendor);

  const handleVariableUpdate = (name, value) => {
    setVariables((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMultipleVariableUpdate = (name, value) => {
    const present = variables[name].includes(value);
    setVariables((prev) => ({
      ...prev,
      [name]: present
        ? prev[name].filter((v) => v !== value)
        : [...prev[name], value],
    }));
  };

  const copyValid = Object.values(variables).every((v) =>
    typeof v === "string" ? v.trim() !== "" : v.length > 0
  );

  const handleCopyToClipboard = () => {
    const copyText = clipboardText
      .replaceAll(VARIABLE_REGEX, (_, varName) => {
        return variables[varName];
      })
      .replaceAll(URL_REGEX, (url) => {
        const formattedURL = url.startsWith("https") ? url : `https://${url}`;
        return formattedURL;
      });
    navigator.clipboard.writeText(copyText);
  };

  const favText = isFavourite ? "Remove from shortcuts" : "Add to shortcuts";

  return (
    <section className="relative p-4">
      <div className="absolute flex-col justify-end gap-8 top-2 right-4">
        <div
          className="flex justify-end mb-2 gap-2 items-center h-8"
          title={favText}
          onClick={() => toggleFavourite(guide.id)}
        >
          <p className="hidden text-xs font-bold text-navy md:block">
            {favText}
          </p>
          <StarIcon
            className="navy cursor-pointer h-8 w-8"
            fill={isFavourite ? "gold" : "transparent"}
          />
        </div>
        <div
          className="flex justify-end gap-2 items-center cursor-pointer h-8"
          title="Request review"
          onClick={() => router.push(`/guides/request-review/${guide.id}`)}
        >
          <p className="hidden text-xs font-bold text-navy md:block">
            Request review
          </p>
          <EyeIcon className="cursor-pointer h-8 w-8" />
        </div>
      </div>
      <h2 className="text-navy text-4xl font-bold mb-2 mr-14 text-wrap max-w-[600px]">
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
      <div className="relative my-6 border border-navy p-4 px-8 max-w-[800px] rounded-md mx-auto">
        <h2 className="px-4 absolute top-0 left-8 -translate-y-1/2 text-navy font-bold bg-white font-lg">
          Dynamic Variables
        </h2>
        <p className="my-4 font-bold text-navy">
          Complete the below fields to dynamically populate the instruction
          steps:
        </p>
        {guide.variables.map((variable) => (
          <GuideVariable
            key={variable.name}
            variable={variable}
            variables={variables}
            handleVariableUpdate={handleVariableUpdate}
            handleMultipleVariableUpdate={handleMultipleVariableUpdate}
          />
        ))}
      </div>
      <SmallButton
        className="mt-20 mx-auto"
        type="info"
        onClick={handleCopyToClipboard}
        disabled={!copyValid}
      >
        Copy Instructions to Clipboard
        <Image src={copyImg} alt="copy icon" width={16} height={16} />
      </SmallButton>
      <div className="relative mt-12 mb-6 border border-navy p-4 max-w-[800px] rounded-md mx-auto">
        <h2 className="px-4 absolute top-0 left-8 -translate-y-1/2 text-navy font-bold bg-white font-lg">
          Step-by-step Guide
        </h2>
        {guide.steps.map((step, index, arr) => (
          <div key={index}>
            <GuideStep
              key={index}
              index={index}
              step={step}
              variables={variables}
            />
            {index < arr.length - 1 ? <hr className="border-navy/30" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuideView;
