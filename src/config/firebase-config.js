import firebase, { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPdOCitqCRg3xG0XCFKceufvp4dYtCsfM",
  authDomain: "mario-plan-2c5b4.firebaseapp.com",
  projectId: "mario-plan-2c5b4",
  storageBucket: "mario-plan-2c5b4.appspot.com",
  messagingSenderId: "64468085427",
  appId: "1:64468085427:web:0debb8e56120bca7b2dec6",
  measurementId: "G-26R3NTR3ZV",
};

firebase.initializeApp(firebaseConfig);
firebase.fireStore().settings({ timestampsInSnapshots: true });

export default firebase;
