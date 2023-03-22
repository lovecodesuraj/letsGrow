// import { Paper } from '@mui/material';
import React from 'react'
import { EmailShareButton, FacebookShareButton, InstapaperShareButton, TelegramShareButton, WhatsappShareButton } from "react-share"
import { Button, Divider, ButtonGroup, IconButton, Paper, Typography } from "@material-ui/core"
import Chart from '../assets/Chart';
import SubscribeIcon from "@material-ui/icons/FavoriteBorder"
import SubscribedIcon from "@material-ui/icons/Favorite"
import DeleteIcon from "@material-ui/icons/DeleteOutline"
// import VotingDetails from './votingDetails/VotingDetails';
import MoreIcon from "@material-ui/icons/MoreHorizOutlined"
import DiscussionIcon from "@material-ui/icons/ChatBubbleOutline"

import { Grid, Stack, Box } from '@mui/material';
import ShareIcon from "@material-ui/icons/Share"
import moment from "moment"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addApproval,deleteVoting, addDisapproval, subscribe } from "../../../../actions/votings"
const Voting = ({ voting }) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { _id } = voting;
   const user = JSON.parse(localStorage.getItem('user'));

   const data = [{ name: "Aprrovals", value: voting.approvals.length }, { name: "disapprovals", value: voting.disapprovals.length },];
   return (
      <>
         < Grid

            container
            p={3}
            md={12}
            sm={12}
            spacing={1}
            sx={{
               backgroundColor: "white",
               borderRadius: "5px",
               borderBottom: "4px solid rgba(0,0,0,0.1)"
            }}
         >
            <Grid item md={6} sm={12} sx={{ marginBottom: "10px" }}>
               <Typography variant='h6' style={{ cursor: "pointer" }} onClick={e => { e.preventDefault(); dispatch({ type: "SET_DETAILED_VOTING", voting }) }} >{voting.title}</Typography>
               <Typography variant='body2' style={{ color: "rgb(93,108,116)" }}>{voting.description.slice(0, 50)}</Typography>
               {/* <Typography variant='body2' style={{ color: "rgb(93,108,116)" }}> Started {moment(voting.startingDate).fromNow()}</Typography> */}
               <Typography variant='body2' style={{ color: "rgb(93,108,116)" }}> Ends  {moment(voting.endDate).endOf('day').fromNow()}</Typography>
               <Typography variant='body2' style={{ color: "rgb(93,108,116)" }}> Subscribers : {voting.subscribers.length}</Typography>
               {/* <ButtonGroup  style={{ marginTop: "10px" ,gap:"5px"}}   > */}
               <Stack direction="row" mt={2} spacing={0.5}>
                  <Button 
                  size='small' 
                  variant={voting.subscribers.indexOf(user?._id)===-1? "outlined":"contained"}   
                  onClick={e => { e.preventDefault(); user ? dispatch(subscribe({ userId: user._id, votingId: _id })) : navigate("/account/login") }}
                  >{voting.subscribers.indexOf(user?._id)===-1? "subscribe":"subscribed"}</Button>
               </Stack>

               {/* </ButtonGroup> */}
            </Grid>

            <Grid item md={5} sm={6}>
               <Box>
                  <Chart data={data} />
                  <Stack direction="row" spacing={0.5} mt={2}>
                     <Button variant='outlined'
                        size='small'
                        onClick={e => { e.preventDefault(); user ? dispatch(addApproval({ userId: user._id, votingId: _id })) : navigate("/account/login") }}
                        style={{
                           backgroundColor: "#80A92A",
                           color: "white",
                           fontFamily: "Roboto",
                           fontSize: "12px",
                           fontWeight: "600",
                           width: "100px",
                           letterSpacing: "1px"
                        }}>up Vote</Button>
                     <Button
                        size='small'
                        onClick={e => { e.preventDefault(); user ? dispatch(addDisapproval({ userId: user._id, votingId: _id })) : navigate("/account/login") }}
                        style={{
                           backgroundColor: "#0D2A47",
                           color: "white",
                           width: "100px",
                           fontFamily: "Roboto",
                           fontSize: "12px",
                           fontWeight: "600",
                           letterSpacing: "1px"
                        }}>Down Vote</Button>
                  </Stack>
               </Box>
            </Grid>
            <Grid md={1} xs={12} item sx={{}} >
                 {/* <Paper elevation={1}> */}

                  <Stack direction="column"  spacing={0.5}   >
                        {/* <IconButton size='small' ><MoreIcon /></IconButton> */}
                        {/* <IconButton size='small'
                         onClick={e=>{e.preventDefault(); setDiscussion({_id:discussion._id}); user ? navigate(`/discussions/${_id}`):navigate("/account/login")}}
                        ><DiscussionIcon /></IconButton> */}
                        <IconButton size='small' ><ShareIcon /> </IconButton>
                        {user?._id === voting?.creator ?
                     <IconButton size='small'
                     onClick={(e) => { e.preventDefault(); dispatch(deleteVoting({votingId : voting._id,navigate}))}} >
                        <DeleteIcon />
                     </IconButton> : ""}
                        {/* <IconButton size='small' ><DeleteIcon /> </IconButton> */}
                  </Stack>
                           {/* </Paper> */}
            </Grid>
            {/* <Divider light /> */}

         </Grid>
      </>
   )
}

export default Voting