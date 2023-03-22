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

export const fetchVoting=({_id})=>async (dispatch)=>{
    try {        
        dispatch({type:"START_LOADING"});
        const {data}=await api.fetchVoting({_id});
        // console.log({data})
        dispatch({type:"FETCH_VOTING",data});
        dispatch({type:"END_LOADING"});
    } catch (error) {
        console.log(error);
    }
}


export const fetchSearchedVotings=(formData)=>async (dispatch)=>{
    try {        
        dispatch({type:"START_LOADING"});
        const {data}=await api.fetchSearchedVotings(formData);
        dispatch({type:"FETCH_VOTINGS",data});
        dispatch({type:"END_LOADING"});
    } catch (error) {
        console.log(error);
    }
}
export const deleteVoting=(formData)=>async (dispatch)=>{
    try {        
        dispatch({type:"START_LOADING"});
        const {data}=await api.deleteVoting(formData);
        console.log({data});
        dispatch({type:"DELETE_VOTING",formData});
        dispatch({type:"END_LOADING"});
        // formData.navigate("/votings");
    } catch (error) {
        console.log(error);
    }
}
export const fetchMyVotings=(formData)=>async (dispatch)=>{
    try {        
        dispatch({type:"START_LOADING"});
        const {data}=await api.fetchMyVotings(formData);
        dispatch({type:"FETCH_VOTINGS",data});
        dispatch({type:"END_LOADING"});
    } catch (error) {
        console.log(error);
    }
}
export const fetchMySubscribedVotings=(formData)=>async (dispatch)=>{
    try {        
        dispatch({type:"START_LOADING"});
        const {data}=await api.fetchMySubscribedVotings(formData);
        dispatch({type:"FETCH_VOTINGS",data});
        dispatch({type:"END_LOADING"});
    } catch (error) {
        console.log(error);
    }
}

export const createVoting=({formData,navigate})=>async (dispatch)=>{
    try {      
        // console.log(data)  
        dispatch({type:"START_LOADING"});
        const {data}=await api.createVoting(formData);
        dispatch({type:"CREATE_VOTING",data});
        dispatch({type:"END_LOADING"});
        navigate("/votings");
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

export const subscribe=(formData)=>async (dispatch)=>{
    try {      
        const {votingId}=formData;
        dispatch({type:"START_LOADING"});
        const {data:{voting}}=await api.subscribe(formData);
        dispatch({type:"UPDATE_VOTING",data:{voting,votingId}});
        dispatch({type:"END_LOADING"});
    } catch (error) {
        console.log({error});
    }
}

