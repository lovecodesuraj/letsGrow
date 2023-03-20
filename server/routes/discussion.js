import express from "express";
import { fetchDiscussions,fetchDiscussion } from "../controllers/discussion.js";
const router=express.Router();


router.get("/",fetchDiscussions);
router.get("/:votingId",fetchDiscussion);

export default router;