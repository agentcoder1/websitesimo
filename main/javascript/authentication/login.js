import {auth, collection, db, getDoc, signInWithEmailAndPassword} from "../dataBase.js";

const submit = document.getElementById("submit-button");


auth.onAuthStateChanged(function(user) {

    const userType = user.photoURL;

    if(userType === "employee" ) {
        window.location.href = "../main/job-listing.html"//

    }

    if(userType === "company" ) {
        window.location.href = "../main/dashboard.html"//

    }




});


submit.addEventListener("click", async (e)=> {
    e.preventDefault();


    const password = document.getElementById("password").value;
    const email = document.getElementById("email-address").value;

    if(!email || !password) {
        alert("Email and password are required!")
    }

    const usersCollection = collection(db, "users");


    await signInWithEmailAndPassword(auth, email, password).then(()=>{
        // window.location.href = "./resume.html"

     }).catch(error=>{
         console.error(error)
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