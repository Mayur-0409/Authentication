import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    console.log("URI: ", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to database: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error in mongo connectoion", error);
    process.exit(1);
  }
};
