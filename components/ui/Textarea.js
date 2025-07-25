const Textarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  errorMessage,
  rows = 4,
  required = true,
  ref = null,
  autoFocus = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-bold text-dark-grey">
        {label.toUpperCase()}{" "}
        {required ? <span className="text-blue">*</span> : null}
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-navy rounded-sm focus:outline-none"
          rows={rows}
          required={required}
          ref={ref || undefined}
          autoFocus={autoFocus}
        />
      </label>
      <p className="text-red-800">{errorMessage}</p>
    </div>
  );
};

export default Textarea;
