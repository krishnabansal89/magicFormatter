import { connect } from "mongoose";

export const db = async () => {
  try {
    const DB_URL = process.env.DB_URL;
    await connect(DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};
