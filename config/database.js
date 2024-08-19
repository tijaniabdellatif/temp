
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


/**
 * Lambda function connection to database on demand
 */
let isConnected = false;
const URL = `${process.env.DB_URL}`;
const dbName = `${process.env.DB_NAME}`;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongo is already connected");
    return;
  }

  try {
    const action = await mongoose.connect(URL, {
      dbName: dbName,
    });

    isConnected = true;
    console.log("connection to the database is established");
  } catch (error) {
    throw new MongoAPIError(error.message);
  }
};

export const disconnectFromDatabase = async () => {
  if (isConnected) {
    await mongoose.connection.close();
  }
  console.log(
    "connection closed... Wait until the next connection is established"
  );
  return;
};
