import {addDoc, collection, db} from "./dataBase.js";

const submit = document.getElementById("submit-button");


submit.addEventListener("click", async (e)=>{
    e.preventDefault();

    const title = document.getElementById("title").value;
    const company = document.getElementById("company").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    const requirements = document.getElementById("requirements").value;
    const background = document.getElementById("background").value;
    const salary = document.getElementById("salary").value;

    const jobs = collection(db, "jobs");

    submit.innerText = "Submitting..."

     addDoc(jobs, {
        title,
        company,
        location,
        description,
        requirements,
        background,
        salary
    }).then(()=>{
         alert("The job has been posted!")
         submit.innerText = "Submitted"
         location.reload()

     }).catch(e=>{
        submit.innerText = "Submit"
         alert("Something went wrong please try again!")


    });



})