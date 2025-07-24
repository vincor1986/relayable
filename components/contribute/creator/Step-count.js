const StepCount = ({ stepCount }) => {
  return (
    <div className="absolute p-1 px-2 top-0 left-10 md:left-0 -translate-1/2 bg-navy text-white rounded-sm text-xs">
      STEP {stepCount}
    </div>
  );
};

export default StepCount;
