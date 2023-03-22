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
        const discussions=await Discussion.find({members:userId},{name:1,_id:1,votingId:1});
        res.status(200).json({discussions});
    } catch (error) {
        console.log({error})
        res.status(400).json({error});
    }
}
export const fetchDiscussion=async(req,res)=>{
    const {_id} =req.params;
    // console.log({params:req.params})
    try {
        const discussion=await Discussion.findOne({_id});
        res.status(200).json({discussion});
    } catch (error) {
        res.status(400).json({error});

    }
}
export const joinDiscussion=async(req,res)=>{
    const {_id} =req.params;
    const {userId}=req.body;
    try {
        const discussion=await Discussion.findByIdAndUpdate(_id,{$push: {members:userId }},{new:true});
        res.status(200).json({message:`user ${userId} added to discussion ${_id}`});
    } catch (error) {
        res.status(400).json({error});

    }
}

export const leaveDiscussion=async(req,res)=>{
    const {_id} =req.params;
    const {userId}=req.body;
    try {
        const discussion=await Discussion.findByIdAndUpdate(_id,{$pull: {members:userId }},{new:true});
        res.status(200).json({message:`user ${userId} removed from discussion ${_id}`});
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
    const {_id,message}=req.body;
    try {
        const {messages}=await Discussion.findOne({_id});
        const discussion=await Discussion.findOneAndUpdate({_id},{messages:[...messages,message]},{new:true})
        res.status(200).json({discussion})
    } catch (error) {
        console.log({error})
        res.status(400).json({error});
    }
}