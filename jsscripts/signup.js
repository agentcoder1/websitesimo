// Your web app's Firebase configuration (replace with your own config)
const firebaseConfig = {
    // ... your firebase config
    apiKey: "AIzaSyC7EurZJY3vJRQpWsSTx02uX-KMod5xQRg",
    authDomain: "assignement1-d8723.firebaseapp.com",
    databaseURL: "https://assignement1-d8723-default-rtdb.firebaseio.com",
    projectId: "assignement1-d8723",
    storageBucket: "assignement1-d8723.appspot.com",
    messagingSenderId: "327347476719",
    appId: "1:327347476719:web:a4d03f83488200c667e31a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to the HTML elements
const signupForm = document.querySelector('.jumbotron');
const fullNameInput = document.getElementById('exampleInputName1');
const emailInput = document.getElementById('exampleInputEmail1');
const passwordInput = document.getElementById('exampleInputpassword1');
const contactInput = document.getElementById('exampleInputnumber1');

// Add a submit event listener to the form
signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user info
    const fullName = fullNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const contact = contactInput.value;

    // Sign up the user
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // Update profile with full name
        user.updateProfile({
            displayName: fullName
        }).then(() => {
            // Profile updated successfully!

            // Add a new document in collection "users"
            const db = firebase.firestore();
            db.collection("users").doc(user.uid).set({
                name: fullName,
                email: email,
                contact: contact
                // ... other user info
            })
                .then(() => {
                    console.log("Document successfully written!");
                    // Redirect to another page or show success message
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });

        }).catch((error) => {
            console.log('Error updating user profile:', error.message);
        });

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Show an error message to the user
        alert(errorMessage);
    });
});
