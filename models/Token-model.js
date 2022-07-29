const mongoose = require("mongoose");

const tokenShema = mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
});

const Token = mongoose.model("Token", tokenShema);

module.exports = Token;
