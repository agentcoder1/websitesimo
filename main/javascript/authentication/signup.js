import {auth, createUserWithEmailAndPassword, updateProfile} from "../dataBase.js";

const submit = document.getElementById("submit-button");

submit.addEventListener("click",  async (e) => {
    e.preventDefault();
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email-address").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const password = document.getElementById("password").value;

    console.log(fullName, email, phoneNumber, password)

    createUserWithEmailAndPassword(auth,email, password).then(async createdUser => {
        await updateProfile(createdUser.user, {displayName: fullName, phoneNumber: phoneNumber});

        window.location.href = "./resume.html"


    }).catch(error => {
        console.log(error)
    })
})
