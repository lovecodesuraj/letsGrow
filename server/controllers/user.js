import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { randomUUID } from 'crypto';
dotenv.config(); 
export const signup = async (req, res) => {
    // const formData = req.body;
    const { email, firstName, lastName, password } = req.body;
    try {
        // const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({
            name: `${firstName} ${lastName}`,
            createdAt: new Date().toISOString(),
            email,
            password,
            _id: randomUUID(),
        });
        const user={name:result.name,email:result.email,picture:result.picture,_id:result._id}
        const token = jwt.sign({ email: result.email, _id: result._id }, process.env.SECRET, { expiresIn: "48h" });
        res.status(200).json({ user, token });
    }
    catch (error) {
        res.status(400).json(error);
        console.log(error)
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