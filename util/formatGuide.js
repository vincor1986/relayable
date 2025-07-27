const formatGuide = (guide) => {
  return {
    ...guide,
    id: guide._id.toString(),
    _id: guide._id.toString(),
  };
};

export default formatGuide;
