import {addDoc, auth, collection, db} from "./dataBase.js";

const submit = document.getElementById("submit-button");
const submitStateSuccess =  document.getElementById("submit-state-success");
const submitStateError =  document.getElementById("submit-state-error");
const innerSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-green-500" data-id="12"><polyline points="20 6 9 17 4 12"></polyline></svg>`

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
submit.addEventListener("click", async (e)=>{
    e.preventDefault();

    submitStateSuccess.innerHTML = ""
    submitStateError.innerText = ""

    const title = document.getElementById("title");
    const company = document.getElementById("company");
    const location = document.getElementById("location");
    const description = document.getElementById("description");
    const requirements = document.getElementById("requirements");
    const background = document.getElementById("background");
    const salary = document.getElementById("salary");

    if(!title.value || company.value||  location.value || description.value || requirements.value|| background.value || salary.value) {
        submitStateError.innerText = "Please fill the required inputs!"
        return
    }


    const jobs = collection(db, "jobs");

    submit.innerText = "Posting..."

     addDoc(jobs, {
        title: title.value,
        company: company.value,
        location: location.value,
        description: description.value,
        requirements: requirements.value,
        background: background.value,
        salary: salary.value
    }).then(()=>{
         submitStateSuccess.insertAdjacentHTML("beforeend", innerSVG)
        submitStateSuccess.insertAdjacentHTML("beforeend", `Job has been posted with success!` )

         submit.innerText = "Post Job"

         title.value = "";
         company.value= "";
         location.value="";
         description.value="";
         requirements.value="";
         background.value="";
         salary.value="";

         location.reload()

     }).catch(e=>{
        submit.innerText = "Post Job"
         console.log(e);
         submitStateError.innerText = "Something went wrong, please try again!"



     });



})