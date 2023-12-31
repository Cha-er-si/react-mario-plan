import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { fetchProjects } from "./store/actions/projectActions";
import { listenToAuthChange } from "./store/actions/authActions";
import firebase from "./config/firebase";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchProjects());
store.dispatch(listenToAuthChange());
const root = ReactDOM.createRoot(document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
