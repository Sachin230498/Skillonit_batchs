import express from "express";
import redis from "../config/redis.js";

const router = express.Router();

// Set a message in Redis
router.get("/set-message", async (_req, res) => {
  await redis.set("message", "Hello from Redis!");
  res.json({ success: true, msg: "Message saved in Redis!" });
});

// Get the message from Redis
router.get("/get-message", async (_req, res) => {
  const message = await redis.get("message");
  res.json({ success: true, message });
});

export default router;
