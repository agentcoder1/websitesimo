document.addEventListener('DOMContentLoaded', () => {
    // Page Loading Effect
    window.addEventListener('beforeunload', () => {
        document.body.classList.add("load-body");
    });

    document.onreadystatechange = function() {
        if (document.readyState !== "complete") {
            document.body.classList.add("load-body");
        } else {
            document.body.classList.remove("load-body");
        }
    };

    // Responsive Navigation
    const navIcons = document.querySelector("nav div.col-2");
    const listIcon = document.querySelector("i.fa-bars");
    const mobileList = document.querySelector(".mobile-list");
    const closeIcon = document.querySelector(".fa-xmark");
    let blurDiv = document.createElement("div");

    const adjustNavForMobile = () => {
        if (window.innerWidth <= 576) {
            navIcons.classList.remove("col-2");
            navIcons.classList.add("col-4");
        } else {
            navIcons.classList.add("col-2");
            navIcons.classList.remove("col-4");
        }
    };

    listIcon.addEventListener("click", () => {
        blurDiv.classList.add("blur-div");
        document.body.append(blurDiv);
        document.body.classList.add("blur-body");
        mobileList.classList.remove("d-none", "mobile-list-hide");
        mobileList.classList.add("mobile-list-display");
    });

    closeIcon.addEventListener("click", () => {
        mobileList.classList.remove('mobile-list-display');
        mobileList.classList.add("mobile-list-hide");
        blurDiv.remove();
        document.body.classList.remove("blur-body");
    });

    adjustNavForMobile();
    window.onresize = adjustNavForMobile;

    // Theme Switching
    const root = document.querySelector('html');
    const themeIcon = document.querySelector("#theme-ico");
    const themeFile = document.querySelector("#theme-file");
    const logo = document.querySelector(".logo");
    const logoLoading = document.querySelector(".loading-page img");
    const logoMenu = document.querySelector(".logo-menu");

    let themeColor = localStorage.getItem("theme-color") || "dark";
    root.setAttribute("theme", themeColor);
    adjustTheme(themeColor);

    themeIcon.addEventListener("click", () => {
        themeColor = (themeColor === "dark") ? "light" : "dark";
        root.setAttribute("theme", themeColor);
        localStorage.setItem("theme-color", themeColor);
        adjustTheme(themeColor);
    });

    function adjustTheme(theme) {
        themeIcon.className = theme === "dark" ? 'fa fa-sun' : 'fa fa-moon';
        themeFile.href = `${themeFile.getAttribute("path-dir")}style/global/${theme}_vars.css`;
        logo.src = `${logo.getAttribute("path-dir")}images/logo.png`;
        logoLoading.src = `${logoLoading.getAttribute("path-dir")}images/logo.png`;
        logoMenu.src = `${logoMenu.getAttribute("path-dir")}images/logo.png`;
    }

    // Save Jobs Logic
    let savedJobsId = new Set(JSON.parse(localStorage.getItem("saved-jobs-id")) || []);

    // Search Page Logic
    const searchBtn = document.querySelector(".search_btn");
    const searchInput = document.querySelector("#search-input"); // Adjust according to your HTML
    const locationInput = document.querySelector("#location-input"); // Adjust according to your HTML
    const jobListings = document.querySelectorAll(".job-listing"); // Adjust according to your HTML

    searchBtn.addEventListener("click", () => {
        const searchText = searchInput.value.toLowerCase();
        const locationText = locationInput.value.toLowerCase();
        filterJobs(searchText, locationText);
    });

    function filterJobs(searchText, locationText) {
        jobListings.forEach(job => {
            const jobTitle = job.querySelector(".job-title").textContent.toLowerCase(); // Adjust according to your HTML
            const jobLocation = job.querySelector(".job-location").textContent.toLowerCase(); // Adjust according to your HTML
            const matchesSearch = jobTitle.includes(searchText);
            const matchesLocation = jobLocation.includes(locationText);
            job.style.display = matchesSearch && matchesLocation ? "" : "none";
        });
    }

    // Additional functionalities as per your requirements
});
