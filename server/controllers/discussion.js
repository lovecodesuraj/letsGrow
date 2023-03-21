import Discussion from "../models/discussion.js";


export const fetchDiscussions=async(req,res)=>{
    try {
        const discussions=await Discussion.find();
        res.status(200).json({discussions});
    } catch (error) {
        res.status(400).json({error});
    }
}
export const fetchDiscussion=async(req,res)=>{
    const {votingId} =req.params;
    // console.log({params:req.params})
    try {
        const discussion=await Discussion.findOne({votingId});
        res.status(200).json({discussion});
    } catch (error) {
        res.status(400).json({error});
    }
}