const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: "http://127.0.0.1:5500", // your frontend URL (if running from VS Code Live Server)
    credentials: true,
  })
);

app.use(bodyParser.json());

// Routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// DB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
