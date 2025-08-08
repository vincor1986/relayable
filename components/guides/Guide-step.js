"use client";

import { useState, useLayoutEffect, useRef } from "react";

import isURL from "is-url";

import formatListString from "@/util/formatListString";
import { URL_REGEX, VARIABLE_REGEX, CONDITIONAL_REGEX } from "@/util/regex";

const GuideStep = ({ step, index, variables }) => {
  const [detail, _] = useState(step);

  const itemRef = useRef(null);

  useLayoutEffect(() => {
    if (itemRef.current) {
      itemRef.current.innerHTML = detail
        .replaceAll(VARIABLE_REGEX, (_, varName) => {
          const v = variables[varName];
          // check type of v to determine if it's a string or an array
          const varType = typeof v;

          return varType === "string"
            ? `<span class="font-bold">${
                v ? `${v}` : `&lt;${varName}&gt;`
              }</span>`
            : varType === "boolean"
            ? `<span class="font-bold">${
                v ? `${v.toString()}` : `&lt;${varName}&gt;`
              }</span>`
            : `<span class="font-bold">${
                v.length && v.length > 0
                  ? `${formatListString(v)}`
                  : `&lt;${varName}&gt;`
              }</span>`;
        })
        .replaceAll(URL_REGEX, (url) => {
          if (!isURL(url)) return `${url}`;

          const formattedURL = url.startsWith("https") ? url : `https://${url}`;
          return `<a href="${formattedURL}" class="text-blue underline" target="_blank" rel="noopener noreferrer">${formattedURL}</a>`;
        })
        .replaceAll(CONDITIONAL_REGEX, "")
        .trim()
        .replace(/./, (match) => {
          return match.toUpperCase();
        });
    }
  }, [itemRef.current, JSON.stringify(variables)]);

  return (
    <div className="py-2" data-testid="guide-step">
      <div key={index} className="text-navy text-lg my-4">
        <p className="bg-blue/80 text-white px-2 py-1 rounded-lg font-bold uppercase text-xs mb-2 w-16 text-center">
          Step {index + 1}
        </p>
        <p
          className="text-md"
          ref={itemRef}
          data-testid="guide-step-instructions"
        >
          {detail}
        </p>
      </div>
    </div>
  );
};

export default GuideStep;
