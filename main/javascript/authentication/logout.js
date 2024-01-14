import {auth, signOut} from "../dataBase.js";

const logout = document.getElementById("logout-button");
logout.addEventListener("click", async ()=> {
    await signOut(auth);

})