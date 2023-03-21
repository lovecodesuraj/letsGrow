import React, { useState, useEffect } from 'react'
import { saveMessage } from '../../../../actions/discussion';
import { IconButton, Typography, Grid, Paper, TextField } from '@mui/material';
import SendIcon from "@material-ui/icons/SendOutlined"

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Stack,Box } from '@mui/material';
import SendOutlined from '@material-ui/icons/SendOutlined';


const ChatBox = ({ initialMessages, socket }) => {
    const { _id } = useParams();
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const [message, setMessage] = useState({
        name: user?.name,
        userId: user?._id,
        room: _id,
        text: "",
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
    });
    const [messages, setMessages] = useState(initialMessages);

    const send = async (e) => {
        e.preventDefault();
        await socket.emit("sendMessage", message);
        dispatch(saveMessage({ votingId: _id, message }))
        setMessages([...messages, message]);
        setMessage({
            name: user?.name,
            userId: user?._id,
            room: _id,
            text: "",
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
        })
        var elem = document.getElementById('messageBox');
        elem.scrollTop = elem.scrollHeight;
    }

    useEffect(() => {

        socket.emit("joinRoom", _id);
        socket.on("recieveMessage", (data) => {
            setMessages(prev => [...prev, data]);
            var elem = document.getElementById('messageBox');
            elem.scrollTop = elem.scrollHeight;
        })
    }
        , [socket])

    return <>
        <Grid container md={12} style={{minHeight:"75vh",maxHeight:"75vh"}} >
            <Grid item md={12} sm={12} xs={12}>

                <Stack
                    id='messageBox'
                    direction="column"
                    spacing={1}
                    style={{
                        overflowY: "auto",
                        maxHeight: '66vh',
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
            </Grid>

            <Grid item sx={12} md={12} sm={12} style={{height:"9vh"}}>
                <Stack direction="column">
                    <Box style={{ width: "98%", borderRadius: "5px", display: "flex", backgroundColor: "rgba(0,0,0,0.1)", margin: "auto" }}>
                        <input 
                        value={message.text}
                        onKeyDown={e => { e.keyCode === 13 ? send(e) : console.log("") }}
                        onChange={e => { setMessage({ ...message, text: e.target.value }) }}
                        type="text" style={{width:"90%", padding: "20px", border: "0px solid", background: "transparent", color: "rgb(45,45,45)", fontFamily: "Roboto" }} />
                        <IconButton style={{backgroundColor:""}} onClick={send}><img src="https://cdn-icons-png.flaticon.com/128/3682/3682321.png" height="25px" /></IconButton>
                    </Box>
                </Stack>
                {/* <Stack  direction="row" sx={{backgroundColor:"#EBEBEB"}}>

                    <TextField
                        size='small'
                        onKeyDown={e => { e.keyCode === 13 ? send(e) : console.log("") }}
                        onChange={e => { setMessage({ ...message, text: e.target.value }) }}
                        fullWidth
                    />
                    <IconButton size='medium'  >
                        <SendIcon color='primary' onClick={send} />
                    </IconButton>
                </Stack> */}
            </Grid>

        </Grid>
    </>
}

export default ChatBox