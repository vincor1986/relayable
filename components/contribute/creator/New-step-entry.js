"use client";

import { useState, useRef } from "react";

import StepCount from "./Step-count";
import Textarea from "@/components/ui/Textarea";
import SmallButton from "@/components/ui/SmallButton";

import useCreatorCtx from "@/store/useCreatorCtx";

const NewStepEntry = ({ index, clear, editContent = "" }) => {
  const [instruction, setInstruction] = useState(editContent);
  const inputRef = useRef(null);

  const ctx = useCreatorCtx();
  const { variables, updateFormData } = ctx;

  const insertVariable = (variableName) => {
    setInstruction((prev) => `${prev}<<var:${variableName}>> `);
    inputRef.current.focus();
  };

  const handleSaveStep = (instruction, index) => {
    updateFormData("steps", instruction, index, "edit");
  };

  return (
    <div className="relative mt-12 pt-8 border border-light-grey rounded-md p-4 shadow-md">
      <StepCount stepCount={index + 1} />
      <Textarea
        onChange={(e) => setInstruction(e.target.value)}
        value={instruction}
        placeholder="Enter step instruction..."
        label="New step instruction"
        rows={3}
        ref={inputRef}
      />
      <div className="flex flex-wrap items-center gap-4 my-4">
        <p className="text-dark-grey font-bold">Insert variable:</p>
        {variables.length ? (
          variables.map((variable) => (
            <div
              key={variable.name}
              className="bg-light-grey text-dark-grey font-bold px-2 py-1 rounded-sm cursor-pointer hover:bg-zinc-600 transition-colors duration-300"
              onClick={() => insertVariable(variable.name)}
            >
              {variable.name}
            </div>
          ))
        ) : (
          <p className="text-grey">No variables have been saved</p>
        )}
      </div>
      <hr className="border-light-grey mx-8" />
      <div className="flex items-center gap-4 my-4">
        <SmallButton
          type="info"
          onClick={() => {
            handleSaveStep(instruction, index);
            setInstruction("");
            clear();
          }}
        >
          {editContent ? "Update step" : "Add step"}
        </SmallButton>
        <p
          className="text-red-800 hover:text-red-600 transition-colors duration-300 cursor-pointer"
          onClick={clear}
        >
          Cancel
        </p>
      </div>
    </div>
  );
};

export default NewStepEntry;
