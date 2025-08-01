"use client";

import SelectVariable from "@/components/guides/Select-variable";
import TextInput from "@/components/ui/Text-input";
import Textarea from "@/components/ui/Textarea";

import useCreatorCtx from "@/store/useCreatorCtx";

const SummaryFormSection = () => {
  const ctx = useCreatorCtx();
  const { title, description, author, authorEmail, category, updateFormData } =
    ctx;

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  return (
    <div className="p-4">
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
      <TextInput
        label={"Author Email"}
        name={"authorEmail"}
        placeholder="Your email address, e.g. 'your.email@example.com'"
        onChange={handleFormInput}
        value={authorEmail}
        type="email"
      />
      <SelectVariable
        label="Category"
        name="category"
        onChange={handleFormInput}
        value={category}
        type="text"
        variations={["Granting access", "Revoking access", "Other"]}
      />
      <Textarea
        label={"Description"}
        name={"description"}
        placeholder='A brief description of what outcome this guide will achieve, e.g. "Adding a collaborator to your GitHub repository."'
        onChange={handleFormInput}
        value={description}
      />
    </div>
  );
};

export default SummaryFormSection;
