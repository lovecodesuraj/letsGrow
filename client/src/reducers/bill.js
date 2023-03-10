const billReducer = (state = { bills: [], isLaoding: false, bill: {} }, action) => {
    switch (action.type) {
        case "START_LOADING":
            return { ...state, isLaoding: true };
        case "END_LOADING":
            return { ...state, isLaoding: false };
        case "FECT_BILLS":
            return { ...state, bills: action.data };
        default:
            return state;
    }
};

export default billReducer