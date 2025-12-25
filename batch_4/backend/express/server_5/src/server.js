import express from "express";
import connectDB from "./config/db.js";
import productrouter from "./routes/prodcutRoute.js";
import userrouter from "./routes/userRoute.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

// ✅ parse JSON
app.use(express.json());

// ✅ parse form-data text fields
app.use(express.urlencoded({ extended: true }));

// ✅ serve uploaded images (uploads is inside src)
app.use("/uploads", express.static(path.join(process.cwd(), "src", "uploads")));

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

app.use("/api/product", productrouter);
app.use("/api/user", userrouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
