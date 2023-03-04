import express from "express";
const router=express.Router();

import {signup,googleLogin} from "../controllers/user.js";


router.post("/signup",signup);
router.post("/googleLogin",googleLogin);


export default router;