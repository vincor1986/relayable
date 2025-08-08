const { submitGuide } = require("./dbActions");
const generatePrompt = require("./generatePrompt");
const gptRequest = require("./gptRequest");
const ALL_VENDORS = require("./vendors");

const generate = async (vendorName) => {
  const prompt = await generatePrompt(vendorName);
  return await gptRequest(prompt, vendorName);
};

const runAIGen = async () => {
  let index = 15;

  while (index < ALL_VENDORS.length) {
    const vendorName = ALL_VENDORS[index];
    console.log(`Generating guide for ${vendorName}...`);

    try {
      const guide = await generate(vendorName);

      if (guide) {
        console.log(`Guide created for ${vendorName}:`, guide);
        await submitGuide(guide);
        console.log(guide.title);
      } else {
        console.log(`No guide created for ${vendorName}.`);
      }
    } catch (error) {
      console.error(`Error generating guide for ${vendorName}:`, error);
    }

    index++;
    if (index === ALL_VENDORS.length) {
      console.log("All vendors processed.");
      index = 0;
    }
  }
};

runAIGen().catch((error) => {
  console.error("Error in runAIGen:", error);
  process.exit(1);
});
