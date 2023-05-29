const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  start_count: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    required: true,
    unique: false,
  },
  remains: {
    type: Number,
    default: 0,
  },
  currentCount: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: "진행중",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("User", UserSchema);
