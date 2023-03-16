import {addApproval,addDisapproval, fetchVotings,createVoting } from "../controllers/voting.js";
import express from "express";

const router=express.Router();

 router.get("/",fetchVotings);
 router.post("/create",createVoting);
 router.post("/addApproval",addApproval);
 router.post("/addDisapproval",addDisapproval);
  
export default router;