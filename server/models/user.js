import mongoose from "mongoose";

const userSchema=mongoose.Schema({
      name:String,
      aadhaar:String,
      picture:String,
      createdAt:String,
      followers:[String],
      following:[String],
});

export const User = mongoose.model('User',userSchema);

// new Date().toISOString()