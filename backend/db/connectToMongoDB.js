import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("Error connecting to MongDB", error.message);
  }
};

export default connectToMongoDB
