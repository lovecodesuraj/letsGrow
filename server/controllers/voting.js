import { User } from "../models/user.js";
import Voting  from "../models/voting.js";


export const fetchVotings=async(req,res)=>{
    try {
        const votings=await Voting.find();
        res.status(200).json({votings});
    } catch (error) {
        res.status(400).json({error});
    }
}
export const createVoting=async(req,res)=>{
    const {title,description,lastDate}=req.body;
    const body=req.body;
    const date=new Date();
    try {
        const voting=await Voting.create({
            title,
            description,
            startingDate:date.toISOString(),
            lastDate,
            subscribers:[],
            approvals:[],
            disapprovals:[],
        });
        res.status(200).json({voting});
    } catch (error) {
        res.status(400).json({error});
    }
}

export const addApproval=async(req,res)=>{
    const {userId,votingId}=req.body;
    try {
        const voting=await Voting.findById(votingId);
        var newApprovals=[];
        if(voting.approvals.indexOf(userId)===-1){
            newApprovals=[...voting.approvals,userId];
        }   else{
            newApprovals=voting.approvals.filter(approval=>approval!==userId);
        } 
        const updatedVoting=await Voting.findOneAndUpdate({_id:votingId},{$set:{approvals:[...newApprovals]}},{new: true})
        res.status(200).json({voting:updatedVoting});    
    } catch (error) {
        res.status(400).json({error});
    }
}
export const addDisapproval=async(req,res)=>{
    const {userId,votingId}=req.body;
    const body=req.body;
    // console.log({body})
    try {
        const voting=await Voting.findById(votingId);
        var newDisapprovals=[];
        if(voting.disapprovals.indexOf(userId)===-1){
            newDisapprovals=[...voting.disapprovals,userId];
        }   else{
            newDisapprovals=voting.disapprovals.filter(disapproval=>disapproval!==userId);
        } 
        const updatedVoting=await Voting.findOneAndUpdate({_id:votingId},{$set:{disapprovals:newDisapprovals}},{new: true})
        res.status(200).json({voting:updatedVoting});    
    } catch (error) {
        // console.log(error);
        res.status(400).json({error});
    }
}