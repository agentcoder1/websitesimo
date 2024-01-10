import {auth, signOut} from "./dataBase.js";

const userName = document.getElementById("user-name");
const logout = document.getElementById("logout-button");
auth.onAuthStateChanged(function(user) {

    if (user) {
        const userEmail = user.email;
        const displayName = user.displayName;
        userName.textContent = `Hello ${displayName}`;


    } else {
        // No user is signed in
        window.location.href = "./signup.html"
    }
});

logout.addEventListener("click", async ()=> {
    await signOut(auth);
})