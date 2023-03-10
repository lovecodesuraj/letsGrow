import { Grid, Button, Paper, ButtonGroup, IconButton, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import useStyles from "./styles";
import { BorderLinearProgress } from './parts';




const Bill = ({ bill }) => {
  const classes = useStyles();
 
  return <>

    <Grid container spacing={3} md={5} className={classes.bill} >
      <Grid item md={2} className={classes.voting}>
        <ButtonGroup orientation='vertical' >
          <IconButton size='small'>
            <img width="25px" src="https://cdn-icons-png.flaticon.com/512/892/892692.png" alt="" />
          </IconButton>
          <Button variant='text' size='small' className={classes.text} >{bill.approvals.length - bill.disapprovals.length}</Button>
          <IconButton size='small'>
            <img width="25px" src="https://cdn-icons-png.flaticon.com/512/892/892634.png" alt="" />
          </IconButton>
        </ButtonGroup>
      </Grid>
      <Grid item md={10} className={classes.billInfo}>
        <Paper elevation={0} >
          <Typography className={classes.billTitle} component="h2" >{bill.title}</Typography>
          <Typography className={classes.text} >Ministry : {bill.ministry}</Typography>
          <Typography className={classes.text} >Introduced By : {` ${bill.process.introducedBy.house} (${bill.process.introducedBy.date})`}</Typography>
          {/* <Typography className={classes.text} >Introduced By : {` ${bill.process.introducedBy.house} (${bill.process.introducedBy.date})`}</Typography> */}
          <BorderLinearProgress process={bill.process} />
        </Paper>
      </Grid>
    </Grid>
  </>
}

export default Bill