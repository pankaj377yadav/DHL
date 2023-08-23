const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: String, // String is shorthand for {type: String}
    phoneNumber: {type:Number, required:true, unique:true },
    password: String,
    email: String,
    role:{
      type:String,
      enum: ['Driver', 'User', 'Admin'],
      default: "User"
    },
  });
  
  const User = mongoose.model("User", userSchema);

  module.exports = User;