import { Box, Button, CircularProgress } from '@material-ui/core';
import { IconButton, Typography, Grid, Paper, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MoreHorizOutlined from '@material-ui/icons/MoreHorizOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiscussion ,fetchDefaultDiscussion} from '../../../../actions/discussion';
import ChatBox from './ChatBox';
import SearchIcon from "@material-ui/icons/Search"
import { useNavigate } from 'react-router-dom';



const Discussion = ({ socket }) => {
    var { _id } = useParams();
    // console.log({_id})
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { discussion, isLoading } = useSelector(state => state.discussions);



    useEffect(() => {

        if(_id){
            dispatch(fetchDiscussion({ votingId: _id }))
        }else{
            dispatch(fetchDefaultDiscussion({userId:user?._id}));
        }
    }
        , [dispatch])

    return (

        <>
            <Grid container md={12} m="auto" >
                <Grid item md={2} sx={{ backgroundColor: "#2471CB" }}>

                    <Stack direction="column" pt={2}>
                         <Box style={{width:"90%",borderRadius:"5px",display:"flex",   backgroundColor:"rgb(0,0,0,0.1)",margin:"auto"}}>
                            <input type="text" style={{padding:"10px",border: "0px solid",background:"transparent",color:"rgb(255,255,255,0.8)",fontFamily:"Roboto"}} />
                            <IconButton><SearchIcon /></IconButton>
                         </Box>
                    </Stack>

                </Grid>
                <Grid item md={7} height="87vh">
                    <Grid container md={12} sx={{ m: "auto" }} >
                        <Grid item md={12} height="12vh" >
                            {isLoading ? <CircularProgress />
                                : <>
                                    <Stack direction="row" pl={2} pr={2} sx={{ height: "100%", alignItems: "center", justifyContent: "space-between" }}>
                                        <Typography style={{ color: "rgb(093,108,116)" }}>{discussion.name}</Typography>
                                        <IconButton><MoreHorizOutlined /></IconButton>
                                    </Stack>
                                </>
                            }
                            <Typography variant='h6' style={{ color: "rgb(93,108,116)" }}>{ }</Typography>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} sx={{ backgroundColor: "#F8F9FB" }}>

                            {isLoading ? <CircularProgress />
                                : 
                                <ChatBox initialMessages={discussion.messages} socket={socket} />
                            }
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>



        </>

    )
}

export default Discussion