
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {  getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {createUserWithEmailAndPassword, updateProfile} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // ... your firebase config
    apiKey: "AIzaSyC7EurZJY3vJRQpWsSTx02uX-KMod5xQRg",
    authDomain: "assignement1-d8723.firebaseapp.com",
    databaseURL: "https://assignement1-d8723-default-rtdb.firebaseio.com",
    projectId: "assignement1-d8723",
    storageBucket: "assignement1-d8723.appspot.com",
    messagingSenderId: "327347476719",
    appId: "1:327347476719:web:a4d03f83488200c667e31a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore();
 const auth = getAuth(app);

export  {db, auth,createUserWithEmailAndPassword, updateProfile, collection, addDoc, getDocs, signOut}


