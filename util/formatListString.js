const formatListString = (arr) => {
  if (["boolean", "string", "date"].includes(typeof arr)) return arr;

  const string = arr
    .map((item) => item.trim())
    .filter((item) => item !== "")
    .join(", ");

  return string.replace(/,(?=[^,]*$)/, " and");
};

export default formatListString;
