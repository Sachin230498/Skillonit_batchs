const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String, // Only for normal auth
  googleId: String, // Only for Google OAuth
});

module.exports = mongoose.model("User", userSchema);
