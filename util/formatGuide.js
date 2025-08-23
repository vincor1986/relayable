const formatGuide = (guide) => {
  const variablesArr = [];

  guide.variables &&
    guide.variables.forEach((variable) => {
      if (
        variable.variations?.length > 0 &&
        typeof variable.variations === "string"
      ) {
        const newVariations = variable.variations
          .split(",")
          .map((variation) => variation.trim())
          .filter((variation) => variation !== "");
        variablesArr.push({ ...variable, variations: newVariations });
      } else {
        variablesArr.push(variable);
      }
    });

  return {
    ...guide,
    variables: variablesArr,
    id: guide._id.toString(),
    _id: guide._id.toString(),
  };
};

export default formatGuide;
