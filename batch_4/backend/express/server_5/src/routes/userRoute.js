import express from "express";
import { register, login,getAllUser } from "../controllers/authController.js";
import loginverify from "../middleware/auth.middle.js";
import checkrole from "../middleware/role.middleware.js";


const userrouter = express.Router();

userrouter.post("/register",register)
userrouter.post("/login",login)
userrouter.get("/getall",loginverify,checkrole("admin"), getAllUser)

export default userrouter;









// console.log("hello-1")
// console.log("hello-2")
// setTimeout(()=>{
//     console.log("hello-3")
// },1000)

// Promise.resolve("hello-5")
// console.log("hello-4")


// call stack => 1 2 4

// web api => 

// queue => microtask , macrotask => callback

// event loop => montior


