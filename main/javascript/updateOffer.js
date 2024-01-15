import {addDoc, auth, collection, db, doc, getDoc, updateDoc} from "./dataBase.js";

const submit = document.getElementById("submit-button");
const submitStateSuccess =  document.getElementById("submit-state-success");
const submitStateError =  document.getElementById("submit-state-error");
const innerSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-green-500" data-id="12"><polyline points="20 6 9 17 4 12"></polyline></svg>`

const urlParams = new URLSearchParams(window.location.search);

const idValue = urlParams.get('id');

auth.onAuthStateChanged(function(user) {

    if(user) {
        const userType = user.photoURL.split("-")[0];

        if(userType === "employee" ) {
            window.location.href = "../main/job-listing.html"//

        }
    }else {
        window.location.href = "../main/login.html"

    }



});


const docRef = doc(db,"jobs", idValue);
submit.addEventListener("click", (e)=>{

    e.preventDefault()

    const title = document.getElementById("title");
    const company = document.getElementById("company");
    const location = document.getElementById("location");
    const description = document.getElementById("description");
    const requirements = document.getElementById("requirements");
    const background = document.getElementById("background");
    const salary = document.getElementById("salary");

    submitStateSuccess.innerHTML = ""
    submitStateError.innerHTML = ""

    if(!title.value || !company.value||  !location.value || !description.value || !requirements.value|| !background.value || !salary.value) {
        submitStateError.innerHTML = "Please fill the required inputs!"
        return
    }


    submit.innerText = "Updating..."




    updateDoc(docRef, {
        title: title.value,
        company: company.value,
        location: location.value,
        description: description.value,
        requirements: requirements.value,
        background: background.value,
        salary: salary.value
    }).then(()=>{

        submitStateSuccess.insertAdjacentHTML("beforeend", innerSVG)
        submitStateSuccess.insertAdjacentHTML("beforeend", `Job has been updated with success!` )

        submit.innerText = "Update Job"


    }).catch(e=>{
        submit.innerText = "Update Job"
        console.log(e);
        submitStateError.innerText = "Something went wrong, please try again!"


    });


})


window.addEventListener("load", ()=>{
    const title = document.getElementById("title");
    const company = document.getElementById("company");
    const location = document.getElementById("location");
    const description = document.getElementById("description");
    const requirements = document.getElementById("requirements");
    const background = document.getElementById("background");
    getDoc(docRef)
        .then((docSnapshot) => {
            if (docSnapshot.exists()) {
                // Document data is available in docSnapshot.data()
                const jobData = docSnapshot.data();
                console.log("OK")
                title.value = jobData.title;
                company.value= jobData.company;
                location.value=jobData.location;
                description.value=jobData.description;
                requirements.value=jobData.requirements;
                background.value=jobData.background;
                salary.value=jobData.salary;

            } else {
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.error("Error getting document:", error);
        });



})
