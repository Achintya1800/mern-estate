// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate19.firebaseapp.com",
  projectId: "mern-estate19",
  storageBucket: "mern-estate19.firebasestorage.app",
  messagingSenderId: "645653860404",
  appId: "1:645653860404:web:ab4980816835b34c8efa61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);