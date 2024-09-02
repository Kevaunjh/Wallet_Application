
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, getRedirectResult } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAflTomf2w3X7zh93LYEtc9HRb3MnvDCgc",
    authDomain: "wallet-ea0fa.firebaseapp.com",
    projectId: "wallet-ea0fa",
    storageBucket: "wallet-ea0fa.appspot.com",
    messagingSenderId: "513852150045",
    appId: "1:513852150045:web:208a82385b310f1c8b91f4",
    measurementId: "G-KW0VN0QK0G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, getRedirectResult };