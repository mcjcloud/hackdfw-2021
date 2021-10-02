import { Collection, MongoClient } from "mongodb"

/**
 * create a reference to the mongodb database
 */
const useMongoDB = async (): Promise<MongoClient> => {
  const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@melonmentor.ghwuy.mongodb.net/MelonMentor?retryWrites=true&w=majority`;

  console.debug("Connecting to MongoDB using username:", process.env.MONGO_USER);

  const client = new MongoClient(uri);
  return client.connect();
}

/**
 * create a connection to a specific collection in mongodb
 */
export const useCollection = async <T>(collectionName: string): Promise<Collection<T>> => {
  const client = await useMongoDB();
  const db = await client.db("MelonMentor");
  return await db.collection<T>(collectionName);
}
