import {fetchMySubscribedVotings,fetchVoting,fetchSearchedVotings,deleteVoting,fetchMyVotings, addApproval,addDisapproval, subscribe,fetchVotings,createVoting } from "../controllers/voting.js";
import express from "express";

const router=express.Router();


 //read 
 router.get("/",fetchVotings);
 router.get("/:_id",fetchVoting);
 router.post("/myVotings",fetchMyVotings);
 router.post("/subscribedVotings",fetchMySubscribedVotings);
 router.post("/search",fetchSearchedVotings);


//  update
router.patch("/addApproval",addApproval);
router.patch("/addDisapproval",addDisapproval);
router.patch("/subscribe",subscribe);


//write
 router.post("/create",createVoting);

 //delete
 router.delete("/delete/:_id",deleteVoting);
  
export default router;