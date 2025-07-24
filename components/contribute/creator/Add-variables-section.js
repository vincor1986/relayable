"use client";

import Image from "next/image";
import { useState } from "react";

import AddIcon from "@/components/ui/Add-icon";

import addVariableImg from "@/public/images/icons/add-variable.png";
import NewVariableForm from "./New-variable-form";
import VariableBadge from "./Variable-badge";

import useCreatorCtx from "@/store/useCreatorCtx";

const DEFAULT_VARIABLE = {
  name: "",
  enum: false,
  variations: [],
  options: [],
  description: "",
};

const AddVariablesSection = () => {
  const [showVariableForm, setShowVariableForm] = useState(false);
  const [variableData, setVariableData] = useState(DEFAULT_VARIABLE);

  const ctx = useCreatorCtx();
  const { variables, updateFormData } = ctx;

  const handleSaveVariable = () => {
    updateFormData("variables", variableData, false, "add");
    setVariableData(DEFAULT_VARIABLE);
    setShowVariableForm(false);
  };

  const handleDeleteVariable = (index) => {
    updateFormData("variables", null, index, "remove");
  };

  const clearForm = () => {
    setVariableData(DEFAULT_VARIABLE);
    setShowVariableForm(false);
  };

  return (
    <div className="p-4">
      <div className="flex gap-4 items-center">
        <Image src={addVariableImg} alt="Add Variables icon" className="w-16" />
        <div className="w-full">
          <h4 className="w-full p-3 bg-navy rounded-sm mb-1 text-white font-bold text-lg">
            Add variable(s) to make this guide customisable
          </h4>
          <p className="italic text-dark-grey">
            These variables will be available to the user when creating their
            bespoke guide, with the final guide being populated dynamically
            based on their inputs.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap my-4 p-4 gap-4 items-center border border-light-grey rounded-md">
        <p>Saved variables:</p>
        {variables.length === 0 ? (
          <p className="text-light-grey">NONE</p>
        ) : (
          variables.map((variable, index) => (
            <VariableBadge
              key={variable.name}
              variable={variable}
              handleDeleteVariable={() => handleDeleteVariable(index)}
            />
          ))
        )}
      </div>
      {!showVariableForm ? (
        <div
          className="flex pl-18 py-2 gap-3 items-center cursor-pointer"
          onClick={() => setShowVariableForm(true)}
        >
          <AddIcon />
          <p className="font-bold text-navy">Add a new variable</p>
        </div>
      ) : (
        <NewVariableForm
          variableData={variableData}
          setVariableData={setVariableData}
          handleSaveVariable={handleSaveVariable}
          clearForm={clearForm}
        />
      )}
    </div>
  );
};

export default AddVariablesSection;
