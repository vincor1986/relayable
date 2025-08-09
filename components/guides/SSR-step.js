import StepCount from "../contribute/creator/Step-count";
import VariableText from "./VariableText";

const SSRStep = ({ step, index }) => {
  return (
    <div className="relative border border-light-grey rounded-md my-6 shadow-md p-6">
      <StepCount stepCount={index + 1} />
      <p className="text-dark-grey">
        <VariableText text={step} />
      </p>
    </div>
  );
};

export default SSRStep;
