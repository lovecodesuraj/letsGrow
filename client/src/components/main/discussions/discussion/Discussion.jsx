import { Box, Button, CircularProgress } from '@material-ui/core';
import { Container, IconButton, Typography, Grid, Paper, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SendIcon from "@material-ui/icons/SendOutlined"
import MoreHorizOutlined from '@material-ui/icons/MoreHorizOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiscussion } from '../../../../actions/discussion';


const Discussion = ({ socket }) => {
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
    const { discussion, isLoading } = useSelector(state => state.discussions);
    const [messages, setMessages] = useState([]);
    const send = async (e) => {
        e.preventDefault();
        await socket.emit("sendMessage", message);
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
        dispatch(fetchDiscussion({ votingId: _id }))
        socket.on("recieveMessage", (data) => {
            console.log({ data });
            setMessages(prev => [...prev, data])
        })
    }
        , [dispatch, socket])

    return (
        <>
            {/* <Container> */}

            <Grid
                container
                sx={{
                    margin: "auto",
                    // backgroundColor:"grey"
                }}
                md={8}
                sm={12}
                pt={4}
            // mt={4}

            >
                <Grid
                    item
                    md={2}
                    sm={12}
                >
                    <Paper elevation={6}>

                        <Stack
                            // sx={{ backgroundColor: "grey" }}
                            direction="column"
                            spacing={1}
                        >
                        </Stack>
                    </Paper>
                </Grid>
                <Grid
                    item
                    md={10}
                    sm={12}

                >
                    <Stack >
                        <Paper elevation={6}
                            style={{ backgroundColor: "#F1F1F1", display: "flex", position: "relative", flexDirection: "column", height: "80vh" }}>
                            {isLoading ? <CircularProgress /> :
                                <>
                                    <Box

                                        style={{ borderBottom: "2px solid grey", display: "flex", height: "8%", padding: " 0px 20px ", alignItems: "center", justifyContent: "space-between" }}>
                                        <Typography variant='h6' style={{ color: "rgb(93,108,116)" }} >{discussion?.name} </Typography>
                                        <IconButton><MoreHorizOutlined /></IconButton>
                                    </Box>

                                    <Stack
                                        id='messageBox'
                                        direction="column"
                                        pt={2}
                                        pb={2}
                                        spacing={0.5}
                                        style={{
                                            overflowY: "auto",
                                            height: '80%',
                                            width: "100%",

                                            //   display: "flex", 
                                            //   flexDirection: "column"
                                        }}
                                    >
                                        {messages.length ? messages?.map((message, index) =>
                                        (<Stack
                                            key={index}
                                            direction="column"

                                            style={{
                                                backgroundColor: "white",
                                                padding: "5px 10px",
                                                marginLeft: "10px",
                                                marginRight: "10px",
                                                maxWidth: "60%",
                                                borderRadius: "5px",
                                                // backgroundColor: "white",
                                                alignSelf: message?.userId === user?._id ? "flex-end" : "flex-start",
                                            }}
                                        >
                                            <p style={{ fontFamily: "Roboto", fontSize: "10px", color: "#00AF80" }}>{message.name}</p>
                                            <Typography
                                                variant='body2'
                                                style={{
                                                    color: "rgb(150,150,150)",
                                                    fontFamily: "Roboto",
                                                    fontSize: "18px",
                                                }}>{message.text}
                                            </Typography>
                                           <p style={{ fontFamily: "Roboto", fontSize: "10px", color: "rgb(150,150,150)",textAlign:"right" }}>{message.time.slice(0,5)}</p>
                                        </Stack>)
                                        ) : ""}
                                    </Stack>
                                </>
                            }
                            <Paper
                                elevation={2}
                                sx={{
                                    display: "flex",
                                    position: "absolute",
                                    bottom: "0",
                                    width: "100%"
                                }}>
                                <TextField
                                    size='small'
                                    value={message.text}
                                    onKeyDown={e => { e.keyCode === 13 ? send(e) : console.log("") }}
                                    onChange={e => { setMessage({ ...message, text: e.target.value }) }}
                                    fullWidth
                                />
                                <IconButton size='medium'  >
                                    <SendIcon color='primary' onClick={send} />
                                </IconButton>
                            </Paper>

                        </Paper>
                    </Stack>
                </Grid>
            </Grid>
            {/* </Container> */}
        </>
    )
}

export default Discussion