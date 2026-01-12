import express from "express";
import cors from "cors";
// import redisRoutes from "./routes/redisRoutes.js";
import courserouter from "./routes/CourseRoutes.js";
import connection from "./config/db.js"

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

connection()
// Routes
// app.use("/api/redis", redisRoutes);
app.use("/api",courserouter)

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
