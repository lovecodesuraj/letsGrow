import mongoose from "mongoose";

const discussionSchema=mongoose.Schema({
      name:{
        type:String,
        required:true,
      },
      messages:Array,
      votingId:{
        type:String,
        required:true
      }
});

 const Discussion = mongoose.model('Discussion',discussionSchema);
 export default Discussion

