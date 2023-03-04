import * as api from "../api/index";

export const signup=(formData,navigate)=>async (dispatch)=>{
    try {
       const {data}=await api.signup(formData);
       console.log("data : ",data);
       dispatch({type:"AUTH",data});
       navigate("/");
    } catch (error) {
        console.log(error);
    }
 } 