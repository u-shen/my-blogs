// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcNvWCek_uo77d2_U66Bn3Mi2Cm7a5pXM",
  authDomain: "my-blogs-22e79.firebaseapp.com",
  projectId: "my-blogs-22e79",
  storageBucket: "my-blogs-22e79.appspot.com",
  messagingSenderId: "1022348719859",
  appId: "1:1022348719859:web:f2ed86b73e4924d6d56986",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
