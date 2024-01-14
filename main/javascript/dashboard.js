import {collection, db, getDocs} from "./dataBase.js";

const jobs = collection(db, "jobs");
const jobsContainer = document.getElementById("jobs-container");
const loadingIndicator = document.getElementById("loading");
window.addEventListener("load", async ()=>{
    await getDocs(jobs)

            .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const job = doc.data();

                const HTML =

                    `
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col space-y-4" data-v0-t="card">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="text-2xl font-semibold leading-none tracking-tight">${job.title}</h3>
                </div>
                <div class="p-6">
                    <p class="text-base text-gray-600">${job.company}</p>
                    <p class="text-sm">${job.description}</p>
                    <p class="text-sm">${job.salary}</p>
                </div>
                <div class="items-center p-6 flex justify-between">
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Edit
                    </button>
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Delete
                    </button>
                </div>
            </div>
                    
                    `
                jobsContainer.insertAdjacentHTML("beforeend", HTML);
                loadingIndicator.innerText="";
            });
        })
        .catch(error => {
            console.error('Error ', error);
            loadingIndicator.innerText="";

        });

})