import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const PORT=process.env.PORT;
const URL=process.env.URL;
const app=express();

app.use(cors);
app.use(bodyParser.urlencoded({extended:true}));


app.listen(PORT,async()=>{
   try {
       await mongoose.connect(URL);
       console.log(`server is running at port ${PORT}`);
   } catch (error) {
      console.log(error);
   }
})