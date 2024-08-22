// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAflTomf2w3X7zh93LYEtc9HRb3MnvDCgc",
    authDomain: "wallet-ea0fa.firebaseapp.com",
    projectId: "wallet-ea0fa",
    storageBucket: "wallet-ea0fa.appspot.com",
    messagingSenderId: "513852150045",
    appId: "1:513852150045:web:208a82385b310f1c8b91f4",
    measurementId: "G-KW0VN0QK0G"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };