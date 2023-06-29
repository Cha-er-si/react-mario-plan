import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPdOCitqCRg3xG0XCFKceufvp4dYtCsfM",
  authDomain: "mario-plan-2c5b4.firebaseapp.com",
  projectId: "mario-plan-2c5b4",
  storageBucket: "mario-plan-2c5b4.appspot.com",
  messagingSenderId: "64468085427",
  appId: "1:64468085427:web:0debb8e56120bca7b2dec6",
  measurementId: "G-26R3NTR3ZV",
};

// const app = initializeApp(firebaseConfig);
// export const firestoreConfig = getFirestore(app);

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true, merge: true });

export default firebase;
