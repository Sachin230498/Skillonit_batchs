import express from "express";
import sendMail from "../utils/mailer.js";
const contactRouter = express.Router();
import dotenv  from "dotenv";
dotenv.config()

contactRouter.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await sendMail({
      to: process.env.usermail,
      subject: "New contact Request",
      html: `<h1>${name}</h1>
          <h1>${message}</h1>
          <h1>${email}</h1>
          `,
    });

    res.json({ message: "Mail sent" });
  } catch (error) {
    res.send(error);
  }
});

export default contactRouter