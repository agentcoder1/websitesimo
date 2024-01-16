import {addDoc, auth, collection, db, getDocs, updateProfile} from "./dataBase.js";

const jobs = collection(db, "jobs");
const jobsContainer = document.getElementById("jobs-container");
const loadingIndicator = document.getElementById("loading");
const applyButtons = document.querySelectorAll(".apply-button")
let currentUser;
const applications = collection(db, "applications");
const users = collection(db, "users");

auth.onAuthStateChanged(function (user) {

    if (user) {
        const userType = user.photoURL.split("-")[0];
        currentUser = user;
        if (userType === "company") {
            window.location.href = "../main/dashboard.html"//

        }
    } else {
        window.location.href = "../main/login.html"

    }


});

window.addEventListener("load", async () => {
    await getDocs(jobs)
        .then(querySnapshot => {

            if (querySnapshot.length === 0) {
                loadingIndicator.innerText = "There are no jobs posted.";

            }

            querySnapshot.forEach(doc => {
                loadingIndicator.innerText = "";

                const job = doc.data();
                const jobId = doc.id;
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
            
                <button jobTitle="${job.title}" id="${jobId}" class="apply-button inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-opacity-90 h-10 px-4 py-2">
                    ${currentUser.photoURL.includes(jobId) ? 'Applied' : "Apply"}
                </button>
                
            </div>
        </div>
                    
                    `

                jobsContainer.insertAdjacentHTML("beforeend", HTML);

            });
        })
        .catch(error => {
            loadingIndicator.innerText = "";

            console.error('Error ', error);
        })

})

jobsContainer.addEventListener("click", (e) => {
    const applyButton = e.target.closest(".apply-button");

    if (applyButton) {
        const jobId = applyButton.id;
        const data = auth.currentUser.photoURL;

        updateProfile(auth.currentUser, {photoURL: `${data}-${jobId}`})
            .then(() => {
                // Profile updated successfully
                console.log("User's displayName updated successfully");
                getDocs(users).then( (querySnapshot) => {
                    querySnapshot.forEach(async (doc) => {

                        const userData = doc.data();
                        if (userData.uid === auth.currentUser.uid) {
                            await addDoc(applications, {...userData,state: 'No state', title: applyButton.getAttribute("jobTitle"), jobId});
                            applyButton.innerText = "Applied";

                        }

                    })
                })


            })
            .catch((error) => {
                // An error occurred
                console.error("Error updating user's displayName:", error.message);
            });

    }
});