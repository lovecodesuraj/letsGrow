const userReducer =     (state = { notifications:[], isLoading: false }, action) => {
    switch (action.type) {
        case "SET_NOTIFICATIONS" :
            return {...state};
        default:
            return state;
    }
};

export default userReducer