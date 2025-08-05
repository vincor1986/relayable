import TextInput from "../ui/Text-input";

const TextVariable = ({
  name,
  description,
  value,
  setValue,
  type,
  required,
  data_testid = "",
}) => {
  return (
    <div className="my-6">
      <TextInput
        value={value}
        name={name}
        onChange={(e) => setValue(name, e.target.value)}
        label={name}
        type={type}
        required={required}
        data_testid={data_testid}
      />
      <p className="mt-[-10px] text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default TextVariable;
