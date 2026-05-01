import { betterAuth, getAuthTables } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { memoryAdapter } from "@better-auth/memory-adapter";

const mongoUri = process.env.MONGODB_URI;

const client = mongoUri
  ? new MongoClient(mongoUri, {
      serverSelectionTimeoutMS: 3000,
      connectTimeoutMS: 3000,
    })
  : null;

const mongoReady = client
  ? await client
      .connect()
      .then(async () => {
        await client.db().admin().ping();
        return true;
      })
      .catch((error) => {
        console.warn(
          "MongoDB is unavailable, falling back to in-memory auth storage.",
          error.message
        );
        return false;
      })
  : false;

const createMemoryDatabase = (options) => {
  const tables = getAuthTables(options);
  return Object.keys(tables).reduce((accumulator, key) => {
    accumulator[key] = [];
    return accumulator;
  }, {});
};

export const auth = betterAuth({
  database: (options) => {
    if (mongoReady) {
      return mongodbAdapter(client.db(), {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client,
      })(options);
    }

    return memoryAdapter(createMemoryDatabase(options))(options);
  },
  emailAndPassword: {
    enabled: true,
  }
});
