"use client";

import VendorsList from "@/components/contribute/creator/Vendors-list";
import SummaryFormSection from "@/components/contribute/creator/Summary-form-section";
import AddVariablesSection from "@/components/contribute/creator/Add-variables-section";
import AddStepsSection from "@/components/contribute/creator/Add-steps-section";

import useCreatorCtx from "@/store/useCreatorCtx";

const variableCheck = (variable, steps) => {
  return steps.some((step) => step.includes(`<<var:${variable}>>`));
};

const CreatorForm = () => {
  const ctx = useCreatorCtx();
  const {
    vendor,
    title,
    author,
    authorEmail,
    description,
    variables,
    steps,
    addErrorMsg,
  } = ctx;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (steps.length === 0) {
      addErrorMsg("steps", "You must add at least one step to your guide.");
      return;
    }

    const redundantVariables = [];

    for (const variable of variables) {
      !variableCheck(variable.name, steps) &&
        redundantVariables.push(variable.name);
    }

    if (redundantVariables.length > 0) {
      addErrorMsg(
        "steps",
        `The following variables are not used in any steps: ${redundantVariables
          .map((v) => `<${v}>`)
          .join(
            ", "
          )}. Please remove them or update your steps to include them.`
      );
      return;
    }
  };

  return (
    <form className="max-w-[1000px] mx-auto" onSubmit={handleSubmit}>
      <VendorsList />
      <SummaryFormSection />
      <AddVariablesSection />
      <hr className="border-light-grey mx-8" />
      <AddStepsSection />
      <div className="flex flex-col mt-12 mx-4">
        <p className="font-navy text-center md:text-left">
          Please carefully review your guide and information before submitting.
          Once submitted, the guide will reviewed by one our team and you will
          be notified of the outcome via email.
        </p>
        <button
          className="p-4 rounded-sm bg-dark-green text-white outline-none cursor-pointer hover:bg-green-600 transition-colors duration-300 mt-8 w-full md:w-60"
          type="submit"
        >
          Submit for review
        </button>
      </div>
    </form>
  );
};

export default CreatorForm;
