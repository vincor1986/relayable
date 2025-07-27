const SelectVariable = ({
  label,
  name,
  value,
  onChange,
  description,
  errorMessage,
  variations = [],
  required = true,
  autoFocus = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-bold text-dark-grey">
        {label.toUpperCase()}{" "}
        {required ? <span className="text-blue">*</span> : null}
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-navy rounded-sm focus:outline-none"
          required={required}
          autoFocus={autoFocus}
        >
          <option value="" disabled>
            Select {label.toLowerCase()}
          </option>
          {variations.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p className="text-red-800">{errorMessage}</p>
      </label>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default SelectVariable;
