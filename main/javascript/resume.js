import {auth} from "./dataBase.js";

const userName = document.getElementById("user-name");

auth.onAuthStateChanged(function(user) {
    console.log("Workingggg")

    if (user) {
        const userEmail = user.email;
        const displayName = user.displayName;
        userName.textContent = `Hello ${displayName}`;


    } else {
        // No user is signed in
        window.location.href = "./signup.html"
    }
});