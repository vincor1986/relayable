import { MongoClient } from "mongodb";

const {
  MONGO_CONNECTION_PROTOCOL,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_CLUSTER_ADDRESS,
} = process.env;

let uri = `${MONGO_CONNECTION_PROTOCOL}://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER_ADDRESS}`;

const initClient = () => {
  if (
    !MONGO_CONNECTION_PROTOCOL ||
    !MONGO_USER ||
    !MONGO_PASSWORD ||
    !MONGO_CLUSTER_ADDRESS
  ) {
    throw new Error("Missing MongoDB environment variables");
  }

  const client = new MongoClient(uri, {});

  return client;
};

export default initClient;
