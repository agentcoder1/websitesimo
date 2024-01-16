import {auth, collection, db, getDoc, signInWithEmailAndPassword} from "../dataBase.js";

const submit = document.getElementById("submit-button");


auth.onAuthStateChanged(function(user) {

    if(user) {
        const userType = user.photoURL.split("-")[0];

        if(userType === "employee" ) {
            window.location.href = "../main/job-listing.html"//

        }

        if(userType === "company" ) {
            window.location.href = "../main/dashboard.html"//

        }
    }




});


submit.addEventListener("click", async (e)=> {
    e.preventDefault();


    const password = document.getElementById("password").value;
    const email = document.getElementById("email-address").value;

    if(!email || !password) {
        alert("Email and password are required!")
    }



    await signInWithEmailAndPassword(auth, email, password).then(()=>{

     }).catch(error=>{
        if(error.toString().includes("invalid-credential")) {
            alert("Please make sure your email or password are correct!")
            submit.innerText = "Login"

        }
     })

    auth.onAuthStateChanged(function(user) {

          const userType = user.photoURL;

          if(userType === "employee" ) {
              window.location.href = "../main/job-listing.html"//

          }

        if(userType === "company" ) {
            window.location.href = "../main/dashboard.html"//

        }




    });



})