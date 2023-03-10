import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBills } from '../../../../actions/bills';
import { CircularProgress } from '@material-ui/core';
import { Stack,Grid } from "@mui/material";
import Bill from './bill/Bill';
import { demoBill } from './assets/demoBill';

const Bills = () => {
  const dispatch = useDispatch();
  const { bills, isLoading } = useSelector(state => state.bill);
  useEffect(() => {
    dispatch(fetchBills())
  }, [dispatch])
  return <>
    <Grid container md={10} >

      {isLoading ? <CircularProgress /> : <>
        <Stack direction="row" >
          {/* {bills.map((bill, index) => {
          <Bill bill={bill} />
        })} */}
          <Bill bill={demoBill} />
          <Bill bill={demoBill} />
          <Bill bill={demoBill} />

        </Stack>

      </>}
    </Grid>
  </>
}

export default Bills