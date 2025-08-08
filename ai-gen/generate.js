const { queryGuides, submitGuide } = require("./dbActions");
const generatePrompt = require("./generatePrompt");
const gptRequest = require("./gptRequest");
const ALL_VENDORS = require("./vendors");

const generate = async (vendorName) => {
  const prompt = await generatePrompt(vendorName);
  return await gptRequest(prompt, vendorName);
};

const runAIGen = async () => {
  for (const vendor of ALL_VENDORS) {
    const vendorName = vendor.name;
    const existingGuides = await queryGuides(vendorName);
    const count = vendor.count - existingGuides.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const guide = await generate(vendorName);
        if (guide) {
          await submitGuide(guide);
        } else {
          console.error(`Error: No guide created for ${vendorName}.`);
        }
      }
    }

    console.log(`Generated ${count} guides for ${vendorName}.`);
  }

  console.log("ALL GUIDES GENERATED");
};

runAIGen().catch((error) => {
  console.error("Error in runAIGen:", error);
  process.exit(1);
});
