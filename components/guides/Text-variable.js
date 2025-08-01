import TextInput from "../ui/Text-input";

const TextVariable = ({ name, description, value, setValue }) => {
  return (
    <div className="my-6">
      <TextInput
        value={value}
        name={name}
        onChange={(e) => setValue(name, e.target.value)}
        label={name}
      />
      <p className="mt-[-10px] text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default TextVariable;
