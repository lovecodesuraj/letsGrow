import express from "express";
import { fetchDiscussions,leaveDiscussion,joinDiscussion, fetchJoinedDiscussions,fetchDiscussion,fetchDefaultDiscussion,saveMessage } from "../controllers/discussion.js";
const router=express.Router();


router.get("/",fetchDiscussions);
router.get("/:_id",fetchDiscussion);
router.get("/default/:userId",fetchDefaultDiscussion);
router.get("/joined/:userId", fetchJoinedDiscussions);

router.patch("/:_id/leave",leaveDiscussion)
router.patch("/:_id/leave",leaveDiscussion)
router.patch("/saveMessage",saveMessage);

export default router;