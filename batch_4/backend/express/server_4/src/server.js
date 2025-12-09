import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Productmodel from "./models/Productmodel.js";

dotenv.config();
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4000;

connectDB();
// route
app.get("/",(req,res)=>{
    res.send("Welcome to our server")
})

// Create product
app.post("/",async (req,res)=>{
   const {name,price} = req.body;
   const product = await Productmodel.create({name,price})
   res.send("product added")
})



app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
