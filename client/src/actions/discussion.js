import * as api from "../api/index";

export const fetchDiscussions = () => async (dispatch) => {
    try {
        dispatch({ type: "START_LOADING" });
        const { data } = await api.fetchDiscussions();
        dispatch({ type: "FETCH_DISCUSSIONS", data });
        dispatch({ type: "END_LOADING" });
    }
    catch (error) {
        console.log({ error });
    }
}
export const fetchJoinedDiscussions = ({userId}) => async (dispatch) => {
    try {
        dispatch({ type: "START_LOADING" });
        const { data } = await api.fetchJoinedDiscussions({userId});
        // console.log({data})
        dispatch({ type: "FETCH_JOINED_DISCUSSIONS", data });
        dispatch({ type: "END_LOADING" });
    }
    catch (error) {
        console.log({ error });
    }
}



export const fetchDiscussion = ({votingId}) => async (dispatch) => {
    try {
        // console.log({votingId})
        dispatch({ type: "START_LOADING" });
        const { data } = await api.fetchDiscussion({votingId});
        // console.log({data})
        dispatch({ type: "FETCH_DISCUSSION", data });
        dispatch({ type: "END_LOADING" });
    }
    catch (error) {
        console.log({ error });
    }
}
export const fetchDefaultDiscussion = ({userId}) => async (dispatch) => {
    try {
        // console.log({votingId})
        dispatch({ type: "START_LOADING" });
        const { data } = await api.fetchDefaultDiscussion({userId});
        console.log({data})
        dispatch({ type: "FETCH_DISCUSSION", data });
        dispatch({ type: "END_LOADING" });
    }
    catch (error) {
        console.log({ error });
    }
}

export const saveMessage = (formData) => async (dispatch) => {
    try {
        // dispatch({ type: "START_LOADING" });
        const { data } = await api.saveMessage(formData);
        // dispatch({ type: "FETCH_DISCUSSION", data });
        // dispatch({ type: "END_LOADING" });
    }
    catch (error) {
        console.log({ error });
    }
}

