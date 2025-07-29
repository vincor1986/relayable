"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import SectionTitle from "../ui/Section-title";
import TextInput from "../ui/Text-input";
import Textarea from "../ui/Textarea";
import EditVariable from "./Edit-variable";
import EditStep from "./Edit-step";
import SmallButton from "../ui/SmallButton";
import LoadingModal from "../ui/Loading-modal";

import useNotificationCtx from "@/store/useNotificationCtx";
import {
  approvePendingGuide,
  editGuide,
  rejectPendingGuide,
} from "@/actions/actions";

const processVariations = (variables) => {
  return variables.map((v) => {
    if (v.enum && typeof v.variations === "string") {
      return {
        ...v,
        variations: v.variations
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),
      };
    }
    return v;
  });
};

const EditGuideView = ({ guide, type = "edit" }) => {
  const [formData, setFormData] = useState(guide);
  const [loading, setLoading] = useState(false);
  const [authCode, setAuthCode] = useState("");

  const { notifyUser } = useNotificationCtx();
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newVariables = processVariations(formData.variables);
    const updatedFormData = {
      ...formData,
      variables: newVariables,
    };

    switch (type) {
      case "edit":
        setLoading(true);
        const [_, editError] = await editGuide(updatedFormData, authCode);
        if (editError) {
          notifyUser("warning", editError);
          setLoading(false);
        } else {
          notifyUser("success", "Guide edited successfully!");
          router.push(`/guides/${guide.vendorSlug}/${guide.slug}`);
        }
        return;
      case "review":
        setLoading(true);
        const [__, error] = await approvePendingGuide(
          updatedFormData,
          authCode
        );
        if (error) {
          setLoading(false);
          notifyUser("warning", error);
        } else {
          notifyUser("success", "Guide approved successfully!");
          router.push(`/guides/${guide.vendorSlug}/${guide.slug}`);
        }
        return;
      default:
        console.error("Unknown type provided to EditGuideView");
        return;
    }
  };

  const handleUpdateField = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateVariableField = (index, field, value) => {
    setFormData((prevData) => {
      const updatedVariable = { ...prevData.variables[index], [field]: value };
      const updatedVariables = [...prevData.variables];
      updatedVariables[index] = updatedVariable;
      return {
        ...prevData,
        variables: updatedVariables,
      };
    });
  };

  const handleRemoveVariable = (index) => {
    setFormData((prevData) => {
      const updatedVariables = prevData.variables.filter((_, i) => i !== index);
      return {
        ...prevData,
        variables: updatedVariables,
      };
    });
  };

  const toggleEnum = (index) => {
    setFormData((prevData) => {
      const updatedVariable = {
        ...prevData.variables[index],
        enum: !prevData.variables[index].enum,
      };
      const updatedVariables = [...prevData.variables];
      updatedVariables[index] = updatedVariable;
      return {
        ...prevData,
        variables: updatedVariables,
      };
    });
  };

  const toggleMultiple = (index) => {
    setFormData((prevData) => {
      const updatedVariable = {
        ...prevData.variables[index],
        multipleValues: !prevData.variables[index].multipleValues,
      };
      const updatedVariables = [...prevData.variables];
      updatedVariables[index] = updatedVariable;
      return {
        ...prevData,
        variables: updatedVariables,
      };
    });
  };

  const handleEditStep = (index, value) => {
    setFormData((prevData) => {
      const updatedSteps = [...prevData.steps];
      updatedSteps[index] = value;
      return {
        ...prevData,
        steps: updatedSteps,
      };
    });
  };

  const handleReject = async () => {
    switch (type) {
      case "edit":
        router.push(`/guides/${guide.vendorSlug}/${guide.slug}`);
        notifyUser("info", "Edit cancelled.");
        return;
      case "review":
        const [_, error] = await rejectPendingGuide(guide.id, authCode);
        if (error) {
          notifyUser("warning", error);
        } else {
          notifyUser("success", "Guide rejected successfully!");
          router.push("/guides/review-pending");
        }
        return;
      default:
        console.error("Unknown type provided to EditGuideView");
        return;
    }
  };

  return (
    <section className="p-4">
      <SectionTitle>
        {type === "edit" ? "Edit Guide" : "Review Pending Guide"}
      </SectionTitle>
      <form onSubmit={handleFormSubmit} className="my-6">
        <TextInput
          name="vendor"
          value={formData.vendor}
          onChange={handleUpdateField}
          label="Vendor"
        />
        <TextInput
          name="title"
          value={formData.title}
          onChange={handleUpdateField}
          label="Title"
        />
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleUpdateField}
          label="Description"
          rows={3}
        />
        <TextInput
          name="author"
          value={formData.author}
          onChange={handleUpdateField}
          label="Author"
        />
        <TextInput
          name="authorEmail"
          value={formData.authorEmail}
          onChange={handleUpdateField}
          label="Author Email"
        />
        <h2 className="mt-6 font-bold text-navy text-lg">Variables:</h2>
        <hr className="border-2 border-navy/40 mb-8" />
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {formData.variables.map((variable, index) => (
            <EditVariable
              key={index}
              index={index}
              variable={variable}
              updateField={updateVariableField}
              toggleEnum={() => toggleEnum(index)}
              toggleMultiple={() => toggleMultiple(index)}
              handleRemove={() => handleRemoveVariable(index)}
            />
          ))}
        </div>
        <h2 className="mt-4 mb-2 font-bold text-navy text-lg">Steps:</h2>
        <hr className="border-2 border-navy/40 mb-8" />
        <div className="flex-col  gap-4">
          {formData.steps.map((step, index) => (
            <EditStep
              key={index}
              index={index}
              step={step}
              handleEditStep={handleEditStep}
            />
          ))}
        </div>
        <div className="mt-16">
          <TextInput
            name="authCode"
            value={authCode}
            onChange={(e) => setAuthCode(e.target.value)}
            label="Authorization Code"
          />
        </div>
        <div className="flex items-center py-10 gap-4">
          <button
            type="submit"
            className="bg-dark-green py-2 px-4 text-white font-bold rounded-md cursor-pointer hover:bg-green-700 transition-colors outline-none"
          >
            {type == "edit" ? "Save Edit" : "Approve"}
          </button>
          <SmallButton type="warning" onClick={handleReject}>
            {type == "edit" ? "Cancel" : "Reject"}
          </SmallButton>
        </div>
      </form>
      <LoadingModal isLoading={loading} message="Submitting guide..." />
    </section>
  );
};

export default EditGuideView;
