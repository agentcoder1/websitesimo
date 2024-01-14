import {addDoc, collection, db, doc, getDoc, updateDoc} from "./dataBase.js";

const submit = document.getElementById("submit-button");
const submitState =  document.getElementById("submit-state");

const urlParams = new URLSearchParams(window.location.search);

const idValue = urlParams.get('id');


const docRef = doc(db,"jobs", idValue);
submit.addEventListener("click", (e)=>{

    const title = document.getElementById("title");
    const company = document.getElementById("company");
    const location = document.getElementById("location");
    const description = document.getElementById("description");
    const requirements = document.getElementById("requirements");
    const background = document.getElementById("background");


    const salary = document.getElementById("salary");

        console.log(idValue)


    submit.innerText = "Submitting..."
    submitState.innerText = ""



    updateDoc(docRef, {
        title: title.value,
        company: company.value,
        location: location.value,
        description: description.value,
        requirements: requirements.value,
        background: background.value,
        salary: salary.value
    }).then(()=>{
        submitState.innerText = "Job has been updated with success!"
        submit.innerText = "Submit"


    }).catch(e=>{
        submit.innerText = "Submit"
        console.log(e);
        submitState.innerText = "Something went wrong, please try again!"


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
