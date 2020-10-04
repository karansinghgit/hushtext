const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  sitename: {
    type: String,
    required: true,
    unique:true,
    trim: true,
  },
  password:{
      type:String,
      required:true,
      unique:true,
  },
});

const Users = mongoose.model("User", UserSchema);
module.exports = Users;