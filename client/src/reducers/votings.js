const votingsReducer = (state = { votings: [], isLaoding: false, voting: {} }, action) => {
    switch (action.type) {
        case "START_LOADING":
            return { ...state, isLaoding: true };
        case "END_LOADING":
            return { ...state, isLaoding: false };
        case "FETCH_VOTINGS":
            return { ...state, votings: action.data.votings };
        case "FETCH_VOTING":
            return { ...state, voting: action.data.voting };
        case "CREATE_VOTING":
            return { ...state, votings: [...state.votings,action.data.voting]};
        case "UPDATE_VOTING" :
            // console.log("newVoting",action.action.data.voting)
            const newVotings=state.votings.map(voting=>voting._id===action.data.votingId ? action.data.voting : voting);
            // console.log({newVotings});
            return {...state,votings:[...newVotings]}
        case "DELETE_VOTING" :
            const filteredVotings=state.votings.filter(voting=> voting._id!==action.formData.votingId);
            console.log([filteredVotings]);
            return {...state,votings:filteredVotings};
        case "SET_DETAILED_VOTING" :
            return {...state,voting:action.voting};
        default:
            return state;
    }
};

export default votingsReducer