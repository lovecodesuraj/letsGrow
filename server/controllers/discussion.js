import Discussion from "../models/discussion.js";


export const fetchDiscussions=async(req,res)=>{
    try {
        const discussions=await Discussion.find();
        res.status(200).json({discussions});
    } catch (error) {
        res.status(400).json({error});
    }
}

export const  fetchJoinedDiscussions=async(req,res)=>{
    const {userId}=req.params;
    try {
        const discussions=await Discussion.find({members:userId},{name:1,_id:1});
        res.status(200).json({discussions});
    } catch (error) {
        console.log({error})
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

export const fetchDefaultDiscussion=async(req,res)=>{
    const {userId} =req.params;
    // console.log({params:req.params})
    try {
        const discussion=await Discussion.findOne({userId});
        res.status(200).json({discussion});
    } catch (error) {
        console.log({error});
        res.status(400).json({error});
    }
}


export const saveMessage=async(req,res)=>{
    const {votingId,message}=req.body;
    try {
        const {messages}=await Discussion.findOne({votingId});
        const discussion=await Discussion.findOneAndUpdate({votingId},{messages:[...messages,message]},{new:true})
        res.status(200).json({discussion})
    } catch (error) {
        res.status(400).json({error});
    }
}