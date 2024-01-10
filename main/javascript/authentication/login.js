import {auth, signInWithEmailAndPassword} from "../dataBase.js";

const submit = document.getElementById("submit-button");

const password = document.getElementById("password").value;
const email = document.getElementById("email-address").value;
submit.addEventListener("click", async ()=> {
     signInWithEmailAndPassword(auth, email, password).then(()=>{
         window.location.href = "./resume.html"

     }).catch(error=>{
         console.error(error)
     })

})