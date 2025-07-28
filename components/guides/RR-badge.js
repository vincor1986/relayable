const RRBadge = ({ reviewRequest }) => {
  return (
    <div className="flex flex-col p-4 shadow-md bg-white rounded-md border-light-grey text-navy">
      <p className="font-bold">Name:</p>
      <p>{reviewRequest.name}</p>
      <br />
      <p className="font-bold">Email:</p>
      <p>{reviewRequest.email}</p>
      <br />
      <p className="font-bold">Reason:</p>
      <p>{reviewRequest.reason}</p>
    </div>
  );
};

export default RRBadge;
