import express from  "express"
import {  DeleteUser, GetallUser, Login, Signup, updateUser } from "../controller/userController.js";

const UserRouter =  express.Router();


UserRouter.post("/signup", Signup)
UserRouter.post("/login", Login)
UserRouter.get("/get", GetallUser)
UserRouter.put("/update/:id", updateUser)
UserRouter.delete("/delete/:id", DeleteUser)


export default UserRouter;
