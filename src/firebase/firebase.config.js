// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu9fieLpBgPNfoCabNusZnTPg7gm1aSG0",
  authDomain: "event-explore-16668.firebaseapp.com",
  projectId: "event-explore-16668",
  storageBucket: "event-explore-16668.firebasestorage.app",
  messagingSenderId: "250848296849",
  appId: "1:250848296849:web:d58ea52bf632e53940a430"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);