import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { firestoreConfig } from "../../config/firebase";

export const createProject = (project) => {
  return (dispatch, getState) => {
    const collectionRef = collection(firestoreConfig, "projects");
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

export const fetchProject = () => {
  return (dispatch) => {
    const collectionRef = collection(firestoreConfig, "projects");
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
