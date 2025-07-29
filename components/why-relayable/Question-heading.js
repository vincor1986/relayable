"use client";

import Image from "next/image";
import { useState, useLayoutEffect, useRef } from "react";

import rightArrowImage from "@/public/images/icons/arrow-right.png";

const QuestionHeading = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const answerRef = useRef(null);

  useLayoutEffect(() => {
    if (!answerRef.current) return;

    if (showAnswer) {
      answerRef.current.style.height = "auto";
    } else {
      answerRef.current.style.height = "0px";
    }
  }, [showAnswer]);

  return (
    <div className="my-10 border border-zinc-200 rounded-md p-4">
      <div className="relative py-2 pr-12 w-full">
        <p className="absolute px-4 top-0 left-0 -translate-y-full text-blue/30 text-4xl font-bold bg-white">
          Q
        </p>
        <Image
          src={rightArrowImage}
          alt="arrow"
          className={`absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer opacity-80 ${
            showAnswer ? "rotate-180" : "rotate-90"
          } transition-transform duration-300`}
          width={16}
          height={12}
          onClick={() => setShowAnswer((prev) => !prev)}
        />
        <h3 className="text-lg font-semibold text-navy">{question}</h3>
      </div>
      <div
        className="h-0 overflow-hidden transition-height duration-500"
        ref={answerRef}
      >
        <p className="mt-2 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default QuestionHeading;
