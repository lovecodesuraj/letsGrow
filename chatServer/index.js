import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";


const app=express();

app.use(cors);

const server=http.createServer(app);

const io= new Server(server,{
    cors:{
        arigin:"http://localhost:3000",
        methods:["GET","POST"]
    },
});

io.on("connection",(socket)=>{
    console.log(`user joined : ${socket.id}`);

    socket.on("joinRoom",async(_id)=>{
        // console.log(`user joined room : ${_id}`);
         socket.join(_id); 
    })
    
    socket.on("sendMessage",async(message)=>{
        console.log({message})
         socket.to(message.room).emit("recieveMessage",message);
    })

    socket.on("disconnect",()=>{
        console.log(`user disconnected: ${socket.id}`); 
    })
})

server.listen(3001,()=>{
    console.log("chat server is running at port 3001");
})