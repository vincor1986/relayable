"use server";

import initClient from "@/db/init";

export const emailSignUp = async (emailAddress) => {
  const client = initClient();
  const db = client.db("mailing-list");
  const collection = db.collection("emails");

  const email = emailAddress.trim().toLowerCase();

  try {
    const existing = await collection.findOne({ email });
    if (existing) return;

    await collection.insertOne({ email });
  } catch (error) {
    console.error("Error signing up for email:", error);
    return;
  }
};
