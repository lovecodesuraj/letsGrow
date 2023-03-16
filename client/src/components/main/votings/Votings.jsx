import React, { useEffect } from 'react'
import { Stack, Button, Box, Paper, CircularProgress, Grid, Typography, TextField, IconButton } from "@mui/material";

import { demoVotings } from './assets/demoVotings';
import Voting from './voting/Voting';
import { useDispatch, useSelector } from "react-redux";
import { fetchVotings } from '../../../actions/votings';
import TrendingIcon from "@material-ui/icons/TrendingUp"
import NewIcon from "@material-ui/icons/NewReleasesOutlined"
import SubscribedIcon from "@material-ui/icons/Subscriptions"
import VotedIcon from "@material-ui/icons/FavoriteBorder"
import SearchIcon from "@material-ui/icons/Search"
import CreateVotingForm from '../../forms/votings/createVotingForm/CreateVoting';
import { useNavigate } from 'react-router-dom';
const Votings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { votings, isLoading } = useSelector(state => state.votings);
  // const [votingss,setVotings]=
  // console.log(votings);
  useEffect(() => {
    dispatch(fetchVotings());
  }, [dispatch]);

  return (
    <>
      <Grid md={12} spacing={2} sx={{ padding: "24px 0 " }} container>
        <Grid item md={2} xs={12} sx={{}}>
          <Stack sx={{ flexDirection: { xs: "row", md: "column" } }} spacing={2} p={2}>
            <Button variant='contained' sx={{ backgroundColor: "#00AF80", "&:hover": { backgroundColor: '#00AF80' } }} onClick={e => { navigate("/votings/create") }} >Create Voting</Button>
            <Paper elevation={2} sx={{ display: "flex" }}>
              <TextField size='small' />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Paper>
            <Stack  spacing={1}>
              <Typography variant='h5' sx={{ cursor: "pointer", color: "rgb(0,30,43)", fontSize: "18px", backgroundColor: "white", padding: "5px 10px", borderRadius: "5px", display: "flex", gap: "10px" }}><TrendingIcon />Trending</Typography>
              <Typography variant='h5' sx={{ cursor: "pointer", color: "rgb(0,30,43)", fontSize: "18px", backgroundColor: "white", padding: "5px 10px", borderRadius: "5px", display: "flex", gap: "10px" }}><NewIcon />New</Typography>
              <Typography variant='h5' sx={{ cursor: "pointer", color: "rgb(0,30,43)", fontSize: "18px", backgroundColor: "white", padding: "5px 10px", borderRadius: "5px", display: "flex", gap: "10px" }}><VotedIcon />Subscribed</Typography>
            </Stack>

            {/* <Typography variant='h5' sx={{coolor:"rgb(0,30,43)",fontSize:"18px",backgroundColor:"white",padding:"5px 10px",borderRadius:"5px", display:"flex",gap:"10px"}}>Voted</Typography> */}
            {/* <Typography variant='h5' sx={{coolor:"rgb(0,30,43)",fontSize:"18px",backgroundColor:"white",padding:"5px 10px",borderRadius:"5px", display:"flex",gap:"10px"}}><TrendingIcon />Most Approved</Typography> */}
            {/* <Typography variant='h5' sx={{coolor:"rgb(0,30,43)",fontSize:"18px",backgroundColor:"white",padding:"5px 10px",borderRadius:"5px", display:"flex",gap:"10px"}}><TrendingIcon />Most Disapproved</Typography> */}
            {/* <Typography variant='h5' sx={{coolor:"rgb(0,30,43)",fontSize:"18px",backgroundColor:"white",padding:"5px 10px",borderRadius:"5px", display:"flex",gap:"10px"}}><TrendingIcon />Trending</Typography> */}
          </Stack>
        </Grid>
        <Grid item md={10}>
          {isLoading
            ? <Box ><CircularProgress /></Box>
            :
            <Stack
              spacing={2}
              sx={{
                boxShadow: "none",
                backgroundColor: "#F5F1EA",
                height: "90vh",
                overflowY: "auto",
              }}
            >
              {votings.map((voting, idx) => (
                <Voting voting={voting} key={idx} />
              ))}
            </Stack>
          }
        </Grid>
      </Grid>
    </>
  )
}

export default Votings