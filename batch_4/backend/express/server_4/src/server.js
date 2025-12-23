import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import ProductRouter from "./Routes/ProductRoutes.js";
import UserRouter from "./Routes/UserRoutes.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


dotenv.config();
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4000;
connectDB();


app.use("/api/product" , ProductRouter)
app.use("/api/user/" , UserRouter)

let pass = "Anushka@12"
let username = "Rebon@12"
// let hpass = await bcrypt.hash(pass,10)

// let input_pass = "Anushka@123";

// let match = await bcrypt.compare(input_pass, hpass)

// console.log(match)

let token = await jwt.sign({username, pass }, "mysecretkey123", {expiresIn: "1h",});

let verify = await jwt.verify(token, "mysecretkey123");

console.log(verify)


let req = {}
req.id = verify.username

console.log(req)




app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
