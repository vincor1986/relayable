"use client";

import { URL_REGEX, VARIABLE_REGEX } from "@/util/regex";
import { useState, useLayoutEffect, useRef } from "react";

const GuideStep = ({ step, index, variables }) => {
  const [detail, _] = useState(step);

  const itemRef = useRef(null);

  useLayoutEffect(() => {
    if (itemRef.current) {
      itemRef.current.innerHTML = detail
        .replaceAll(VARIABLE_REGEX, (_, variableName) => {
          return `<span class="text-navy font-bold">${
            `"${variables[variableName]}"` || "_________"
          }</span>`;
        })
        .replaceAll(URL_REGEX, (url) => {
          const formattedURL = url.startsWith("https") ? url : `https://${url}`;
          return `<a href="${formattedURL}" class="text-blue underline" target="_blank" rel="noopener noreferrer">${formattedURL}</a>`;
        });
    }
  }, [itemRef.current, JSON.stringify(variables)]);

  return (
    <div className="py-2">
      <p key={index} className="text-navy text-lg my-4">
        <p className="bg-blue/80 text-white px-2 py-1 rounded-lg font-bold uppercase text-xs mb-2 w-16 text-center">
          Step {index + 1}
        </p>
        <p className="text-md" ref={itemRef}>
          {detail}
        </p>
      </p>
    </div>
  );
};

export default GuideStep;
