import { Box, Button } from '@material-ui/core';
import { Container, IconButton, Typography, Grid, Paper, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import SendIcon from "@material-ui/icons/SendOutlined"
import MoreHorizOutlined from '@material-ui/icons/MoreHorizOutlined';
import { useDispatch } from 'react-redux';


const Discussion = () => {
    const { _id } = useParams();
    const user=JSON.parse(localStorage.getItem("user"));
    const dispatch =useDispatch();
    const [message, setMessage] = useState({
        userId:user?._id,
        _id:"",
        text:"",
    });
    const [messages,setMessages]=useState([]);
    const sendMessage=async()=>{
        setMessages([...messages,message]);
        setMessage({
            userId:user?._id,
            _id:"",
            text:"",
        });

        // dispatch(sendMessage:)
        
        var elem = document.getElementById('messageBox');
        elem.scrollTop = elem.scrollHeight;
    }
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
                // sx={{backgroundColor:"grey"}}

                >
                    <Stack >
                        <Paper elevation={6}
                          style={{ backgroundColor:"#F1F1F1",display: "flex", position: "relative", flexDirection: "column", height: "80vh" }}>
                            {/* <TextField ></TextField> */}
                            <Box 
                              
                              style={{borderBottom:"2px solid grey", display: "flex",height:"8%", padding:" 0px 20px ",alignItems:"center",justifyContent: "space-between" }}>
                                <Typography variant='h6'>hello bro   </Typography>
                                <IconButton><MoreHorizOutlined /></IconButton>
                            </Box>

                            <Box 
                             id='messageBox'
                             style={{overflowY:"auto",height:'84%',width:"100%",display:"flex",flexDirection:"column"}}
                            >
                             {messages.length ? messages?.map((message,index)=>
                             (<Box 
                                key={index}
                                style={{padding:"5px",backgroundColor:"white"}}
                                >{message.text}</Box>)
                             ):""}
                            </Box>
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
                                    onKeyDown={e=>{e.keyCode===13?sendMessage():console.log("")}}
                                    onChange={e => { setMessage({...message,text:e.target.value}) }}
                                    fullWidth
                                />
                                <IconButton size='medium'  >
                                    <SendIcon color='primary' onClick={e => { e.preventDefault();sendMessage()}} />
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