import React, { useState } from 'react';
import { Paper, Box, Grid, Button, FormControlLabel, FormControl, TextField, FormGroup, FormLabel, Input, Typography } from '@mui/material';
import { style } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {createVoting} from "../../../../actions/votings";
import { useDispatch } from 'react-redux';

const defaultData = {
    title: "",
    description: "",
    lastDate: '',
}
const CreateVotingForm = () => {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const [styles, setStyles] = useState(style);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState(defaultData);
    const { isLoading } = useSelector(state => state.votings);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        dispatch(createVoting(formData));
        setFormData(defaultData);
        setLoading(false);
        setSubmitted(true);
    }
    return <>
        <Grid container md={12} m={6} justifyContent="center" alignItems="center" >
            <Grid item md={3} sm={6} xs={12}>
                <Paper style={styles.paper} elevation={6}>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <Box sx={{ color: "#187E64", fontFamily: "Roboto", leeterSpacing: "2px", fontSize: "25px" }}>Create Voting</Box>
                        <Box sx={{ display: 'flex', flexDirection: "column", gap: "5px" }}>
                            <label htmlFor="title" style={{ fontFamily: "Roboto", color: "rgb(93,108,116", fontSize: "15px", letterSpacing: "1px" }}>Title</label>
                            <TextField
                                InputProps={{
                                    sx: {
                                        "& input": {
                                            // textAlign: "center"
                                            color: "rgb(93,108,116)"
                                        }
                                    }
                                }}
                                required
                                value={formData.title}
                                onChange={e=>{setFormData({...formData,title:e.target.value})}}
                                variant='outlined'
                                name="title"
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: "column", gap: "5px" }}>
                            <label htmlFor="title" style={{ fontFamily: "Roboto", color: "rgb(93,108,116", fontSize: "15px", letterSpacing: "1px" }}>Description</label>
                            <TextField
                                InputProps={{
                                    sx: {
                                        "& input": {
                                            // textAlign: "center"
                                            color: "rgb(93,108,116)"
                                        }
                                    }
                                }}
                                required
                                value={formData.description}
                                onChange={e=>{setFormData({...formData,description:e.target.value})}}
                                variant='outlined'
                                name="title"
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: "column", gap: "5px" }}>
                            <label htmlFor="title" style={{ fontFamily: "Roboto", color: "rgb(93,108,116", fontSize: "15px", letterSpacing: "1px" }}>Last date</label>
                            <TextField
                                InputProps={{
                                    sx: {
                                        "& input": {
                                            // textAlign: "center"
                                            color: "rgb(93,108,116)"
                                        }
                                    }
                                }}
                                required
                                value={formData.lastDate}
                                onChange={e=>{setFormData({...formData,lastDate:e.target.value})}}
                                variant='outlined'
                                type="date"
                                name="title"
                                fullWidth
                            />

                        </Box>
                        <Button type='submit' variant="contained" color='primary' >Create</Button>
                    </form>

                </Paper>
            </Grid>
        </Grid>
    </>
}

export default CreateVotingForm