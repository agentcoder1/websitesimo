import {db, doc, getDoc, updateDoc} from "./dataBase.js";


const applicantName = document.getElementById("applicant-name");
const jobTitle = document.getElementById("job-title");
const phoneNumber = document.getElementById("phone-number");
const email = document.getElementById("email");
const linkedIn = document.getElementById("linkedin-profile");

const approve = document.getElementById("approve-button");
const reject = document.getElementById("reject-button");



const urlParams = new URLSearchParams(window.location.search);
const idValue = urlParams.get('id');

const docRef = doc(db,"applications", idValue);


getDoc(docRef).then(doc=>{

  const   jobApplication = doc.data()

    applicantName.innerText = jobApplication.fullName;
    jobTitle.innerText = jobApplication.title;
    phoneNumber.innerText = jobApplication.phoneNumber;
    email.innerText = jobApplication.email;
    linkedIn.innerText = jobApplication.linkedIn;


}).catch(e=> {
    console.log(e)
})

approve.addEventListener("click", ()=>{
    approve.innerText = "Approving..."
    updateDoc(docRef, {state: "Approved"}).then(()=>{
        alert("Application Approved")
        approve.innerText = "Approve"
    }).catch(e=>{

        approve.innerText = "Approve"
        alert("Something went wrong please try again!")
    })
})

reject.addEventListener("click", ()=>{
    reject.innerText = "Rejecting..."
    updateDoc(docRef, {state: "Rejected"}).then(()=>{
        reject.innerText = "Reject"
        alert("Application Rejected")
    }).catch(e=>{
        reject.innerText = "Reject"

        alert("Something went wrong please try again!")
    })
})