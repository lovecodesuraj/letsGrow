const discussionReducer = (state = { discussions: [], isLaoding: false, discussion: {} }, action) => {
    switch (action.type) {
        case "START_LOADING":
            return { ...state, isLaoding: true };
        case "END_LOADING":
            return { ...state, isLaoding: false };
        case "FETCH_DISCUSSIONS":
            return { ...state, disscussions: action.data.discussions };
        case "FECT_DISCUSSION" :
            return {...state,discussion:action.data.discussion};
        default:
            return state;
    }
};

export default discussionReducer