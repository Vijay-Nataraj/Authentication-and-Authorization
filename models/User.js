const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_At: {
    type: Date,
    default: Date.now(),
  },
  updated_At: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", userSchema, "users");
