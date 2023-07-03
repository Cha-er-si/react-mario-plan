import firebase from "../../config/firebase";

export const fetchUserProfile = (id) => {
  return async (dispatch) => {
    if (id != null) {
      const profile = await firebase
        .firestore()
        .collection("users")
        .doc(id)
        .get()
        .then((res) => {
          return res.data();
        });
      dispatch({ type: "FETCH_PROFILE", profile });
    }
  };
};
