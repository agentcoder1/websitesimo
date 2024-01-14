
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {  getAuth, signOut, signInWithEmailAndPassword , createUserWithEmailAndPassword, updateProfile} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmle4ID0VAdNHTIKH2w-5Y3Lr7ifg1ymU",
    authDomain: "nodal-fountain-403922.firebaseapp.com",
    projectId: "nodal-fountain-403922",
    storageBucket: "nodal-fountain-403922.appspot.com",
    messagingSenderId: "256749464572",
    appId: "1:256749464572:web:5d39dabd681cc01d94a079"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore();
 const auth = getAuth(app);

export  {db, auth,createUserWithEmailAndPassword, updateProfile, collection, addDoc, getDocs, signOut}


