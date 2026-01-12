import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://skillonit:321@skillonit.zt7p3.mongodb.net/skillonit";

console.log(MONGO_URI);
if (!MONGO_URI) {
  console.error(
    "❌ MONGO_URI is not defined. Check your environment variables."
  );
  process.exit(1); // Exit the application if no DB URI is provided
}


export const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Database connection error:", error);
    process.exit(1);
  }
};

export default connectDatabase;

