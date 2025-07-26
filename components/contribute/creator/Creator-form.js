"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import VendorsList from "@/components/contribute/creator/Vendors-list";
import SummaryFormSection from "@/components/contribute/creator/Summary-form-section";
import AddVariablesSection from "@/components/contribute/creator/Add-variables-section";
import AddStepsSection from "@/components/contribute/creator/Add-steps-section";

import { submitGuide } from "@/actions/actions";
import LoadingModal from "@/components/ui/Loading-modal";

import useNotificationCtx from "@/store/useNotificationCtx";
import useCreatorCtx from "@/store/useCreatorCtx";

const variableCheck = (variable, steps) => {
  return steps.some((step) => step.includes(`<<var:${variable}>>`));
};

const CreatorForm = () => {
  const [sending, setSending] = useState(false);

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

  const notificationCtx = useNotificationCtx();
  const { notifyUser } = notificationCtx;

  const router = useRouter();

  const handleSubmit = async (e) => {
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

    const guideData = {
      vendor,
      title,
      author,
      authorEmail,
      description,
      variables,
      steps,
      submittedAt: new Date().toISOString(),
    };

    setSending(true);

    const [outcome, error] = await submitGuide(guideData);

    if (error) {
      notifyUser("warning", error);
    } else {
      notifyUser(
        "success",
        "Guide submitted successfully! Thanks for your contribution."
      );
    }

    setSending(false);
    router.push("/contribute/thank-you");
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
      <LoadingModal isLoading={sending} message="Submitting your guide..." />
    </form>
  );
};

export default CreatorForm;
