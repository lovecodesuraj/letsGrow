const discussionReducer = (state = { discussions: [],joinedDiscussions:[], isLoading: false, discussion: {},messages:[], }, action) => {
    switch (action.type) {
        case "START_LOADING":
            return { ...state, isLoading: true };
        case "END_LOADING":
            return { ...state, isLoading: false };
        case "FETCH_DISCUSSIONS":
            console.log(action.data.discussions)
            return { ...state, disscussions: action.data.discussions };
        case "FETCH_DISCUSSION" :
            // console.log()
            return {...state,discussion:action.data.discussion};
        case "SET_MESSAGES" :
            return {...state,messages:[...state.messages,action.message]}
        case "FETCH_JOINED_DISCUSSIONS" :
            return {...state,joinedDiscussions:action.data.discussions};
        default:
            return state;
    }
};

export default discussionReducer