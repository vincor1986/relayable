import { MongoClient } from "mongodb";

const { MONGO_USER, MONGO_PASSWORD } = process.env;

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.zggvo08.mongodb.net/`;

const initClient = () => {
  if (!MONGO_USER || !MONGO_PASSWORD) {
    throw new Error("Missing MongoDB environment variables");
  }

  const client = new MongoClient(uri, {});

  return client;
};

export default initClient;
