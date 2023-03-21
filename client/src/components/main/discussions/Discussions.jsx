import { CircularProgress, Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiscussions, fetchJoinedDiscussions } from '../../../actions/discussion';
import { Stack,Box,IconButton } from '@mui/material';
import SearchIcon from "@material-ui/icons/Search";



const Discussions = () => {
  const dispatch = useDispatch();
  const user=JSON.parse(localStorage.getItem("user"));
  const userId=user?._id;
  const { joinedDiscussions,isLoading } = useSelector(state => state.discussions);

  useEffect(() => {
    // dispatch(fetchDiscussions());
    dispatch(fetchJoinedDiscussions({userId}));
  }
    , [dispatch])
  return (
    <>
      <Grid container md={12} m="auto" style={{height:"88vh"}} >
        <Grid item md={2} style={{ backgroundColor: "#2471CB" }}>
          <Stack direction="column" pt={2}>
            <Box style={{ width: "90%", borderRadius: "5px", display: "flex", backgroundColor: "rgb(0,0,0,0.1)", margin: "auto" }}>
              <input type="text" style={{ padding: "10px", border: "0px solid", background: "transparent", color: "rgb(255,255,255,0.8)", fontFamily: "Roboto" }} />
              <IconButton><SearchIcon /></IconButton>
            </Box>
            <Stack direction="column">
                 {isLoading ? <CircularProgress />
                 :<>{
                  joinedDiscussions?.map(discussion=><>
                     {discussion.name.slice(0,15)}
                  </>)
                 }
                 </>
                 }

            </Stack>
          </Stack>
        </Grid>
        <Grid item md={7}>

        </Grid>
        <Grid item md={3}>

        </Grid>
      </Grid>
    </>
  )
}

export default Discussions