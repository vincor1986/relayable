"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import StepCount from "./Step-count";

import editImg from "@/public/images/icons/edit.png";
import deleteImg from "@/public/images/icons/cross-red.png";

import useCreatorCtx from "@/store/useCreatorCtx";

import { VARIABLE_REGEX, URL_REGEX } from "@/util/regex";

const SavedStep = ({ detail, stepCount, handleEditStep }) => {
  const itemRef = useRef(null);

  const ctx = useCreatorCtx();
  const { updateFormData } = ctx;

  const handleDeleteStep = (index) => {
    updateFormData("steps", null, index, "remove");
  };

  useLayoutEffect(() => {
    if (itemRef.current) {
      itemRef.current.innerHTML = detail
        .replaceAll(VARIABLE_REGEX, (_, variableName) => {
          return `<span class="text-navy font-bold">&lt;${variableName}&gt;</span>`;
        })
        .replaceAll(URL_REGEX, (url) => {
          const formattedURL = url.startsWith("https") ? url : `https://${url}`;
          return `<a href="${formattedURL}" class="text-blue underline" target="_blank" rel="noopener noreferrer">${formattedURL}</a>`;
        });
    }
  }, [detail]);

  return (
    <div className="relative border border-light-grey rounded-md my-6 shadow-md p-6">
      <StepCount stepCount={stepCount} />
      <p className="text-dark-grey" ref={itemRef}>
        {detail}
      </p>
      <div className="absolute flex top-0 right-4 -translate-y-1/2 items-center gap-1 h-8">
        <div
          className="flex items-center justify-center rounded-sm w-8 h-8 bg-white border border-light-grey cursor-pointer hover:bg-zinc-200 transition-colors duration-300"
          onClick={handleEditStep}
        >
          <Image
            src={editImg}
            alt="Pencil icon to edit step"
            className="w-6 h-6"
            title="Edit step"
          />
        </div>
        <div
          className="flex items-center justify-center rounded-sm w-8 h-8 bg-white border border-light-grey cursor-pointer hover:bg-zinc-200 transition-colors duration-300"
          onClick={() => handleDeleteStep(stepCount - 1)}
        >
          <Image
            src={deleteImg}
            alt="Cross icon to delete step"
            className="w-6 h-6"
            title="Delete step"
          />
        </div>
      </div>
    </div>
  );
};

export default SavedStep;
