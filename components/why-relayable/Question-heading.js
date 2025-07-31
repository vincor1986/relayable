"use client";

import Image from "next/image";
import { useState } from "react";

import rightArrowImage from "@/public/images/icons/arrow-right.png";

const QuestionHeading = ({ index, question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="my-10 border border-zinc-200 rounded-md p-4">
      <div className="relative py-2 pr-12 w-full">
        <p className="absolute px-4 top-0 left-0 -translate-y-full text-blue/30 text-4xl font-bold bg-white">
          Q<span className="text-2xl">{index + 1}</span>
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
        className={`overflow-hidden transition-all duration-300 ${
          showAnswer ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="mt-2 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default QuestionHeading;
