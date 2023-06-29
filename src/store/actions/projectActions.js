import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import firebase from "../../config/firebase";

export const createProject = (project) => {
  return (dispatch, getState) => {
    const collectionRef = collection(firebase.firestore(), "projects");
    addDoc(collectionRef, {
      ...project,
      authorFirstName: "Someone",
      authorLastName: "Unknown",
      authorId: 12345,
      createdAt: new Date(),
    })
      .then((res) => {
        console.log(collectionRef, res);
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((error) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", error });
      });
  };
};

export const fetchProjects = () => {
  return (dispatch) => {
    const collectionRef = collection(firebase.firestore(), "projects");
    onSnapshot(collectionRef, (snapshot) => {
      const querySnapshot = [];
      snapshot.docs.map((doc) => {
        querySnapshot.push({ id: doc.id, ...doc.data() });
      });
      dispatch({
        type: "FETCH_PROJECT_SUCCESS",
        firestoreData: querySnapshot,
      });
    });
    // getDocs(collectionRef)
    //   .then((res) => {
    //     const querySnapshot = [];
    //     res.docs.map((doc) => {
    //       querySnapshot.push(doc.data());
    //     });
    //     dispatch({ type: "FETCH_PROJECT_SUCCESS", projects: querySnapshot });
    //   })
    //   .catch((error) => {
    //     console.log({ error });
    //   });
  };
};

export const fetchProjectById = (projects, id) => {
  return (dispatch) => {
    const project = projects ? projects[id] : null;
    console.log("Id Fetch", { project });
    dispatch({ type: "FETCH_PROJECT_ID", project });
  };
};
