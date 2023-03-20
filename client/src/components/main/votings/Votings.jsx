import React, { useEffect, useState } from 'react'
import { Stack, Divider, Button, Box, Paper, CircularProgress, Grid, Typography, TextField, IconButton } from "@mui/material";
import VotingDetails from './voting/votingDetails/VotingDetails';
import { demoVotings } from './assets/demoVotings';
import Voting from './voting/Voting';
import { useDispatch, useSelector } from "react-redux";
import { fetchVotings,fetchSearchedVotings, fetchMySubscribedVotings, fetchMyVotings } from '../../../actions/votings';
import TrendingIcon from "@material-ui/icons/TrendingUp"
import NewIcon from "@material-ui/icons/NewReleasesOutlined"
import MyIcon from "@material-ui/icons/PersonOutline"
import AllIcon from "@material-ui/icons/HomeOutlined"
import VotedIcon from "@material-ui/icons/FavoriteBorder"
import SearchIcon from "@material-ui/icons/Search"
import { useNavigate } from 'react-router-dom';
import "./styles.css";
const Votings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const  [search,setSearch]=useState("");
  const [category, setCategory] = useState("");
  const { votings, isLoading } = useSelector(state => state.votings);
  const user = JSON.parse(localStorage.getItem('user'));
  // const [votingss,setVotings]=
  // console.log(votings);
  useEffect(() => {
    dispatch(fetchVotings());
  }, [dispatch]);

  return (
    <>
      <Grid md={12} className="votings" spacing={2} sx={{ padding: "24px 0 " }} container>
        <Grid item md={2} xs={12} sx={{}}>
          <Stack sx={{ flexDirection: { xs: "row", md: "column" } }} spacing={2} p={2}>
            <Button variant='contained'
              sx={{ backgroundColor: "#00AF80", fontWeight: "600", "&:hover": { backgroundColor: '#00AF80' } }}
              onClick={e => { user ? navigate("/votings/create") : navigate("/account/login") }} >Create Voting</Button>
            <Paper elevation={2} sx={{ display: "flex" }}>
              <TextField size='small' value={search} onChange={e=>{setSearch(e.target.value)}} />
              <IconButton>
                <SearchIcon onClick={e=>{e.preventDefault(); dispatch(fetchSearchedVotings({search}))}} />
              </IconButton>
            </Paper>
            <Stack spacing={1}>
              <Typography
                variant='h5'
                sx={{ cursor: "pointer", color: "rgb(0,30,43)", fontSize: "18px", backgroundColor: "white", padding: "5px 10px", borderRadius: "5px", display: "flex", gap: "10px" }}
                onClick={e => { e.preventDefault(); setCategory("All"); dispatch(fetchVotings()); }}><AllIcon />All</Typography>
              <Typography
                variant='h5'
                sx={{ cursor: "pointer", color: "rgb(0,30,43)", fontSize: "18px", backgroundColor: "white", padding: "5px 10px", borderRadius: "5px", display: "flex", gap: "10px" }}
                onClick={e => { e.preventDefault(); setCategory("Trending"); }}><TrendingIcon />Trending</Typography>
              <Typography
                variant='h5'
                sx={{ cursor: "pointer", color: "rgb(0,30,43)", fontSize: "18px", backgroundColor: "white", padding: "5px 10px", borderRadius: "5px", display: "flex", gap: "10px" }}
                onClick={e => { e.preventDefault(); setCategory("New"); }}><NewIcon />New</Typography>
              <Typography
                variant='h5'
                sx={{ cursor: "pointer", color: "rgb(0,30,43)", fontSize: "18px", backgroundColor: "white", padding: "5px 10px", borderRadius: "5px", display: "flex", gap: "10px" }}
                onClick={e => { e.preventDefault();  setCategory("Subscribed"); user ? dispatch(fetchMySubscribedVotings({ userId: user?._id })) : navigate("/account/login"); }}><VotedIcon />Subscribed</Typography>
            <Typography
              variant='h5'
              sx={{ cursor: "pointer", color: "rgb(0,30,43)", fontSize: "18px", backgroundColor: "white", padding: "5px 10px", borderRadius: "5px", display: "flex", gap: "10px" }}
              onClick={e => { e.preventDefault(); setCategory("My");  user ? dispatch(fetchMyVotings({ userId: user._id })) : navigate("/account/login")  }}><MyIcon />My Votings</Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={6}>


        <Stack
          spacing={2}
          sx={{
            boxShadow: "none",
            // backgroundColor: "#F5F1EA",
            height: "90vh",
            overflowY: "auto",
          }}
        >
          <Typography variant="h5" p={2} style={{ color: "rgb(93,108,116)" }}>
            <span style={{ color: "#00AF80" }}>
              {category}
              </span> Votings
               <span style={{position:"relative",fontSize:"12px",bottom:"10px",left:"5px"}}>
                ({votings.length })
                </span>
                </Typography>
          {isLoading ? <CircularProgress />
            : <>
              {votings.map((voting, idx) =>
                <>
                  <Voting voting={voting} key={idx} />
                </>
              )}
            </>
          }
        </Stack>

      </Grid>
      {/* <Grid item md={4}> */}
      <VotingDetails />
      {/* </Grid> */}
    </Grid>
    </>
  )
}

export default Votings