import Bill from "../models/bill.js";

export const fetchBills=async(req,res)=>{
    try {
        const bills= await Bill.find();
        res.status(200).json(bills);
        
    } catch (error) {
        res.status(400).json(error);
    }
}