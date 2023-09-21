


import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';
import { getDatabase, set, ref, update } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js';

import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnSsNAVNRowj6x2oW8aGAYmgDUsPuQULo",
  authDomain: "melodymaster.firebaseapp.com",
  projectId: "melodymaster",
  storageBucket: "melodymaster.appspot.com",
  messagingSenderId: "68003059642",
  appId: "1:68003059642:web:db542147e9c4ccacc2ef83"
};

const firebaseApp = initializeApp(firebaseConfig)

   const auth = getAuth(firebaseApp);
   const database = getDatabase(firebaseApp);
  

   

signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

 const storage = getStorage(firebaseApp);






// Detect Auth States

onAuthStateChanged(auth, user => {
    if(user != null ){
        console.log('logged in');
    } else {
        console.log('no user');

    }

});

SignUp.addEventListener('click',(e) =>{


    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      set(ref(database,'users/' + user.uid),{
        email: email
      })
      alert('user created')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });

});



login.addEventListener('click',(e) =>{

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    const dt = new Date();
    update(ref(database,'users/' + user.uid),{
        last_login: dt,
      })
      alert('user logged in')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
  });


});







const provider = new GoogleAuthProvider();


signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });



var uploadForm = document.getElementById("upload-form");
var fileInput = document.getElementById("file-input");

uploadForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var file = fileInput.files[0];
  var storageRef = firebase.storage().ref().child("uploads/" + file.name);

  storageRef.put(file).then(function (snapshot) {
    console.log("File uploaded successfully!");
  }).catch(function (error) {
    console.error("File upload error:", error);
  });
});