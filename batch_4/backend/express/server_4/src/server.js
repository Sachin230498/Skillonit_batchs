import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import ProductRouter from "./Routes/ProductRoutes.js";
import UserRouter from "./Routes/UserRoutes.js";


dotenv.config();
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4000;
connectDB();


app.use("/api/product" , ProductRouter)
app.use("/api/user/" , UserRouter)


app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
