"use client";

import TextInput from "@/components/ui/Text-input";
import Textarea from "@/components/ui/Textarea";
import TickBox from "./Tick-box";
import SmallButton from "@/components/ui/SmallButton";

const NewVariableForm = ({
  handleSaveVariable,
  variableData,
  setVariableData,
  clearForm,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVariableData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEnum = () => {
    setVariableData((prev) => ({ ...prev, enum: !prev.enum }));
  };

  return (
    <div className="mt-8 px-4 py-8 relative border border-light-grey">
      <h4 className="absolute top-0 -translate-y-full my-4 px-4 text-dark-grey font-bold text-lg bg-white">
        Add a new variable below
      </h4>
      <TextInput
        label="Variable name"
        name="name"
        value={variableData.name}
        onChange={handleInputChange}
        placeholder="Variable name such as 'username' or 'IP_address'"
      />
      <Textarea
        label="Description"
        name="description"
        value={variableData.description}
        onChange={handleInputChange}
        placeholder="A short description of the variable, e.g. 'The username to be approved'"
        rows={2}
      />
      <div className="flex items-center gap-4 mb-4">
        <TickBox checked={variableData.enum} toggle={toggleEnum} />
        <p>Is this variable an enum?</p>
      </div>
      {variableData.enum ? (
        <TextInput
          label="Permitted Enum values (comma-separated)"
          name="variations"
          value={variableData.variations}
          onChange={handleInputChange}
          placeholder="e.g. 'admin, user, guest'"
        />
      ) : null}

      <div className="flex items-center gap-4">
        <SmallButton type="info" onClick={handleSaveVariable}>
          Save
        </SmallButton>
        <p className="text-red-800 text-md cursor-pointer" onClick={clearForm}>
          Clear
        </p>
      </div>
    </div>
  );
};

export default NewVariableForm;
