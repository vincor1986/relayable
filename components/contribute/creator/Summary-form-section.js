"use client";

import TextInput from "@/components/ui/Text-input";
import Textarea from "@/components/ui/Textarea";

import useCreatorCtx from "@/store/useCreatorCtx";

const SummaryFormSection = () => {
  const ctx = useCreatorCtx();
  const { title, description, author, updateFormData } = ctx;

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  return (
    <form className="p-4">
      <TextInput
        label={"Title"}
        name={"title"}
        placeholder='e.g. "Add Collaborator"'
        onChange={handleFormInput}
        value={title}
      />
      <TextInput
        label={"Author"}
        name={"author"}
        placeholder="Your full name, username or alias"
        onChange={handleFormInput}
        value={author}
      />
      <Textarea
        label={"Description"}
        name={"description"}
        placeholder='A brief description of what outcome this guide will achieve, e.g. "This guide will help you add a collaborator to your project."'
        onChange={handleFormInput}
        value={description}
      />
    </form>
  );
};

export default SummaryFormSection;
