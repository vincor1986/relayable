"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useReCaptcha } from "next-recaptcha-v3";

import SectionTitle from "@/components/ui/Section-title";
import VendorsList from "@/components/ai-gen/Vendors-list";
import TextInput from "@/components/ui/Text-input";
import Textarea from "@/components/ui/Textarea";
import SmallButton from "@/components/ui/SmallButton";
import LoadingSection from "@/components/ai-gen/Loading-section";

import generateGuide from "@/util/ai-gen/generateGuide";
import useNotificationCtx from "@/store/useNotificationCtx";
import useAIGenerated from "@/hooks/useAIGenerated";

const DEFAULT_DATA = {
  vendor: "",
  title: "",
  notes: "",
};

const AICreatePage = () => {
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [generating, setGenerating] = useState(false);

  const { executeRecaptcha } = useReCaptcha();

  const { notifyUser } = useNotificationCtx();
  const { addAIGuide } = useAIGenerated();

  const router = useRouter();

  const updateVendor = useCallback((str) => {
    setFormData((prev) => ({ ...prev, vendor: str }));
  }, []);

  const handleInput = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const formIsValid = formData.title && formData.vendor;

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    setGenerating(true);

    const token = await executeRecaptcha("form_submit");

    if (!token) {
      setGenerating(false);
      return;
    }

    const data = { ...formData, token };
    const [id, error] = await generateGuide(data);

    if (error) {
      setGenerating(false);
      notifyUser("warning", "Something went wrong - " + error);
    } else {
      addAIGuide(id);
      notifyUser("success", "Guide generated successfully!");
      router.push(`/ai/${id}`);
    }
  };

  if (generating) {
    return (
      <section className="min-h-screen p-4">
        <SectionTitle>Create a new AI generated guide</SectionTitle>
        <LoadingSection />
      </section>
    );
  }

  return (
    <section className="min-h-screen p-4">
      <SectionTitle>Create a new AI generated guide</SectionTitle>
      <h3>
        Complete the below form, submit your request and Relayable AI will
        generate your requested interactive guide.
      </h3>
      <form
        className="mt-6 mx-auto max-w-[800px] flex flex-col items-center"
        onSubmit={handleSubmitForm}
      >
        <VendorsList vendor={formData.vendor} updateVendor={updateVendor} />
        <TextInput
          label="Task Title"
          name="title"
          className="w-full"
          value={formData.title}
          onChange={handleInput}
          placeholder="What do you want the walkthrough guide to demonstrate?"
        />
        <Textarea
          label="Task Notes"
          name="notes"
          value={formData.notes}
          onChange={handleInput}
          className="w-full"
          rows={3}
          placeholder="Optional: Please add any additional comments or context you wish Relayable AI to consider when creating the guide."
          required={false}
        />
        <SmallButton type="info" submit={true} disabled={!formIsValid}>
          Submit
        </SmallButton>
      </form>
    </section>
  );
};

export default AICreatePage;
