import express from "express";
const router=express.Router();

import {signup,googleLogin,signin} from "../controllers/user.js";
import otpVerication from "../middlewares/otpVerification.js";


router.post("/signup",signup);
router.post("/otpVerification",otpVerication);
router.post("/googleLogin",googleLogin);
router.post("/signin",signin);



export default router;