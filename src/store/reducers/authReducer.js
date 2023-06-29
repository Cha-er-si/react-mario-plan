const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_FAILED":
      console.log("Login Failed");
      return {
        ...state,
        authError: "Login Failed",
      };
    case "LOGIN_SUCCESS":
      // console.log("Created Project", action.project);
      console.log("Login Success");

      return { ...state, authError: null };
    case "SIGNOUT_SUCCESS":
      console.log("Sign Out Success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("Sign Up Success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("Sign Up Error");
      return {
        ...state,
        authError: action.error.message,
      };
    case "AUTH_CHANGE":
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default authReducer;
