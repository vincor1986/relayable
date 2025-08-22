import initClient from "@/db/init";

import { SEARCH_FILTER } from "@/util/dbFilters";
import formatGuide from "@/util/formatGuide";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const vendor = searchParams.get("vendor");

  const client = initClient();

  try {
    const db = client.db("guides");
    const collection = db.collection("approved");
    const guides = await collection
      .find({ vendorSlug: vendor }, SEARCH_FILTER)
      .toArray();

    const formattedGuides = guides.map(formatGuide);

    client.close();
    return Response.json({ data: formattedGuides }, { status: 200 });
  } catch (error) {
    console.error("Error fetching guides:", error);
    client.close();
    return Response.json({ error: "Failed to fetch guides" }, { status: 500 });
  }
};
