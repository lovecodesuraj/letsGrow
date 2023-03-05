const authReducer = (state = { authData: null, signupErron:"",isLaoding: false, message: "" }, action) => {
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
      case "SIGNUP_ERROR" :
        return {...state,signupError:action.message};
      case "OTP" :
       return {...state,OTP:action.OTP}; 
      case "SIGNUP_DATA" :
        return {...state,signupData:action.data};
      case 'AUTH':
        const { name, email, picture,_id } = action.response.data;
        const { token } = action.response.data;
        localStorage.setItem('user', JSON.stringify({ name, email, picture, _id, token }));
        localStorage.removeItem("signupData");
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