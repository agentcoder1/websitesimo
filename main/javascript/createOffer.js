import {addDoc, collection, db} from "./dataBase.js";

const submit = document.getElementById("submit-button");
const submitState =  document.getElementById("submit-state");

submit.addEventListener("click", async (e)=>{
    e.preventDefault();

    const title = document.getElementById("title");
    const company = document.getElementById("company");
    const location = document.getElementById("location");
    const description = document.getElementById("description");
    const requirements = document.getElementById("requirements");
    const background = document.getElementById("background");
    const salary = document.getElementById("salary");

    const jobs = collection(db, "jobs");

    submit.innerText = "Submitting..."

     addDoc(jobs, {
        title: title.value,
        company: company.value,
        location: location.value,
        description: description.value,
        requirements: requirements.value,
        background: background.value,
        salary: salary.value
    }).then(()=>{
         submitState.innerText = "Job has been posted with success!"
         submit.innerText = "Submit"

         title.value = "";
         company.value= "";
         location.value="";
         description.value="";
         requirements.value="";
         background.value="";
         salary.value="";

         location.reload()

     }).catch(e=>{
        submit.innerText = "Submit"
         console.log(e);


    });



})