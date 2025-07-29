import TickBox from "../contribute/creator/Tick-box";

const MultipleVariable = ({
  label,
  name,
  value,
  handleMultipleVariableUpdate,
  description,
  errorMessage,
  variations = [],
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-bold text-dark-grey">
        {label.toUpperCase()} <span className="text-blue">*</span>
        <div className="flex flex-wrap gap-6 w-full px-4 py-2 border border-navy rounded-sm focus:outline-none">
          {variations.map((option) => (
            <div key={option} className="flex items-center gap-2">
              <TickBox
                key={option}
                checked={value.includes(option)}
                value={option}
                toggle={() => handleMultipleVariableUpdate(name, option)}
              />
              <p>{option}</p>
            </div>
          ))}
        </div>
        <p className="text-red-800">{errorMessage}</p>
      </label>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default MultipleVariable;
