const initState = {};

const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case "PROJECT_NOTIFICATION":
      return state;
    case "USER_NOTIFICATION":
      return state;
    case "FETCH_NOTIFICATION":
      return { ...state, notification: action.notification };
    default:
      return state;
  }
};

export default notificationReducer;
