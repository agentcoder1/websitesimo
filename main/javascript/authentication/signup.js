import {createUserWithEmailAndPassword, updateProfile} from "../dataBase";

const submit = document.getElementById("submit-button");

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email-address");
    const phoneNumber = document.getElementById("phone-number");
    const password = document.getElementById("password");

    createUserWithEmailAndPassword(email, password).then(createdUser=>{
        updateProfile(createdUser.user, {displayName: fullName, phoneNumber: phoneNumber})


    }).catch(error=>{
        alert(error)
    })
})
