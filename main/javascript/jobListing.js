import {auth, collection, db, getDocs} from "./dataBase.js";

const jobs = collection(db, "jobs");
const jobsContainer = document.getElementById("jobs-container");
const loadingIndicator = document.getElementById("loading");


auth.onAuthStateChanged(function(user) {

    if(user) {
        const userType = user.photoURL;

        if(userType === "company" ) {
            window.location.href = "../main/dashboard.html"//

        }
    }else {
        window.location.href = "../main/login.html"

    }



});

window.addEventListener("load", async ()=>{
    await getDocs(jobs)
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                loadingIndicator.innerText="";

                const job = doc.data();
                const HTML =
                    `
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col space-y-4" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">
                ${job.title}</h3>
                <p class="text-sm text-muted-foreground">${job.location}</p></div>
            <div class="p-6"><p class="text-sm">
                ${job.description}
            </p>
                <h3 class="font-semibold text-lg">Requirements:</h3>
                <ul class="list-disc list-inside text-sm">
                    <li>${job.requirements}</li>
                </ul>
                <h3 class="font-semibold text-lg">Academic Background:</h3>
                <ul class="list-disc list-inside text-sm">
                    <li>${job.background}</li>
                   
                </ul>
                <h3 class="font-semibold text-lg">Salary:</h3>
                <p class="text-sm">${job.salary}per year</p></div>
            <div class="flex items-center p-6">
                <button id="${job.id}" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-opacity-90 h-10 px-4 py-2">
                    Apply
                </button>
            </div>
        </div>
                    
                    `

                jobsContainer.insertAdjacentHTML("beforeend", HTML);

            });
        })
        .catch(error => {
            loadingIndicator.innerText="";

            console.error('Error ', error);
        });

})