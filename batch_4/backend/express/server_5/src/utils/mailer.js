import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.useremail,
    pass: process.env.userpass,
  },
});
// Verify transporter
transporter.verify((error) => {
  if (error) console.error("SMTP ERROR ❌", error.message);
  else console.log("SMTP Ready ✅");
});

const sendMail = async ({to,subject,html})=>{
    await transporter.sendMail({
      from: process.env.useremail,
      to,
      subject,
      html,
    });
}

export default sendMail