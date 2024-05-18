// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get, child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_rVR6DkHucKdZrfgyn6xuJVoOuSTEqZI",
  authDomain: "healthapp-a18c2.firebaseapp.com",
  projectId: "healthapp-a18c2",
  storageBucket: "healthapp-a18c2.appspot.com",
  messagingSenderId: "215509209855",
  appId: "1:215509209855:web:440b8b76ce129bf59e32ca",
  measurementId: "G-QFGX3TQ7GL",
  databaseURL: "https://healthapp-a18c2-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);


export { database };

