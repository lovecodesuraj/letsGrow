import mongoose from "mongoose";

const userSchema=mongoose.Schema({
      name:String,
      email:String,
      aadhaar:String,
      picture:String,
      createdAt:String,
      followers:[String],
      following:[String],
      _id:String,
});

export const User = mongoose.model('User',userSchema);

// new Date().toISOString()