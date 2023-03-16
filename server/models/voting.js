import mongoose from "mongoose";

const votingSchema=mongoose.Schema({
    title:String,
    description:String,
    startingDate:String,
    lastDate:String,
    subscribers:[String],
    approvals:[String],
    disapprovals:[String],

});

const Voting = mongoose.model('Voting',votingSchema);
export default Voting; 

// new Date().toISOString()