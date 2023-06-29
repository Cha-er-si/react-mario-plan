import firebase from "../../config/firebase";

export const signIn = (credentials) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((res) => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILED", error });
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const listenToAuthChange = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log({ user });
      } else {
        console.log("Not Signed In");
      }
      dispatch({ type: "AUTH_CHANGE", user: user });
    });
  };
};
