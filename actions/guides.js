"use server";

import slugify from "slugify";
import xss from "xss";
import { compare } from "bcryptjs";
import { ObjectId } from "mongodb";

import initClient from "@/db/init";
import formatGuide from "@/util/formatGuide";

import sanitizer from "@/util/sanitizer";

import { SEARCH_FILTER, FULL_GUIDE_FILTER } from "@/util/dbFilters";

export const submitGuide = async (formData) => {
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

  let sanitizedVariables = [];
  const sanitizedSteps = steps.map((step) => sanitizer(step));
  const sanitizedDescription = xss(description);
  const sanitizedAuthor = xss(author);
  const sanitizedVendor = xss(vendor);
  const sanitizedTitle = xss(title);
  const sanitizedCategory = xss(category);
  const sanitizedAuthorEmail = xss(authorEmail);

  if (formData.variables) {
    sanitizedVariables = formData.variables.map((variable) => ({
      ...variable,
      name: xss(variable.name),
      description: xss(variable.description),
      variations:
        typeof variable.variations === "object"
          ? variable.variations.map((variation) => xss(variation))
          : xss(variable.variations),
    }));
  }

  try {
    const db = client.db("guides");
    const collection = db.collection("pending");

    const slug = slugify(title, { lower: true, strict: true });
    const vendorSlug = slugify(vendor, { lower: true, strict: true });

    await collection.insertOne({
      vendor: sanitizedVendor,
      title: sanitizedTitle,
      author: sanitizedAuthor,
      authorEmail: sanitizedAuthorEmail,
      description: sanitizedDescription,
      variables: sanitizedVariables.length ? sanitizedVariables : [],
      steps: sanitizedSteps,
      category: sanitizedCategory,
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

export const fetchAllGuides = async (type = "approved") => {
  const client = initClient();

  try {
    const db = client.db("guides");
    const collection = db.collection(type);
    const guides = await collection.find({}, SEARCH_FILTER).toArray();

    const formattedGuides = guides.map(formatGuide);

    client.close();
    return [formattedGuides, null];
  } catch (error) {
    console.error("Error fetching guides:", error);

    client.close();
    return [false, "Failed to fetch guides"];
  }
};

export const getIndividualGuide = async (
  vendorSlug,
  slug,
  type = "approved"
) => {
  const client = initClient();

  try {
    const db = client.db("guides");
    const collection = db.collection(type);

    const guide = await collection.findOne(
      { vendorSlug, slug },
      FULL_GUIDE_FILTER
    );

    client.close();
    return [formatGuide(guide), null];
  } catch (error) {
    console.error("Error fetching guide:", error);

    client.close();
    return [false, "Failed to fetch guide"];
  }
};

export const approvePendingGuide = async (updatedGuide, authCode) => {
  const match = await compare(authCode, process.env.AUTH);

  if (!match) {
    console.log("Invalid authorization code");
    return [false, "Invalid authorization code"];
  } else {
    const client = initClient();

    const { id } = updatedGuide;
    const mongoId = new ObjectId(id);

    try {
      const db = client.db("guides");
      const allPending = db.collection("pending");

      const existing = await allPending.findOne({ _id: mongoId });

      if (existing) {
        await allPending.deleteOne({ _id: mongoId });
        const approved = db.collection("approved");

        await approved.insertOne({
          ...updatedGuide,
          _id: mongoId,
          lastUpdated: new Date().toISOString(),
        });
      } else {
        return [false, "Guide not found in pending collection"];
      }

      return [true, null];
    } catch (error) {
      console.log("Error approving guide:", error);
      return [false, "Failed to approve guide"];
    }
  }
};

export const getGuideById = async (id) => {
  const client = initClient();

  try {
    const db = client.db("guides");
    const collection = db.collection("approved");

    const guide = await collection.findOne(
      { _id: new ObjectId(id) },
      FULL_GUIDE_FILTER
    );

    if (!guide) {
      return [false, "Guide not found"];
    }

    client.close();
    return [formatGuide(guide), null];
  } catch (error) {
    console.error("Error fetching guide by ID:", error);
    client.close();
    return [false, "Failed to fetch guide"];
  }
};

export const getGuidesByIds = async (idsArr) => {
  const client = initClient();

  try {
    const db = client.db("guides");
    const collection = db.collection("approved");

    const guides = await collection
      .find({ id: { $in: idsArr } }, SEARCH_FILTER)
      .toArray();

    if (!guides || guides.length === 0) {
      return [false, "No guides found for the provided IDs"];
    }

    const formattedGuides = guides.map(formatGuide);

    client.close();
    return [formattedGuides, null];
  } catch (error) {
    console.error("Error fetching guides by IDs:", error);
    client.close();
    return [false, "Failed to fetch guides"];
  }
};

export const markGuideForReview = async ({ id, name, email, reason }) => {
  const client = initClient();

  try {
    const db = client.db("guides");
    const collection = db.collection("approved");

    const guide = await collection.findOne({ _id: new ObjectId(id) });

    if (!guide) return [false, "Guide not found"];

    const currentReviewRequests = guide.reviewRequests || [];
    const newRRArray = [...currentReviewRequests, { name, email, reason }];

    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { reviewRequests: newRRArray } }
    );

    client.close();
    return [true, null];
  } catch (error) {
    console.error("Error marking guide for review:", error);
    client.close();
    return [false, "Failed to mark guide for review"];
  }
};

export const getPendingGuides = async () => {
  const client = initClient();

  try {
    const db = client.db("guides");
    const collection = db.collection("pending");

    const pendingGuides = await collection.find({}, SEARCH_FILTER).toArray();

    const approvedCollection = db.collection("approved");
    const approvedGuides = await approvedCollection
      .find(
        {
          reviewRequests: { $exists: true, $not: { $size: 0 } },
        },
        SEARCH_FILTER
      )
      .toArray();

    if (!pendingGuides.length && !approvedGuides.length) {
      return [[], [], null];
    }

    const formattedPending = pendingGuides.map(formatGuide);
    const formattedApproved = approvedGuides.map(formatGuide);

    client.close();
    return [formattedPending, formattedApproved, null];
  } catch (error) {
    console.error("Error fetching pending guides:", error);
    client.close();
    return [false, false, "Failed to fetch pending guides"];
  }
};

export const editGuide = async (updatedGuide, authCode) => {
  const match = await compare(authCode, process.env.AUTH);

  if (!match) {
    return [false, "Invalid authorization code"];
  } else {
    try {
      const { id } = updatedGuide;
      const mongoId = new ObjectId(id);

      const client = initClient();
      const db = client.db("guides");
      const collection = db.collection("approved");

      const existingGuide = await collection.findOne({ _id: mongoId });

      if (!existingGuide) {
        client.close();
        return [false, "Guide not found"];
      }

      const updatedData = {
        ...existingGuide,
        ...updatedGuide,
        lastUpdated: new Date().toISOString(),
        _id: mongoId,
        reviewRequests: [],
        authorEmail:
          updatedGuide.author === "Relayable"
            ? process.env.RELAYABLE_EMAIL
            : existingGuide.authorEmail,
      };

      await collection.deleteOne({ _id: mongoId });
      await collection.insertOne(updatedData);

      return [true, null];
    } catch (error) {
      console.error("Error editing guide:", error);
      client.close();
      return [false, "Failed to edit guide"];
    }
  }
};

export const rejectPendingGuide = async (id, authCode) => {
  const match = await compare(authCode, process.env.AUTH);

  if (!match) {
    return [false, "Invalid authorization code"];
  } else {
    const client = initClient();

    try {
      const db = client.db("guides");
      const collection = db.collection("pending");

      const existingGuide = await collection.findOne({ _id: new ObjectId(id) });

      if (!existingGuide) {
        client.close();
        return [false, "Guide not found"];
      }

      await collection.deleteOne({ _id: new ObjectId(id) });
      client.close();
      return [true, null];
    } catch (error) {
      console.error("Error rejecting guide:", error);
      client.close();
      return [false, "Failed to reject guide"];
    }
  }
};

export const queryGuides = async (queryStr) => {
  const client = initClient();

  try {
    const db = client.db("guides");
    const collection = db.collection("approved");

    const regex = new RegExp(queryStr, "i");
    const guides = await collection
      .find(
        {
          $or: [
            { title: regex },
            { description: regex },
            { vendor: regex },
            { category: regex },
          ],
        },
        SEARCH_FILTER
      )
      .toArray();

    client.close();
    return [guides.map(formatGuide), null];
  } catch (error) {
    console.error("Error querying guides:", error);
    client.close();
    return [false, "Failed to query guides"];
  }
};
