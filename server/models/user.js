import mongoose from "mongoose";

const userSchema=mongoose.Schema({
      name:String,
      email:String,
      aadhaar:String,
      picture:String,
      createdAt:String,
      password:String,
      followers:[String],
      following:[String],
      discussions:[String],
      notifications:[String],
      _id:String,
});

export const User = mongoose.model('User',userSchema);

// new Date().toISOString()