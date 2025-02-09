// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEgm37ihjhlzgVHpiRFJ8_QNQXBrKv9XU",
    authDomain: "ecotrack-99ed2.firebaseapp.com",
    projectId: "ecotrack-99ed2",
    storageBucket: "ecotrack-99ed2.firebasestorage.app",
    messagingSenderId: "439431626095",
    appId: "1:439431626095:web:2c063efc65d5a61fd5fc9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
auth.languageCode = "pt"

export {auth, sendPasswordResetEmail}