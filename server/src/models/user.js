const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: String, // String is shorthand for {type: String}
    phoneNumber: String,
    passWord: String,
    email: String,
  });
  
  const User = mongoose.model("User", userSchema);

  module.exports = User;