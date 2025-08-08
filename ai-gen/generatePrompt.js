const { queryGuides } = require("./dbActions");

const generatePrompt = async (vendorName) => {
  const [existingGuides, error] = await queryGuides(vendorName);

  if (error) {
    return console.error("Error fetching guides:", error);
  }

  const guideList =
    existingGuides.length == 0 || !existingGuides
      ? "There are currently no guides for this vendor"
      : existingGuides.map((guide) => guide.title).join("\n");

  return `
You are an expert guide creator. You're working for a company that offers interactive guides for web developers to share with their clients to make tasks like granting or revoking developer access simpler. Your task is to create a comprehensive guide for a ${vendorName} task.

You should choose a task that is relevant to ${vendorName} and that you have not already created a guide for. The task should be something that developers often need to create bespoke guides for non-technical clients for, such as granting access, setting up an account, or configuring a service.

Here are the existing guides for ${vendorName}:
${guideList}

Please do not create a guide for any of the above tasks. Instead, choose a new task that is not already covered by these guides.
    
Please use the "createUserGuide" function to create a new guide. The guide should include the following:
- A title that clearly describes the task.
- A vendor name that matches the vendor you are creating the guide for.
- A category that is relevant to the task (e.g., "Granting access", "Revoking access", "Other").
- A brief description of what the guide enables the user to accomplish.
- A list of variables that should be used in the guide, including their names, types, descriptions, and any variations if applicable.
- A list of steps to complete the task, starting right at the beginning and including any relevant variables in the format '<<var:variable_name>>' so that variables can be injected once the developer has entered their details for the relevant variable.

Do your best and create a guide that is clear, concise, and easy to follow. Remember to use the provided function to create the guide. Do your best work and make me proud! And thank you in advance for all your hard work.
    `;
};

module.exports = generatePrompt;
