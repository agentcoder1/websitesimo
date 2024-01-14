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
                <div class="flex flex-col space-y-1.5 p-4">
                    <h3 class="text-2xl font-semibold leading-none tracking-tight">${job.title}</h3>
                </div>
                <div class="p-4">
                    <p class="text-base mb-2 font-medium  text-gray-900">${job.company}</p>
                    <p class="text-sm mb-2">${job.description}</p>
                    <p class="text-sm">${job.salary}</p>
                </div>
                <div class="w-full max-w-[320px] flex gap-2 pb-4 pl-4">
                 <button  class="w-full items-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                    Edit
                </button>
                  
                    <button class="w-full items-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400">
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