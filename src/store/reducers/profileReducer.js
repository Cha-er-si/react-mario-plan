const initState = {};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PROFILE":
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export default profileReducer;
