"use server";

import initClient from "@/db/init";

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

    await collection.insertOne({ ...formData, approved: false });

    client.close();
    return [true, null];
  } catch (error) {
    console.error("Error submitting guide:", error);

    client.close();
    return [false, "Failed to submit guide"];
  }
};
