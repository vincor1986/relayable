import SmallButton from "@/components/ui/SmallButton";

const VariableOverview = ({
  variable,
  handleDeleteVariable,
  handleEditVariable,
}) => {
  const labels = ["type", "description", "required"];

  console.log(variable);

  return (
    <div className="mb-4 p-4 border border-light-grey rounded-sm">
      <h2 className="font-bold text-lg text-navy">{variable.name}</h2>
      <hr className="border-navy/20 bg-navy/20 h-1 mb-3" />
      {labels.map((label) => (
        <div key={label} className="grid grid-cols-10 mb-2">
          <span className="font-bold text-sm text-navy mr-6 col-span-5 md:col-span-5">
            {label}:
          </span>
          <span className="text-sm text-dark-grey col-span-5">
            {variable[label] ? variable[label].toString() : "N/A"}
          </span>
        </div>
      ))}
      {variable.type === "enum" ? (
        <div className="grid grid-cols-10 mb-2">
          <span className="font-bold text-sm text-navy mr-6 col-span-5 md:col-span-5">
            allow multiple values:
          </span>
          <span className="text-sm text-dark-grey col-span-5">
            {variable.multipleValues.toString()}
          </span>
          <span className="font-bold text-sm text-navy mr-6 col-span-5 md:col-span-5">
            enum values:
          </span>
          <span className="text-sm text-dark-grey col-span-5">
            {variable.variations.replaceAll(",", ", ")}
          </span>
        </div>
      ) : null}
      <div className="flex gap-2 flex-wrap mt-4 mb-2">
        <SmallButton type="info" onClick={handleEditVariable}>
          Edit
        </SmallButton>
        <SmallButton type="warning" onClick={handleDeleteVariable}>
          Remove
        </SmallButton>
      </div>
    </div>
  );
};

export default VariableOverview;
