// import { applyMiddleware } from "redux"
import * as API from "../api/index";

export const sendNotification=(formData)=>async(dispatch)=>{
    try {
        const {data}=await API.sendNotification(formData);
        console.log({data});
    } catch (error) {
        console.log({error})
    }
}

export const fetchNotifications=(formData)=>async (dispatch)=>{
      try {
         const {data}=await API.fetchNotifications(formData);
      } catch (error) {
        console.log({error});
      }
}