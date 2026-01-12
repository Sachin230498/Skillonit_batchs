import express from "express";
import getAllCourses from "../controller/coursecontroller.js";


const courserouter = express.Router();


courserouter.get("/course", getAllCourses)


export default courserouter;