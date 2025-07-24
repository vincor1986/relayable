const SmallButton = ({ onClick, className, type, children }) => {
  const color =
    type === "warning"
      ? "bg-red-800 hover:bg-red-600"
      : type === "success"
      ? "bg-dark-green hover:bg-green-600"
      : "bg-navy hover:bg-blue";

  return (
    <button
      className={
        "px-4 py-2 text-white cursor-pointer  transition-colors duration-300 rounded-md " +
        className +
        " " +
        color
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SmallButton;
