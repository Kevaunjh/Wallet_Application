import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
};

export const doCreateUserWithUsernameAndPassword = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);
    return result;
};

export const doSignOut = () => {
    return auth.signOut();
};



