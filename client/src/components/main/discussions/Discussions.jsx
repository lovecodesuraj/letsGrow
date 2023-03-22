import { CircularProgress, Grid, Typography } from '@material-ui/core';
import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDefaultDiscussion, fetchDiscussion, fetchDiscussions, fetchJoinedDiscussions } from '../../../actions/discussion';
import { Stack,Box,IconButton, Paper, Button } from '@mui/material';
import SearchIcon from "@material-ui/icons/Search";
import JoinedIcon from "@material-ui/icons/Done"
// import { fetchDefaultDiscussion } from '../../../actions/discussion';
import ChatBox from "./discussion/ChatBox"
import DefaultChat from './discussion/DefaultChat';
import { joinDiscussion } from '../../../actions/discussion';
import Chart from '../votings/assets/Chart';
import Voting from '../votings/voting/Voting';
import VotingAtDisccusion from './discussion/VotingAtDisccusion'; 
import {fetchVoting} from "../../../actions/votings"


const Discussions = ({socket}) => {
  const {_id} =useParams();
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const user=JSON.parse(localStorage.getItem("user"));
  const [activeDiscussion,setActiveDiscussion]=useState(_id);
  const userId=user?._id;
  const { joinedDiscussions,isLoading,discussion } = useSelector(state => state.discussions);

  const setDiscussion=async({_id})=>{
    try {
      dispatch(fetchDiscussion({_id}));
      navigate(`/discussions/${_id}`);
    } catch (error) {
      console.log({error});
    }
  }
  useEffect(() => {

    // dispatch(fetchDiscussions());
    _id ? dispatch(fetchDiscussion({_id})):console.log("select discussion")
    dispatch(fetchJoinedDiscussions({userId}));

  }
    , [dispatch,userId])
  return (
    <>
      <Grid container md={12} m="auto" style={{height:"88vh"}} >
        <Grid item md={2} style={{ backgroundColor: "#007AFF" }}>
          <Stack direction="column" pt={2} spacing={2}>
            <Box style={{ justifyContent:"space-between", width: "90%", borderRadius: "5px", display: "flex", backgroundColor: "rgb(0,0,0,0.1)", margin: "auto" }}>
              <input type="text" style={{ padding: "10px", border: "0px solid", background: "transparent", color: "rgb(255,255,255,0.8)", fontFamily: "Roboto" }} />
              <IconButton><SearchIcon /></IconButton>
            </Box>
            <Stack direction="column" spacing={0} >
                 {isLoading ? <CircularProgress />
                 :<>{
                  joinedDiscussions?.map(discussion=>< >
                     <Stack 
                     key={discussion._id}
                     direction="row" 
                     alignItems="center" 
                     justifyContent="space-between"
                     pt={1}
                     pb={1}
                     onClick={e=>{e.preventDefault();setActiveDiscussion(discussion._id); setDiscussion({_id:discussion._id})}}
                     sx={{
                      width:"100%",
                      cursor:"pointer",
                       backgroundColor:activeDiscussion===discussion._id?"rgba(0,0,0,0.1)":"",
                    }}
                     >
                      <Typography 
                      style={{ 
                        marginLeft:"22px",
                        fontFamily:"Roboto",
                        letterSpacing:"1px",
                        fontWeight:"500",
                        color:"white"
                        }}>{discussion.name.slice(0,15)} {discussion.name.length >15 ? "...": ""}</Typography>
                      <IconButton style={{marginRight:"20px"}}><JoinedIcon /></IconButton>
                     </Stack>
                  </>)
                 }
                 
                 </>
                 }

            </Stack>
          </Stack>
        </Grid>
        <Grid item md={7}>
             {/* <Discussion socket={socket} /> */}
             {isLoading ? <CircularProgress />
            : discussion && _id ? <>
              {discussion?.members?.includes(userId) ? 
              <ChatBox socket={socket} name={discussion?.name} initialMessages={discussion?.messages} />
            :  <Box>
              <Button 
              variant='contained' 
              color="primary" 
              onClick={e=>{e.preventDefault(); dispatch(joinDiscussion({userId,_id,navigate}))}}
              >Join Discussion</Button>
            </Box>
            }
            </>
             : <DefaultChat  />
            }

        </Grid>
        <Grid 
        item 
        style={{backgroundColor:"rgba(0,0,0,0.1)"}} 
        md={3}>
            {/* <Chart data={data} /> */}
            {!discussion ? <CircularProgress />
            :
            <>
              {/* {dispatch(fetchVoting({_id:discussion.votingId}))} */}
            {
              Voting ? 
              <VotingAtDisccusion   />
              :""
            }
            </>  
          }
        </Grid> 
      </Grid>
    </>
  )
}

export default Discussions