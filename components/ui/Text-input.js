const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  errorMessage,
  className = "",
  inputClassName = "",
  type = "text",
  required = true,
  autoFocus = false,
  data_testid = "",
  ref = null,
  autoComplete = "off",
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={name} className="block text-sm font-bold text-dark-grey">
        {label.toUpperCase()}{" "}
        {required ? <span className="text-blue">*</span> : null}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border border-navy rounded-sm focus:outline-none ${inputClassName}`}
          required={required}
          autoFocus={autoFocus}
          data-testid={data_testid}
          ref={ref}
          autoComplete={autoComplete}
        />
        <p className="text-red-800">{errorMessage}</p>
      </label>
    </div>
  );
};

export default TextInput;
