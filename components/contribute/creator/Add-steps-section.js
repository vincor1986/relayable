"use client";

import { useState } from "react";
import Image from "next/image";

import stepsImg from "@/public/images/icons/track.png";
import TextLink from "@/components/ui/Text-link";
import AddIcon from "@/components/ui/Add-icon";
import NewStepEntry from "./New-step-entry";
import SavedStep from "./Saved-step";

import useCreatorCtx from "@/store/useCreatorCtx";
import ErrorMessage from "@/components/ui/Error-message";

const AddStepsSection = ({}) => {
  const [newStep, setNewStep] = useState(false);
  const [editStep, setEditStep] = useState(false);

  const ctx = useCreatorCtx();
  const { steps, variables, errors } = ctx;

  return (
    <div
      className={`p-4 mt-6 ${errors.steps ? "border-2 border-red-800" : null}`}
    >
      <div className="flex gap-4 items-center">
        <Image src={stepsImg} alt="Add steps" className="w-16" />
        <div className="w-full">
          <h4 className="w-full p-3 bg-navy rounded-sm mb-1 text-white font-bold text-lg">
            Add the steps users should follow to complete the action
          </h4>
          <p className="italic text-dark-grey">
            For more information on how to approach this, please check our{" "}
            <TextLink href="/contribute/guidance">community guidance</TextLink>.
          </p>
        </div>
      </div>
      {steps.length > 0 ? (
        <div className="my-16">
          {steps.map((step, index) =>
            editStep === index ? (
              <NewStepEntry
                key={step}
                editContent={step}
                index={index}
                clear={() => setEditStep(false)}
              />
            ) : (
              <SavedStep
                key={step}
                detail={step}
                stepCount={index + 1}
                index={index}
                handleEditStep={() => setEditStep(index)}
              />
            )
          )}
        </div>
      ) : null}
      {!newStep ? (
        <button
          className="flex pl-18 py-6 gap-3 items-center cursor-pointer"
          onClick={() => setNewStep(true)}
          data-testid="add-step-button"
        >
          <AddIcon />
          <p className="font-bold text-navy">Add a new step</p>
        </button>
      ) : (
        <NewStepEntry
          index={steps.length}
          variables={variables}
          clear={() => setNewStep(false)}
        />
      )}
      <ErrorMessage error={errors.steps} />
    </div>
  );
};

export default AddStepsSection;
