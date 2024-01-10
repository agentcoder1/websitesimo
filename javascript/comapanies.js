document.addEventListener('DOMContentLoaded', () => {
    const companiesCont = document.querySelector(".companies_cont");
    const companyElements = document.querySelectorAll(".company-listing"); // Assuming your company listings have this class

    companyElements.forEach(companyElement => {
        const companyName = companyElement.dataset.companyName; // Assuming each company element has a data attribute for its name
        const companyJobs = document.querySelectorAll(`.job-listing[data-company-name="${companyName}"]`); // Assuming job listings have a data attribute for the company name

        let companyDiv = document.createElement("div");
        companyDiv.classList.add("company", "p-3");

        companyDiv.innerHTML = `
            <img src="../images/company.svg" alt="company-logo">
            <div class="company_info">
                <div>
                    <h2>${companyName}</h2>
                    <div class="jobs_num">${companyJobs.length} ${companyJobs.length > 1 ? 'jobs' : 'job'}</div>
                </div>
                <div class="rates">
                    <!-- Add rating stars or other company info here -->
                </div>
            </div>
        `;

        companiesCont.appendChild(companyDiv);
    });
});
