import { User } from "../models/user.js";

export const signup = async (req, res) => {
    const formData = req.body;
    try {
        console.log("signedup");
        res.status(200).json({message:"successffully signedupo"});
    } catch (error) {
        res.status(400).json(error);
    }
}

export const googleLogin = async (req, res) => {
    const loginData = req.body;
    try {
        res.status(200).json(loginData);
    } catch (error) {
        res.status(400).json(error);
    }
}