import React from 'react'
import { Paper,Stack   } from '@mui/material'
import { Button } from '@material-ui/core'

const DefaultChat = () => {
  return <>
     <Paper elevation={0 } style={{height:"88vh"}}>
            <Paper elevation={2} style={{display:"flex",padding:"0 10px",height:"10%",alignItems:"center",justifyContent:"space-between"}}  >
                {/* <Typography variant="h5" style={{color:"rgb(93,108,116)",}}></Typography> */}
                {/* <IconButton ><LeaveIcon /></IconButton> */}
            </Paper>
            <Stack
                    id='messageBox'
                    direction="column"
                    spacing={1}
                    pt={2}
                    pb={2}
                    style={{
                        overflowY: "auto",
                        height: '75%',
                        justifyContent:"center",
                        alignItems:"center",
                        // backgroundColor:"grey",
                        width: "100%",
                    }}
                >
                  <Paper elevation={6} color='primary' style={{width:"40%",padding:"20px",textAlign:"center",fontFamily:"Roboto",fontSize:"20px",color:"rgba(255,255,255,0.8)", backgroundColor:"#007AFF"}}>Select  Chat</Paper>
                </Stack>
                <Paper elevation={6} style={{height:"10%"}}>

                        <input
                            type="text"
                            placeholder="Message"
                            disabled
                            style={{
                                width: "90%",
                                padding: "20px",
                                border: "0px solid",
                                background: "transparent",
                                color: "rgb(45,45,45)",
                                fontFamily: "Roboto"
                            }}
                            />
                        {/* <IconButton style={{ backgroundColor: "" }} ><img src="https://cdn-icons-png.flaticon.com/128/3682/3682321.png" height="25px" /></IconButton> */}
                </Paper>

             </Paper>  
  </>
}

export default DefaultChat