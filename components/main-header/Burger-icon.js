const BurgerIcon = ({ isOpen, setIsOpen, className, ref }) => {
  return (
    <button
      className={
        className ||
        "relative flex flex-col justify-center items-center cursor-pointer z-60"
      }
      onClick={() => setIsOpen((prev) => !prev)}
      aria-label="Open mobile menu"
      aria-controls="burger-menu"
      ref={ref}
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
    </button>
  );
};

export default BurgerIcon;
