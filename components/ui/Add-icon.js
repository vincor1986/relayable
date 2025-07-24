const AddIcon = ({}) => {
  return (
    <div
      className={`relative flex w-10 h-10 border-4 border-light-grey bg-zinc-100 rounded-full items-center justify-center shadow-md cursor-pointer hover:bg-zinc-200 transition-colors duration-300`}
    >
      <span className="absolute top-1/2 left-1/2 -translate-1/2 w-1/2 h-1 bg-grey" />
      <span className="absolute top-1/2 left-1/2 -translate-1/2 w-1/2 h-1 rotate-90 bg-grey" />
    </div>
  );
};

export default AddIcon;
