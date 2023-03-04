const authReducer = (state = { authData: null, isLaoding: false, message: "" }, action) => {
    switch (action.type) {
      case "START_LOADING":
        return {
          ...state,
          isLoading: true
        }
      case "END_LOADING":
        return {
          ...state,
          isLoading: false
        }
      case 'AUTH':
        const { name, email, picture } = action.data.user;
        const { token } = action.data;
        const { _id } = action.data.user;
        localStorage.setItem('user', JSON.stringify({ name, email, picture, _id, token }));
        return { ...state, authData: { name, email, picture, _id, token }, message: "" };
      case "LOGOUT":
        localStorage.clear();
        return { ...state, authData: null };
      case "AUTH_ERROR_MESSAGE":
        return { ...state, message: action.message }
      default:
        return state;
    }
  }
  
  export default authReducer