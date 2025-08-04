"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import VendorBadge from "../ui/Vendor-badge";
import GuideStep from "./Guide-step";
import SmallButton from "../ui/SmallButton";
import { EyeIcon, StarIcon } from "../ui/Icons";
import GuideVariable from "./Guide-variable";

import logoSmall from "@/public/images/logo/logo-small.png";
import shieldImg from "@/public/images/icons/trust.png";
import copyImg from "@/public/images/icons/copy.png";

import { URL_REGEX, VARIABLE_REGEX } from "@/util/regex";
import ALL_VENDORS from "@/data/vendors";
import hRDate from "@/util/hRDate";

import useFavourites from "@/hooks/useFavourites";
import isUrl from "is-url";
import formatListString from "@/util/formatListString";

const formatVariableObject = (guide) => {
  console.log(guide.variables);

  let variables = {};
  for (const variable of guide.variables) {
    if (variable.type !== "enum" && !variable.multipleValues) {
      variables[variable.name] = "";
    } else {
      variables[variable.name] = [];
    }
  }

  return variables;
};

const formatStepsClipboard = (steps) => {
  let text = "";

  const textSteps = steps.map((step) => step.text);

  for (let i = 0; i < textSteps.length; i++) {
    const step = textSteps[i];
    text += `Step ${i + 1}: ${step}\n`;
    text += "\n";
  }

  return text;
};

const formatSteps = (steps) => {
  return steps.map((s) => ({
    text: s,
    id: Math.random().toString(36).substr(2, 9),
  }));
};

const GuideView = ({ guide }) => {
  const [variables, setVariables] = useState(formatVariableObject(guide));
  const [steps, _] = useState(formatSteps(guide.steps));

  const mandatoryVariables = guide.variables.filter((v) => v.required);
  const optionalVariables = guide.variables.filter((v) => !v.required);

  const optionalVarArray = useMemo(
    () =>
      optionalVariables
        .map((v) =>
          !variables[v.name] ||
          variables[v.name] === "" ||
          variables[v.name].length === 0
            ? `<<var:${v.name}>>`
            : null
        )
        .filter((v) => v !== null),
    [variables, optionalVariables]
  );

  const guideSteps = useMemo(
    () =>
      steps.filter(
        (step) => !optionalVarArray.some((v) => step.text.includes(v))
      ),
    [steps, optionalVarArray]
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

  const copyValid = Object.values(mandatoryVariables).every(({ name }) => {
    const v = variables[name];
    return typeof v === "string" ? v.trim() !== "" : v.length > 0;
  });

  const handleCopyToClipboard = () => {
    const textSteps = formatStepsClipboard(guideSteps);

    const copyText = textSteps
      .replaceAll(VARIABLE_REGEX, (_, varName) => {
        return formatListString(variables[varName]);
      })
      .replaceAll(URL_REGEX, (url) => {
        if (!isUrl(url)) return `${url}`;
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
        <div className="relative flex flex-col pt-8 p-4 mt-12 border border-navy rounded-sm">
          <p className="absolute top-0 left-4 mt-4 mb-2 -translate-y-full bg-navy rounded-sm py-2 px-2 text-white font-bold">
            Mandatory Variables
          </p>
          <p className="text-sm mb-4 text-dark-grey">
            These variables are mandatory and must be entered to populate the
            guide instructions.
          </p>
          {mandatoryVariables.map((variable) => (
            <GuideVariable
              key={variable.name}
              variable={variable}
              variables={variables}
              handleVariableUpdate={handleVariableUpdate}
              handleMultipleVariableUpdate={handleMultipleVariableUpdate}
            />
          ))}
        </div>
        {optionalVariables.length > 0 ? (
          <div className="relative flex flex-col pt-8 p-4 mt-12 border border-navy rounded-sm">
            <p className="absolute top-0 left-4 mt-4 mb-2 -translate-y-full bg-navy rounded-sm py-2 px-2 text-white font-bold">
              Optional Variables
            </p>
            <p className="text-sm mb-4 text-dark-grey">
              These variables are optional. Entering values here will create
              optional steps in the guide instructions.
            </p>
            {optionalVariables.map((variable) => (
              <GuideVariable
                key={variable.name}
                variable={variable}
                variables={variables}
                handleVariableUpdate={handleVariableUpdate}
                handleMultipleVariableUpdate={handleMultipleVariableUpdate}
              />
            ))}
          </div>
        ) : null}
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
        {guideSteps.map((step, index, arr) => (
          <div key={step.id}>
            <GuideStep index={index} step={step.text} variables={variables} />
            {index < arr.length - 1 ? <hr className="border-navy/30" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuideView;
