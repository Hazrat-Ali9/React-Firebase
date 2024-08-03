// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfn3NN6S5kwlP_v_cBGyopoyP3_TkRXMA",
    authDomain: "react-firebase-testing-30085.firebaseapp.com",
    projectId: "react-firebase-testing-30085",
    storageBucket: "react-firebase-testing-30085.appspot.com",
    messagingSenderId: "1021580283",
    appId: "1:1021580283:web:c49569258830411b6e315e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;