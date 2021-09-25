const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loginSchema = new Schema({
  userId: String,
  logStatus: String,
  logDate: Date,
});

const Login = mongoose.model("lastLogin", loginSchema);
module.exports = Login;
