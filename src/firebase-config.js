import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdTh_wDdS44CMGNPN4h86oJGEymXpgWuc",
  authDomain: "blog-a851e.firebaseapp.com",
  projectId: "blog-a851e",
  storageBucket: "blog-a851e.appspot.com",
  messagingSenderId: "228092993781",
  appId: "1:228092993781:web:acc457137909df4f48e5bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//export const auth = getAuth(app);
//export const provider = new GoogleAuthProvider();
