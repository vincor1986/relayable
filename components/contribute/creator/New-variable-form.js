"use client";

import TextInput from "@/components/ui/Text-input";
import Textarea from "@/components/ui/Textarea";
import TickBox from "./Tick-box";
import SmallButton from "@/components/ui/SmallButton";

import useCreatorCtx from "@/store/useCreatorCtx";
import ErrorMessage from "@/components/ui/Error-message";
import SelectVariable from "@/components/guides/Select-variable";

const NewVariableForm = ({
  handleSaveVariable,
  variableData,
  setVariableData,
  clearForm,
}) => {
  const ctx = useCreatorCtx();
  const { errors } = ctx;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVariableData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEnum = () => {
    setVariableData((prev) => ({ ...prev, enum: !prev.enum }));
  };

  const toggleRequired = () => {
    setVariableData((prev) => ({ ...prev, required: !prev.required }));
  };

  const toggleMultiple = () => {
    setVariableData((prev) => ({
      ...prev,
      multipleValues: !prev.multipleValues,
    }));
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
        autoFocus={true}
        data_testid="variable-name-input"
      />
      <SelectVariable
        label="Variable type"
        name="type"
        value={variableData.type}
        onChange={handleInputChange}
        variations={["text", "number", "email", "boolean", "date", "enum"]}
        data_testid="variable-type-select"
      />
      <Textarea
        label="Description"
        name="description"
        value={variableData.description}
        onChange={handleInputChange}
        placeholder="A short description of the variable, e.g. 'The username to be approved'"
        rows={2}
        data_testid="variable-description-textarea"
      />
      <div className="flex flex-col gap-6 mb-4">
        <div className="flex items-center gap-4">
          <TickBox
            checked={variableData.required}
            toggle={toggleRequired}
            data_testid="variable-required-checkbox"
          />
          <p>Is this variable required in all instances?</p>
        </div>
        {variableData.type == "enum" ? (
          <div className="flex items-center gap-4">
            <TickBox
              checked={variableData.multipleValues}
              toggle={toggleMultiple}
              data_testid="variable-multi-checkbox"
            />
            <p>Allow multiple values?</p>
          </div>
        ) : null}
      </div>
      {variableData.type === "enum" ? (
        <Textarea
          label="Permitted Enum Values (comma-separated)"
          name="variations"
          value={variableData.variations}
          onChange={handleInputChange}
          placeholder="e.g. 'admin, user, guest'"
          rows={2}
          data_testid="variable-variations-textarea"
        />
      ) : null}

      <div className="flex items-center gap-4 my-2">
        <SmallButton
          type="info"
          onClick={handleSaveVariable}
          data_testid="save-variable-button"
        >
          Save
        </SmallButton>
        <p className="text-red-800 text-md cursor-pointer" onClick={clearForm}>
          Clear
        </p>
      </div>
      <ErrorMessage error={errors.variableEntry} />
    </div>
  );
};

export default NewVariableForm;
