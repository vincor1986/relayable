"use client";

import { useState } from "react";
import Image from "next/image";

import stepsImg from "@/public/images/icons/track.png";
import TextLink from "@/components/ui/Text-link";
import AddIcon from "@/components/ui/Add-icon";
import NewStepEntry from "./New-step-entry";
import SavedStep from "./Saved-step";

import useCreatorCtx from "@/store/useCreatorCtx";

const AddStepsSection = ({}) => {
  const [newStep, setNewStep] = useState(false);
  const [editStep, setEditStep] = useState(false);

  const ctx = useCreatorCtx();
  const { steps, variables } = ctx;

  return (
    <div className="p-4 mt-6">
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
        <div
          className="flex pl-18 py-6 gap-3 items-center cursor-pointer"
          onClick={() => setNewStep(true)}
        >
          <AddIcon />
          <p className="font-bold text-navy">Add a new step</p>
        </div>
      ) : (
        <NewStepEntry
          index={steps.length}
          variables={variables}
          clear={() => setNewStep(false)}
        />
      )}
    </div>
  );
};

export default AddStepsSection;
