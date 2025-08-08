import TickBox from "../contribute/creator/Tick-box";
import DateVariable from "./DateVariable";
import MultipleVariable from "./Multiple-variable";
import SelectVariable from "./Select-variable";
import TextVariable from "./Text-variable";

const GuideVariable = ({
  variable,
  variables,
  handleVariableUpdate,
  handleMultipleVariableUpdate,
  handleBoolUpdate,
}) => {
  if (["text", "number", "email"].includes(variable.type)) {
    return (
      <TextVariable
        value={variables[variable.name]}
        setValue={handleVariableUpdate}
        {...variable}
        data_testid={`variable-${variable.name}-input`}
      />
    );
  }

  if (variable.type === "boolean") {
    return (
      <>
        <div className="flex items-center gap-2 my-6">
          <TickBox
            checked={variables[variable.name]}
            toggle={() => handleBoolUpdate(variable.name)}
            data_testid={`variable-${variable.name}-input`}
          />
          <p className="text-sm text-gray-500">{variable.description}</p>
        </div>
        {/* <p className="text-light-grey text-sm">{variable.description}</p> */}
      </>
    );
  }

  if (variable.type === "date") {
    return (
      <DateVariable
        label={variable.name}
        name={variable.name}
        value={variables[variable.name]}
        onChange={(e) => handleVariableUpdate(variable.name, e.target.value)}
        errorMessage={variable.errorMessage}
        required={variable.required}
        autoFocus={variable.autoFocus}
        data_testid={`variable-${variable.name}-input`}
      />
    );
  }

  if (variable.type == "enum") {
    if (variable.multipleValues === true) {
      return (
        <MultipleVariable
          name={variable.name}
          label={variable.name}
          value={variables[variable.name]}
          handleMultipleVariableUpdate={handleMultipleVariableUpdate}
          variations={variable.variations}
          description={variable.description}
        />
      );
    } else {
      return (
        <SelectVariable
          name={variable.name}
          label={variable.name}
          value={variables[variable.name]}
          onChange={(e) => handleVariableUpdate(variable.name, e.target.value)}
          variations={variable.variations}
          description={variable.description}
          data_testid={`variable-${variable.name}-input`}
        />
      );
    }
  }
};

export default GuideVariable;
