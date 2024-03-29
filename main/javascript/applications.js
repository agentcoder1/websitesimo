import {auth, collection, db, doc, getDocs} from "./dataBase.js";

const usersRef = collection(db,"applications");

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

const table = document.getElementById("table");
const loading = document.getElementById("loading");
loading.innerText = "Loading applications..."
getDocs(usersRef).then(querySnapshot => {
    querySnapshot.forEach(userDoc => {
        let docRef;
        const application = userDoc.data();
        const HTML  = `            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" style="text-transform: capitalize;" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${application.fullName}
                </th>
                <td style="text-transform: capitalize;" class="px-6 py-4">
                    ${application.title}
                </td>

                <td style="text-transform: capitalize;" class="px-6 py-4">
                    <a  id="${userDoc.id}" href="../main/application-view-page.html?id=${userDoc.id}" class="text-sm font-medium text-indigo-600">View Application</a>
                </td>

                <td style="text-transform: capitalize;" class="px-6 py-4">
                   ${application.state}
                </td>
            </tr>


`
        table.insertAdjacentHTML("beforeend", HTML);
    });

    if(querySnapshot.length === 0 ) {

        loading.innerText = "There are no applications yet!"
    }else {
        loading.innerText = ""

    }

})



