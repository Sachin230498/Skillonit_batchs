import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sachin12:Sachin1224@backend.tukywne.mongodb.net/?appName=backend"
    );
    console.log("Db Connected");
  } catch (error) {
    console.log(error);
  }
};


export default connectDB




// make a function

// [1,8,9,11,22,7]  , 19