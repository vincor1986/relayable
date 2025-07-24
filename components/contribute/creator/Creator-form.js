"use client";

import { useState } from "react";

import VendorsList from "@/components/contribute/creator/Vendors-list";
import SummaryFormSection from "@/components/contribute/creator/Summary-form-section";
import AddVariablesSection from "@/components/contribute/creator/Add-variables-section";
import AddStepsSection from "@/components/contribute/creator/Add-steps-section";

const CreatorForm = () => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <VendorsList />
      <SummaryFormSection />
      <AddVariablesSection />
      <hr className="border-light-grey mx-8" />
      <AddStepsSection />
    </div>
  );
};

export default CreatorForm;
