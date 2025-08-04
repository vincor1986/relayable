const DateVariable = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  errorMessage,
  required = true,
  autoFocus = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-bold text-dark-grey">
        {label.toUpperCase()}{" "}
        {required ? <span className="text-blue">*</span> : null}
        <input
          type="date"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-navy rounded-sm focus:outline-none"
          required={required}
          autoFocus={autoFocus}
        />
        <p className="text-red-800">{errorMessage}</p>
      </label>
    </div>
  );
};

export default DateVariable;
