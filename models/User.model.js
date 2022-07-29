const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },

  login: {
    type: String,
    unique: true,
    required: false,
  },
  role: {
    type: String,
    default: false,
  },

  password: {
    type: String,
    required: true,
  },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

const User = mongoose.model("UserSchema", userSchema);

module.exports = User;
