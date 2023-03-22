import React, { useState, useEffect, useRef } from 'react'
import { saveMessage } from '../../../../actions/discussion';
import { IconButton, Typography, Grid, Paper, TextField } from '@mui/material';
import SendIcon from "@material-ui/icons/SendOutlined"

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import SendOutlined from '@material-ui/icons/SendOutlined';
import { fetchDiscussion } from "../../../../actions/discussion"
import { leaveDiscussion } from '../../../../actions/discussion';
import LeaveIcon from "@material-ui/icons/ExitToApp"


const ChatBox = ({ socket,initialMessages,name }) => {
    const { _id } = useParams();
    const user = JSON.parse(localStorage.getItem("user"));
    const userId=user?._id;
    const dispatch = useDispatch();

    // const [message, setMessage] = useState("");
    const message = useRef();

    const [messages, setMessages] = useState(initialMessages);

    const handleKeyDown = async (e) => {
        try {
            if (e.keyCode === 13) {
                const formattedMessage = {
                    name: user?.name,
                    userId: user?._id,
                    room: _id,
                    text: message.current.value,
                    time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
                }
                await socket.emit("sendMessage", formattedMessage);
                dispatch(saveMessage({ _id, message: formattedMessage }))
                setMessages([...messages, formattedMessage]);
                message.current.value = "";
                var elem = document.getElementById('messageBox');
                elem.scrollTop = elem.scrollHeight;
            }
        } catch (error) {
            console.log({ error });
        }

    }



    const send = async (e) => {
        e.preventDefault();
        const formattedMessage = {
            name: user?.name,
            userId: user?._id,
            room: _id,
            text: message.current.value,
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
        }
        await socket.emit("sendMessage", formattedMessage);
        dispatch(saveMessage({ _id, message: formattedMessage }))
        setMessages([...messages, formattedMessage]);
        message.current.value = "";
        var elem = document.getElementById('messageBox');
        elem.scrollTop = elem.scrollHeight;
    }

    useEffect(() => {

        // dispatch(fetchDiscussion({_id}));
        socket.emit("joinRoom", _id);
        socket.on("recieveMessage", (data) => {
            setMessages(prev => [...prev, data]);
            var elem = document.getElementById('messageBox');
            elem.scrollTop = elem.scrollHeight;
        })
    }
        , [socket, _id])

    return <>

            <Paper elevation={0 } style={{height:"88vh"}}>
            <Paper elevation={2} style={{display:"flex",padding:"0 10px",height:"10%",alignItems:"center",justifyContent:"space-between"}}  >
                <Typography variant="h5" style={{color:"rgb(93,108,116)",}}>{name}</Typography>
                <IconButton onClick={e=>{e.preventDefault(); dispatch(leaveDiscussion({userId,_id}))}}><LeaveIcon /></IconButton>
            </Paper>
            <Stack
                    id='messageBox'
                    direction="column"
                    spacing={1}
                    pt={2}
                    pb={2}
                    style={{
                        overflowY: "auto",
                        height: '75%',
                        // backgroundColor:"grey",
                        width: "100%",
                    }}
                >
                    {messages?.length ? messages?.map((message, index) =>
                    (<div
                        key={index}
                        // direction="column"

                        style={{
                            backgroundColor: message?.userId === user?._id ? "#007AFF" : "#EAEAEA",
                            padding: "5px 10px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            maxWidth: "60%",
                            borderRadius: "5px",
                            color: message?.userId === user?._id ? "white" : "rgb(45,45,45)",
                            alignSelf: message?.userId === user?._id ? "flex-end" : "flex-start",
                        }}
                    >
                        <p style={{ fontFamily: "Roboto", fontSize: "10px", }}>{message.name}</p>
                        <Typography
                            variant='body2'
                            style={{
                                fontFamily: "Roboto",
                                fontSize: "16px",
                            }}>{message.text}
                        </Typography>
                        <p style={{ fontFamily: "Roboto", fontSize: "10px", textAlign: "right" }}>{message.time.slice(0, 5)}</p>
                    </div>
                    )
                    ) : ""}
                </Stack>
                <Paper elevation={6} style={{height:"10%"}}>

                        <input
                            type="text"
                            // value={message}
                            // value={message.current}
                            ref={message}
                            placeholder="Message"
                            onKeyDown={handleKeyDown}
                            style={{
                                width: "90%",
                                padding: "20px",
                                border: "0px solid",
                                background: "transparent",
                                color: "rgb(45,45,45)",
                                fontFamily: "Roboto"
                            }}
                            />
                        <IconButton style={{ backgroundColor: "" }} onClick={send}><img src="https://cdn-icons-png.flaticon.com/128/3682/3682321.png" height="25px" /></IconButton>
                </Paper>

             </Paper>  


        {/* </Grid> */}
    </>
}

export default ChatBox