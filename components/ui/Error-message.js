const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <p className="w-full px-4 py-2 grow-0 bg-red-800 text-white text-center font-bold">
      {error}
    </p>
  );
};

export default ErrorMessage;
