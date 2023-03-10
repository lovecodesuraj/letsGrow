import { makeStyles } from "@material-ui/core";
export default makeStyles(()=>({
       text:{
        fontFamily:"Roboto",
        fontSize:"17px",
        color:"rgb(93, 108, 116)",
    },
    bill:{
        padding:"20px",
    },
    voting:{
        // backgroundColor:"grey",
        display:'flex',
        backgroundColor:"white",
        // alignItems:"center",
        justifyContent:"flex-end",
    },
    billInfo:{
    //   padding:"20px 0 0 0",
    },
    billTitle:{
        color:" rgb(0, 116, 204)",
        fontFamily:"Roboto",
        fontSize:"20px" 
       }

}))