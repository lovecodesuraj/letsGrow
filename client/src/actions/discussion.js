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
export const fetchDiscussion = ({votingId}) => async (dispatch) => {
    try {
        dispatch({ type: "START_LOADING" });
        const { data } = await api.fetchDiscussion({votingId});
        dispatch({ type: "FETCH_DISCUSSION", data });
        dispatch({ type: "END_LOADING" });
    }
    catch (error) {
        console.log({ error });
    }
}