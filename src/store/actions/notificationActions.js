import { addDoc, collection, onSnapshot, orderBy } from "firebase/firestore";
import firebase from "../../config/firebase";

export const projectNotification = () => {
  return (dispatch, getState) => {
    const collectionRef = collection(firebase.firestore(), "notifications");
    const profile = getState().profile.profile;
    addDoc(collectionRef, {
      content: "added a new Project",
      user: `${profile.firstName} ${profile.lastName}`,
      time: new Date(),
    }).then((res) => {
      dispatch({ type: "PROJECT_NOTIFICATION" });
    });
  };
};

export const userNotification = (details) => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("notifications")
      .add({
        content: "joined the party!",
        user: `${details.firstName} ${details.lastName}`,
        time: new Date(),
      })
      .then(() => {
        console.log("User Notification Success");
        dispatch({ type: "USER_NOTIFICATION" });
      });
  };
};

export const fetchNotification = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("notifications")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        const querySnapshot = [];
        snapshot.docs.map((doc) => {
          querySnapshot.push({ id: doc.id, ...doc.data() });
        });
        dispatch({
          type: "FETCH_NOTIFICATION",
          notification: querySnapshot,
        });
      });
    // const collectionRef = collection(firebase.firestore(), "notifications");
    // onSnapshot(collectionRef, (snapshot) => {
    //   const querySnapshot = [];
    //   snapshot.docs.map((doc) => {
    //     querySnapshot.push({ id: doc.id, ...doc.data() });
    //   });
    //   dispatch({
    //     type: "FETCH_NOTIFICATION",
    //     notification: querySnapshot,
    //   });
    // });
  };
};
