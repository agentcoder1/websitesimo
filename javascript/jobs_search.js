document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const searchBar = document.getElementById("search-bar");
    const locationInput = document.getElementById("location-inp");
    const searchButton = document.querySelector(".search_btn");
    const jobListings = document.querySelectorAll(".job-listing");
    const searchResultsContainer = document.querySelector(".search-results");

    // Search functionality
    searchButton.addEventListener('click', () => {
        const searchText = searchBar.value.toLowerCase().trim();
        const locationText = locationInput.value.toLowerCase().trim();
        filterJobs(searchText, locationText);
    });

    function filterJobs(searchText, locationText) {
        let foundJobs = 0;
        jobListings.forEach(job => {
            const title = job.querySelector(".job-title").textContent.toLowerCase();
            const location = job.querySelector(".job-location").textContent.toLowerCase();
            const matchesSearch = searchText === '' || title.includes(searchText);
            const matchesLocation = locationText === '' || location.includes(locationText);

            if (matchesSearch && matchesLocation) {
                searchResultsContainer.appendChild(job.cloneNode(true));
                foundJobs++;
            }
        });

        if (foundJobs === 0) {
            searchResultsContainer.innerHTML = '<p>No matching jobs found.</p>';
        }
    }

    // Responsive design for job details
    const adjustJobDetailsLayout = () => {
        jobListings.forEach(job => {
            job.addEventListener('click', () => {
                // Implement functionality to display job details
                // For instance, show job details in a modal for smaller screens
            });
        });
    };

    adjustJobDetailsLayout();

    // Additional functionalities like scroll event for navigation bar
    window.addEventListener("scroll", () => {
        const navSec = document.querySelector(".nav-sec");
        if (window.scrollY >= 100) {
            navSec.classList.add("nav-sec-active");
        } else {
            navSec.classList.remove("nav-sec-active");
        }
    });

    // Implement further functionalities as per your requirements
    // ...
});
