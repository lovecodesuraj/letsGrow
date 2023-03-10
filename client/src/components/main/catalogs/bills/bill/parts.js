import { useState } from 'react';
import { Box, Paper } from '@material-ui/core';
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
// import styles from '../styles';
  const progressbarStyles={
       progressBar:{
    //    transform:"rotate(90deg)",
        margin:"20px 15px",
        // transform:"skewY(45deg)",
       },
  }
export const BorderLinearProgress = ({process}) => {
    // const 
    const [value,setValue]=useState(73);
    const [styles,setStyles]=useState(progressbarStyles);
    return <>
       <div style={styles.progressBar}>
        <ProgressBar
        percent={value}
        width="250px"
        filledBackground="linear-gradient(to right, #32BA7C, #32BA7C)"
        >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
              src={value>=0 ? "https://cdn-icons-png.flaticon.com/128/190/190411.png" : "https://cdn-icons-png.flaticon.com/512/491/491717.png"}
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src={value>=50 ? "https://cdn-icons-png.flaticon.com/128/190/190411.png" : "https://cdn-icons-png.flaticon.com/512/491/491717.png"}
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src={value>=100 ? "https://cdn-icons-png.flaticon.com/128/190/190411.png" : "https://cdn-icons-png.flaticon.com/512/491/491717.png"}
            />
            )}
        </Step>
      </ProgressBar>
            </div>
    </>
}