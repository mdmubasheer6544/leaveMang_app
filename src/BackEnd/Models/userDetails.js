const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  userId: String,
  name:String,
  from: Date,
  to: Date,
  reason: String,
  status: String,
  applyDate: Date,
});
const UserDetails = mongoose.model("userDetail", userSchema);
module.exports = UserDetails;
