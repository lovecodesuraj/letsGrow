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
      },
      members:[String],
});

 const Discussion = mongoose.model('Discussion',discussionSchema);
 export default Discussion

