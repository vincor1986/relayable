const hRDate = (dateISOStr) =>
  new Date(dateISOStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default hRDate;
