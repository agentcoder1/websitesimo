document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector("main");
    const jobDetails = document.querySelector(".job__details");
    const myJobs = document.querySelector(".my_jobs");
    const noItems = document.querySelector(".no_items");
    const myJobsNum = document.querySelector(".my_jobs_num span");
    const jobListings = document.querySelectorAll(".job-listing"); // Assuming your job listings have this class
    let myJobsId = new Set(JSON.parse(localStorage.getItem("saved-jobs-id")) || []);

    // Render saved jobs
    myJobsId.forEach(jobId => {
        jobListings.forEach(job => {
            if (job.dataset.jobId === jobId) {
                myJobs.appendChild(job.cloneNode(true));
            }
        });
    });

    // Update job count
    myJobsNum.textContent = myJobsId.size;

    // No items message
    if (myJobsId.size === 0) {
        noItems.style.display = "flex";
    } else {
        noItems.style.display = "none";
    }

    // Handle job item click for details
    const jobItems = myJobs.querySelectorAll(".job-listing");
    jobItems.forEach(jobItem => {
        jobItem.addEventListener("click", () => {
            displayJobDetails(jobItem);
        });
    });

    // Display job details
    function displayJobDetails(jobItem) {
        const jobId = jobItem.dataset.jobId;
        // Populate job details based on the clicked job item
        // Adapt this part to fit your specific HTML structure and requirements
        // ...

        mainContent.style.display = "none";
        jobDetails.style.display = "block";
    }

    // Responsive design adjustments
    window.addEventListener('resize', () => {
        // Adjustments based on window size
        // ...
    });

    // Handle back button in job details
    const backButton = jobDetails.querySelector(".back");
    backButton.addEventListener("click", () => {
        mainContent.style.display = "block";
        jobDetails.style.display = "none";
    });

    // Handle saving and unsaving jobs
    const saveIcons = jobDetails.querySelectorAll(".saved-ico");
    saveIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            toggleSaveJob(icon, jobId);
        });
    });

    function toggleSaveJob(icon, jobId) {
        if (icon.classList.contains("saved")) {
            myJobsId.delete(jobId);
            icon.classList.remove("saved");
        } else {
            myJobsId.add(jobId);
            icon.classList.add("saved");
        }
        localStorage.setItem("saved-jobs-id", JSON.stringify([...myJobsId]));
    }
});
