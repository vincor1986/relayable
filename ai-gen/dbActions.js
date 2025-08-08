const slugify = require("slugify");

const formatGuide = require("./formatGuide");
const initClient = require("./initDbClient");

const SEARCH_FILTER = {
  projection: {
    _id: true,
    id: true,
    vendorSlug: true,
    title: true,
    vendor: true,
    slug: true,
    description: true,
    author: true,
    category: true,
  },
};

const submitGuide = async (formData) => {
  const { vendor, title, category, author, authorEmail, description, steps } =
    formData;

  if (
    !vendor ||
    !title ||
    !category ||
    !author ||
    !authorEmail ||
    !description ||
    steps.length === 0
  ) {
    return [false, "Missing required fields for guide submission"];
  }

  const client = initClient();

  try {
    const db = client.db("guides");
    const collection = db.collection("pending");

    const slug = slugify(title, { lower: true, strict: true });
    const vendorSlug = slugify(vendor, { lower: true, strict: true });

    await collection.insertOne({
      ...formData,
      slug,
      vendorSlug,
      approved: false,
    });

    client.close();
    return [true, null];
  } catch (error) {
    console.error("Error submitting guide:", error);

    client.close();
    return [false, "Failed to submit guide"];
  }
};

const queryGuides = async (vendorName) => {
  const client = initClient();

  try {
    const db = client.db("guides");
    const collectionA = db.collection("approved");
    const collectionB = db.collection("pending");

    const guidesA = await collectionA
      .find({ vendor: vendorName }, SEARCH_FILTER)
      .toArray();

    const guidesB = await collectionB
      .find({ vendor: vendorName }, SEARCH_FILTER)
      .toArray();

    client.close();
    return [[...guidesA.map(formatGuide), ...guidesB.map(formatGuide)], null];
  } catch (error) {
    console.error("Error querying guides:", error);
    client.close();
    return [false, "Failed to query guides"];
  }
};

const renameFields = async () => {
  const client = initClient();

  try {
    const db = client.db("guides");

    const collectionA = db.collection("approved");
    const guides = await collectionA.find().toArray();

    for (const guide of guides) {
      const newVariables = guide.variables.map((v) => ({
        ...v,
        multipleValues: v.multipleValuesAllowed,
      }));

      await collectionA.updateOne(
        { _id: guide._id },
        {
          $set: {
            variables: newVariables,
          },
        }
      );
    }

    const collectionPending = db.collection("pending");
    const guidesB = await collectionPending.find().toArray();

    for (const guide of guidesB) {
      const newVariables = guide.variables.map((v) => ({
        ...v,
        multipleValues: v.multipleValuesAllowed,
      }));

      await collectionPending.updateOne(
        { _id: guide._id },
        {
          $set: {
            variables: newVariables,
          },
        }
      );
    }

    client.close();
    return [true, null];
  } catch (error) {
    console.error("Error querying guides:", error);
    client.close();
    return [false, error];
  }
};

module.exports = {
  submitGuide,
  queryGuides,
  renameFields,
};
