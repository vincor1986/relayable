import TickBox from "../contribute/creator/Tick-box";
import SmallButton from "../ui/SmallButton";
import Textarea from "../ui/Textarea";
import SelectVariable from "./Select-variable";

const { default: TextInput } = require("../ui/Text-input");

const EditVariable = ({
  variable,
  index,
  updateField,
  toggleRequired,
  toggleMultiple,
  handleRemove,
}) => {
  return (
    <div className="border border-ligh-grey rounded-sm p-4 m-2">
      <TextInput
        name="name"
        value={variable.name}
        onChange={(e) => updateField(index, "name", e.target.value)}
        label="Variable Name"
      />
      <SelectVariable
        name="type"
        value={variable.type}
        onChange={(e) => updateField(index, "type", e.target.value)}
        label="Variable Type"
        variations={["text", "number", "email", "boolean", "date", "enum"]}
      />
      <Textarea
        name="description"
        value={variable.description}
        onChange={(e) => updateField(index, "description", e.target.value)}
        label="Variable Description"
      />
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2">
          <TickBox checked={variable.required} toggle={toggleRequired} />
          <p className="text-navy font-bold text-sm">
            Is this variable required in all instances?
          </p>
        </div>
        {variable.type == "enum" ? (
          <div className="flex items-center gap-2">
            <TickBox
              checked={variable.multipleValues}
              toggle={toggleMultiple}
            />
            <p className="text-navy font-bold text-sm">
              Allow multiple values?
            </p>
          </div>
        ) : null}
      </div>
      {variable.type == "enum" ? (
        <TextInput
          name="variations"
          value={variable.variations}
          onChange={(e) => updateField(index, "variations", e.target.value)}
          label="Enum Variations"
          required={variable.enum}
        />
      ) : null}
      <SmallButton type="warning" onClick={handleRemove}>
        Remove Variable
      </SmallButton>
    </div>
  );
};

export default EditVariable;
