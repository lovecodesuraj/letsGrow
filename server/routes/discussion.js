import express from "express";
import { fetchDiscussions, fetchJoinedDiscussions,fetchDiscussion,fetchDefaultDiscussion,saveMessage } from "../controllers/discussion.js";
const router=express.Router();


router.get("/",fetchDiscussions);
router.get("/:votingId",fetchDiscussion);
router.get("/default/:userId",fetchDefaultDiscussion);
router.get("/joined/:userId", fetchJoinedDiscussions);

router.post("/saveMessage",saveMessage);

export default router;