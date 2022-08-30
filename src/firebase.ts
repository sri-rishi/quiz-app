import {initializeApp} from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth, 
    signInWithPopup, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc, 
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAILN4LQf3MosHWCyve6UkhUHR0hzPLaVQ",
    authDomain: "quizee-abea4.firebaseapp.com",
    projectId: "quizee-abea4",
    storageBucket: "quizee-abea4.appspot.com",
    messagingSenderId: "974559064311",
    appId: "1:974559064311:web:41fe269346d30ac202a3f2",
    measurementId: "G-VLTXWXPSL5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
    db,
    auth,
    GoogleAuthProvider,
    signInWithPopup, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    query,
    getDocs,
    collection,
    where,
    addDoc, 
}