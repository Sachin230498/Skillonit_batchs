import Course from "../model/course.model.js";
import redis from "../config/redis.js"; // your existing ioredis client

export const getAllCourses = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const redisKey = `courses_page_${pageNumber}_limit_${limitNumber}`;

    // 1️⃣ Check if data exists in Redis
    const cachedCourses = await redis.get(redisKey);
    if (cachedCourses) {
      console.log("⚡ Fetching courses from Redis cache");
      return res.status(200).json(JSON.parse(cachedCourses));
    }

    // 2️⃣ If not in Redis, fetch from MongoDB
    const courses = await Course.find()
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    const totalCourses = await Course.countDocuments();

    const response = {
      status: true,
      message: "Courses fetched successfully",
      count: totalCourses,
      data: courses,
    };

    // 3️⃣ Store response in Redis for 10 minutes
    await redis.set(redisKey, JSON.stringify(response), "EX", 600);

    console.log("📦 Fetching courses from MongoDB");

    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({
      status: false,
      message: "Failed to fetch courses",
      error: error.message,
    });
  }
};


export default getAllCourses;