import {auth, signOut} from "../dataBase.js";

const userName = document.getElementById("user-name");





auth.onAuthStateChanged(function(user) {

    if (user) {
        const userEmail = user.email;
        const displayName = user.displayName;
        userName.textContent = `Hello ${displayName.split(" ")[0]}`;


    } else {
        // No user is signed in
        window.location.href = "./signup.html"
    }
});