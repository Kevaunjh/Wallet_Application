import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithRedirect, 
    getRedirectResult, 
    RecaptchaVerifier, 
    signInWithPhoneNumber 
} from 'firebase/auth';

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
const signInWithGoogleRedirect = () => {
    signInWithRedirect(auth, provider);
};

getRedirectResult(auth)
    .then((result) => {
        if (result) {
            const user = result.user;
            console.log("Google Sign-in Success:", user);
        }
    })
    .catch((error) => {
        console.error("Google Sign-in Error:", error);
    });

const setUpRecaptcha = (elementId) => {
    window.recaptchaVerifier = new RecaptchaVerifier(elementId, {
        'size': 'invisible', 
        'callback': (response) => {
        },
        'expired-callback': () => {
        }
    }, auth);
};

const signInWithPhone = (phoneNumber, appVerifier) => {
    return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
};

export { 
    auth, 
    provider, 
    signInWithPopup, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithRedirect, 
    getRedirectResult, 
    signInWithGoogleRedirect, 
    setUpRecaptcha, 
    signInWithPhone 
};
