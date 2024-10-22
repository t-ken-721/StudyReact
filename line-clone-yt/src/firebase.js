import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD6sl3pvTTuhH3ya33bNh9aiq1HYuL8QBg",
    authDomain: "line-clone-1c323.firebaseapp.com",
    projectId: "line-clone-1c323",
    storageBucket: "line-clone-1c323.appspot.com",
    messagingSenderId: "455672742428",
    appId: "1:455672742428:web:6ecbf1dcf347a8ac8c95d9"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db , auth };