import TickBox from "../contribute/creator/Tick-box";
import SmallButton from "../ui/SmallButton";
import Textarea from "../ui/Textarea";

const { default: TextInput } = require("../ui/Text-input");

const EditVariable = ({
  variable,
  index,
  updateField,
  toggleEnum,
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
      <Textarea
        name="description"
        value={variable.description}
        onChange={(e) => updateField(index, "description", e.target.value)}
        label="Variable Description"
      />
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-2">
          <TickBox checked={variable.enum} toggle={toggleEnum} />
          <p className="text-navy font-bold text-sm">
            Is this variable an enum?
          </p>
        </div>
        {variable.enum ? (
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
      <TextInput
        name="variations"
        value={variable.variations}
        onChange={(e) => updateField(index, "variations", e.target.value)}
        label="Enum Variations"
        required={variable.enum}
      />
      <SmallButton type="warning" onClick={handleRemove}>
        Remove Variable
      </SmallButton>
    </div>
  );
};

export default EditVariable;
