import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Sachin12:Sachin1224@cluster0.jpsjjkn.mongodb.net/?appName=Cluster0"
    );
    console.log("Db Connected");
  } catch (error) {
    console.log(error);
  }
};


export default connectDB




// make a function

// [1,8,9,11,22,7]  , 19