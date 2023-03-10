import * as api from "../api/index";

export const fetchBills=()=>async (dispatch)=>{
    try {        
        dispatch({type:"START_LOADING"});
        const {data}=await api.fetchBills();
        dispatch({type:"FETCH_BILLS",data});
        dispatch({type:"END_LOADING"});
    } catch (error) {
        console.log(error);
    }
}