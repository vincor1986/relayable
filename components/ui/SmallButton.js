const SmallButton = ({
  onClick,
  className,
  type,
  children,
  disabled = false,
  data_testid = "",
  submit = false,
}) => {
  const color =
    type === "warning"
      ? "bg-red-800 hover:bg-red-600"
      : type === "success"
      ? "bg-dark-green hover:bg-green-600"
      : "bg-navy hover:bg-blue";

  return (
    <button
      className={
        "flex items-center justify-center gap-4 px-4 py-2 text-white cursor-pointer  transition-colors duration-300 rounded-md " +
        className +
        " " +
        color
      }
      onClick={onClick}
      disabled={disabled}
      data-testid={data_testid}
      type={submit ? "submit" : "button"}
    >
      {children}
    </button>
  );
};

export default SmallButton;
