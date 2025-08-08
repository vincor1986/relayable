const { renameFields } = require("./dbActions");

(async () => {
  const [outcome, error] = await renameFields();

  if (error) console.log(error);
})();
