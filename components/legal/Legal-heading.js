const LegalHeading = ({ children }) => {
  return (
    <>
      <h1 className="mt-6 text-lg font-bold text-navy dark:text-gray-200">
        {children}
      </h1>
      <hr className="h-1 mb-2 border-none bg-blue/40" />
    </>
  );
};

export default LegalHeading;
