const BurgerIcon = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer relative z-50"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div
        className={`relative w-10 h-1 bg-navy transition-all duration-400 ${
          isOpen ? "top-3 rotate-45 origin-center bg-white" : null
        }`}
      ></div>
      <div
        className={`mt-2 mb-2 w-10 h-1 bg-navy transition-all duration-400 ${
          isOpen ? "opacity-0" : null
        }`}
      ></div>
      <div
        className={`relative w-10 h-1 bg-navy transition-all duration-400 ${
          isOpen ? "-top-3 -rotate-45 origin-center bg-white" : null
        }`}
      ></div>
    </div>
  );
};

export default BurgerIcon;
