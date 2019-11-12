const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // username: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["admin", "editor", "user"],
    default: "user"
  }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
