// import { Paper } from '@mui/material';
import React from 'react'
import { Button, ButtonGroup, IconButton, Paper, Typography } from "@material-ui/core"
import Chart from '../assets/Chart';
import { Grid, Stack, Box } from '@mui/material';
import moment from "moment"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addApproval, addDisapproval } from "../../../../actions/votings"
const Voting = ({ voting }) => {
   const dispatch = useDispatch();
   const navigate=useNavigate();
   const { _id } = voting;
   const user = JSON.parse(localStorage.getItem('user'));
   const data = [{ name: "Aprrovals", value: voting.approvals.length }, { name: "disapprovals", value: voting.disapprovals.length },];
    
   return (
      <>
         < Grid

            container
            p={3}
            md={7}
            sm={12}
            // spacing={1}
            sx={{
               backgroundColor: "white",
               borderRadius: "5px",

            }}
         >
            <Grid item md={6} sm={12} sx={{ marginBottom: "10px" }}>
               <Typography variant='h6' >{voting.title}</Typography>
               <Typography variant='body2' style={{ color: "rgb(93,108,116)" }}>{voting.description.slice(0, 50)}</Typography>
               <Typography variant='body2' style={{ color: "rgb(93,108,116)" }}> Start : {moment(voting.startingDate).fromNow()}</Typography>
               <Typography variant='body2' style={{ color: "rgb(93,108,116)" }}> Ends : {moment(voting.endDate).endOf('day').fromNow()}</Typography>
               <ButtonGroup style={{ marginTop: "10px" }}  >
                  <Button
                     style={{
                        backgroundColor: "#00AF80",
                        color: "white",
                        fontFamily: "Roboto",
                        fontSize: "12px",
                        fontWeight: "600",
                        letterSpacing: "1px"

                     }}>Subscribe</Button>
                  <Button variant='outlined'
                     onClick={e => { e.preventDefault(); user? dispatch(addApproval({ userId: user._id, votingId: _id })):navigate("/account/login") }}
                     style={{
                        backgroundColor: "#0D2A47",
                        color: "white",
                        fontFamily: "Roboto",
                        fontSize: "12px",
                        fontWeight: "600",
                        letterSpacing: "1px"
                     }}>up Vote</Button>
                  <Button
                     onClick={e => { e.preventDefault(); user ? dispatch(addDisapproval({ userId: user._id, votingId: _id })):navigate("/account/login") }}
                     style={{
                        backgroundColor: "#80A92A",
                        color: "white",
                        fontFamily: "Roboto",
                        fontSize: "12px",
                        fontWeight: "600",
                        letterSpacing: "1px"
                     }}>Down Vote</Button>
               </ButtonGroup>
            </Grid>

            <Grid item md={3} sm={6}>
               <Box>
                  <Chart data={data} />
               </Box>
            </Grid>
         </Grid>
      </>
   )
}

export default Voting