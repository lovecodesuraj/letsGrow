import * as api from "../api/index";

export const fetchVotings=()=>async (dispatch)=>{
    try {        
        dispatch({type:"START_LOADING"});
        const {data}=await api.fetchVotings();
        // console.log({data})
        dispatch({type:"FETCH_VOTINGS",data});
        dispatch({type:"END_LOADING"});
    } catch (error) {
        console.log(error);
    }
}

export const createVoting=(formData)=>async (dispatch)=>{
    try {      
        // console.log(data)  
        dispatch({type:"START_LOADING"});
        const {data}=await api.createVoting(formData);
        dispatch({type:"CREATE_VOTING",data});
        dispatch({type:"END_LOADING"});
    } catch (error) {
        console.log(error);
    }
}

export const addApproval=(formData)=>async (dispatch)=>{
    try {      
        const {votingId}=formData;
        dispatch({type:"START_LOADING"});
        const {data:{voting}}=await api.addApproval(formData);
        dispatch({type:"UPDATE_VOTING",data:{voting,votingId}});
        dispatch({type:"END_LOADING"});
    } catch (error) {
        console.log(error);
    }
}
export const addDisapproval=(formData)=>async (dispatch)=>{
    try {      
        const {votingId}=formData;
        dispatch({type:"START_LOADING"});
        const {data:{voting}}=await api.addDisapproval(formData);
        dispatch({type:"UPDATE_VOTING",data:{voting,votingId}});
        dispatch({type:"END_LOADING"});
    } catch (error) {
        console.log({error});
    }
}