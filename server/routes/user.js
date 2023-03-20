import express from "express";
const router=express.Router();



import {signup,fetchNotifications, googleLogin,signin,sendNotification} from "../controllers/user.js";
import otpVerication from "../middlewares/otpVerification.js";


router.post("/signup",signup);
router.post("/otpVerification",otpVerication);
router.post("/googleLogin",googleLogin);
router.post("/signin",signin);
router.post("/sendNotification",sendNotification)
router.get("/fetchNotifications/:_id",fetchNotifications)



export default router;