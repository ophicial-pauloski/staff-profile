import mongoose from "mongoose";
import "dotenv/config";

export const databaseConnection = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_CONNECTION_STRING)
      .then(conn =>
        console.log(
          `MongoDB connected successfully at: ${conn.connection.host}`
        )
      );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
