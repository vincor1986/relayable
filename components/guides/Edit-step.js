import Textarea from "../ui/Textarea";

const EditStep = ({ step, index, handleEditStep }) => {
  return (
    <Textarea
      label={"step " + (index + 1)}
      name={"step " + (index + 1)}
      value={step}
      onChange={(e) => handleEditStep(index, e.target.value)}
      rows={2}
    />
  );
};

export default EditStep;
