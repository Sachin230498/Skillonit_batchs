import UserModel from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// const CreatUser = async (req, res) => {
//   try {
//     const user = await UserModel.create(req.body);
//     res.status(201).send({ message: "user created", user });
//   } catch (error) {
//     console.log(error);
//   }
// };

const Signup = async (req, res) => {
  try {
    const { name, email, age, password, mobile } = req.body;

    const existemail = await UserModel.findOne({ email });
    if (existemail)
      return res.status(400).json({ msg: "email is already ragister" });

    const existmobile = await UserModel.findOne({ mobile });
    if (existmobile)
      return res.status(400).json({ msg: "mobile no is already ragister" });

    const hashpassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name,
      email,
      age,
      password: hashpassword,
      mobile,
    });
    res.status(201).send({ message: "user created", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({id:user._id, age:user.age}, "mysecretkey123", {expiresIn:"1h"} )

    res.json({ msg: "Login successful", user ,token});
  } catch (error) {
    console.log(error);
  }
};

const GetallUser = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

const DeleteUser = async (req, res) => {
  try {
    let { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);
    res.send("user deleted");
  } catch (error) {
    console.log(error);
  }
};

export { Signup, Login, GetallUser, updateUser, DeleteUser };
