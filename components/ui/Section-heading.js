const SectionHeading = ({ children }) => {
  return (
    <div className="mt-16 mb-8 relative h-[2px] bg-light-grey/60 w-full">
      <p className="absolute px-4 py-2 top-0 left-1/2 -translate-1/2 font-bold text-navy bg-white text-center">
        {children}
      </p>
    </div>
  );
};

export default SectionHeading;
