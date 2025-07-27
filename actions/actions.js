"use server";

import initClient from "@/db/init";
import formatGuide from "@/util/formatGuide";

import { ObjectId } from "mongodb";

import slugify from "slugify";

export const submitGuide = async (formData) => {
  const { vendor, title, author, authorEmail, description } = formData;

  if (!vendor || !title || !author || !authorEmail || !description) {
    return [false, "Missing required fields for guide submission"];
  }

  const client = initClient();

  try {
    await client.connect();
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

export const fetchAllGuides = async (type = "approved") => {
  const client = initClient();

  try {
    await client.connect();
    const db = client.db("guides");
    const collection = db.collection(type);
    const guides = await collection.find({}).toArray();

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
    await client.connect();
    const db = client.db("guides");
    const collection = db.collection(type);

    const guide = await collection.findOne({ vendorSlug, slug });

    client.close();
    return [formatGuide(guide), null];
  } catch (error) {
    console.error("Error fetching guide:", error);

    client.close();
    return [false, "Failed to fetch guide"];
  }
};

export const approvePendingGuide = async (updatedGuide) => {
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
};
