import { Box, Grid } from '@material-ui/core';
import { Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
const VotingDetails = () => {
    //   const {votingId}=useParams();
    const { voting } = useSelector(state => state.votings);
    return (
        <>
            {/* <Paper elevation={2} > */}
            {/* <Grid container  direction='row' sx={{ backgroundColor: "grey" }}> */}
            <Grid item md={4} p={2} sx={{}}>
                <Stack >
                    <Paper elevation={2} style={{padding:"16px"}}>
                        <Typography variant='h4' mb={1} sx={{ fontFamily: "Roboto", color: "rgb(0,33,40)",fontSize:"25px" }}>{voting.title}</Typography>
                        <p style={{ fontSize: "20px", fontFamily: "Roboto", color: "rgb(93,108,116)" }}>{voting.description}</p>
                         
                    </Paper>
                    <Paper>
                      
                    </Paper>
                </Stack>
            </Grid>
            {/* <Grid item></Grid> */}
            {/* </Grid> */}
            {/* </Paper> */}
        </>
    )
}

export default VotingDetails