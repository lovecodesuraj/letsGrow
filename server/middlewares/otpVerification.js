import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
import { User } from "../models/user.js";

const myGmail=process.env.myGmail;
const myGmailPassword=process.env.myGmailPassword;

var transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: myGmail,
        pass: myGmailPassword,
    }
});




const otpVerication = async (req, res) => {
    const userEmail = req.body.email;
    const {password,confirmPassword}=req.body;
    const OTP = Math.round(Math.random() * 10000);

    try {

        const existingUser=await User.findOne({email:userEmail}) ;
        if(existingUser) return res.status(409).json({message:"User already exists."});
        if (password != confirmPassword) return res.status(401).json({ message: "password do not match." });
        var html=`<h2>Welcome to letsGrow</h2><h4>We are making india</h4><p>Your OTP is ${OTP}</P>`;
        var mailOptions = {
            from: 'letsGrow',
            to: userEmail,
            subject: 'OTP Verification',
            text: "Welcome to LetsGrow || We are making India",
            html: html,
            attachments: []
        };
        const response=await transporter.sendMail(mailOptions);
        res.status(200).json({OTP});
        // re
       
    } catch (error) {
        res.status(200).json({error});
    }


};


export default otpVerication;