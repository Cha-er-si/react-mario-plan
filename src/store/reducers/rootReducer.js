import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  profile: profileReducer,
});

export default rootReducer;
