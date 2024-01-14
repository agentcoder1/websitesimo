import {addDoc, auth, collection, createUserWithEmailAndPassword, db, updateProfile} from "../dataBase.js";

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



submit.addEventListener("click",  async (e) => {
    e.preventDefault();
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email-address").value;
    const linkedIn = document.getElementById("linkedin-profile").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const password = document.getElementById("password").value;
    const accountType = document.querySelector('input[name="accountType"]:checked').value;


    createUserWithEmailAndPassword(auth,email, password).then(async createdUser => {
        await updateProfile(createdUser.user, {displayName: fullName, phoneNumber: phoneNumber, photoURL: accountType});

        const users = collection(db, "users");

        if (accountType === "employee") {
            await addDoc(users, {
                fullName,
                phoneNumber,
                linkedIn,
                email,
                accountType,
                uid: createdUser.user.uid
            });

            window.location.href = "../main/job-listing.html"//

        }

        if (accountType === "company") {
            await addDoc(users, {
                fullName,
                email,
                accountType,
                uid: createdUser.user.uid
            });

            window.location.href = "../main/dashboard.html"//

        }


    }).catch(error => {
        console.log(error)
    })
})
