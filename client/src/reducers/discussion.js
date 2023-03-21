const discussionReducer = (state = { discussions: [], isLoading: false, discussion: {},messages:[], }, action) => {
    switch (action.type) {
        case "START_LOADING":
            return { ...state, isLoading: true };
        case "END_LOADING":
            return { ...state, isLoading: false };
        case "FETCH_DISCUSSIONS":
            return { ...state, disscussions: action.data.discussions };
        case "FETCH_DISCUSSION" :
            // console.log()
            return {...state,discussion:action.data.discussion};
        case "SET_MESSAGES" :
            return {...state,messages:[...state.messages,action.message]}
        default:
            return state;
    }
};

export default discussionReducer