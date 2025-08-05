const formatListString = (arr) => {
  if (["string", "date"].includes(typeof arr)) return arr;
  if (typeof arr === "boolean") return arr.toString();

  const string = arr
    .map((item) => item.trim())
    .filter((item) => item !== "")
    .join(", ");

  return string.replace(/,(?=[^,]*$)/, " and");
};

export default formatListString;
