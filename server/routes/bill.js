import express from "express";
import {fetchBills} from "../controllers/bill.js"
const router=express.Router();


router.get('/',fetchBills);


export default router;