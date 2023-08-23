const mongoose = require("mongoose");
const connect = async () => {
    try {
      const res = await mongoose.connect("mongodb://127.0.0.1:27017/TrackSwiftDb");
      if (res) console.log("connected to mongodb");
    } catch (err) {
      console.log(err);
    }
  };
//   connect();

  module.exports = connect