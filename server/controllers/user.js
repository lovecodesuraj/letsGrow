import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { randomUUID } from 'crypto';
dotenv.config(); 
export const signup = async (req, res) => {
    const { firstName, lastName, email,password }=req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({
            name: `${firstName} ${lastName}`,
            createdAt: new Date().toISOString(),
            email,
            password:hashedPassword,
            _id: randomUUID(),
        });
        console.log(result);
        const user={name:result.name,email:result.email,picture:result.picture,_id:result._id}
        const token = jwt.sign({ email: result.email, _id: result._id }, process.env.SECRET, { expiresIn: "48h" });
        res.status(200).json({ user, token });
    }
    catch (error) {
        res.status(400).json(error);
        console.log(error)  
    }
}

export const signin =async(req,res)=>{
    const {email,password}=req.body;
    // console.log(email)
    try {
        const user=await User.findOne({email});
        if(!user) return res.status(404).json({message:"User not found."});
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) return res.status(401).json({message:"Incorrect password."});
        const token = jwt.sign({ email: user.email, _id: user._id }, process.env.SECRET, { expiresIn: "48h" });
        res.status(200).json({user,token});
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}
export const googleLogin = async (req, res) => {
    const {name,picture,email,_id} = req.body;
    try {
        var user=await User.findOne({email});
        if(user) return res.status(200).json({user});
        user=await User.create({
            name,
            email,
            _id,
            picture,
            password:process.env.defaultPassword,
        });
        res.status(200).json({user});
    } catch (error) {
        res.status(400).json(error);
    }
}