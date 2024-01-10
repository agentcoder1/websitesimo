import {auth, signInWithEmailAndPassword} from "../dataBase.js";

const submit = document.getElementById("submit-button");

submit.addEventListener("click", async (e)=> {
    e.preventDefault();


    const password = document.getElementById("password").value;
    const email = document.getElementById("email-address").value;

    if(!email || !password) {
        alert("Email and password are required!")
    }


     signInWithEmailAndPassword(auth, email, password).then(()=>{
         window.location.href = "./resume.html"

     }).catch(error=>{
         console.error(error)
     })

})