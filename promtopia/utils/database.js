import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is Already connected");
    return;
  }

  try {
  } catch (error) {}
};
