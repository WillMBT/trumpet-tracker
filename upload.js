import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';

const firebaseConfig = {
    apiKey: "AIzaSyBnSsNAVNRowj6x2oW8aGAYmgDUsPuQULo",
    authDomain: "melodymaster.firebaseapp.com",
    projectId: "melodymaster",
    storageBucket: "melodymaster.appspot.com",
    messagingSenderId: "68003059642",
    appId: "1:68003059642:web:db542147e9c4ccacc2ef83"
  };
  
  const firebaseApp = initializeApp(firebaseConfig)

const storage = getStorage(firebaseApp);


function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const progressBar = document.getElementById('progressBar');
  const status = document.getElementById('status');

  const file = fileInput.files[0];

  if (file) {
    // Create a reference to the Firebase Storage bucket
    const storageRef = firebase.storage().ref();

    // Create a reference to the file you want to upload
    const fileRef = storageRef.child(file.name);

    // Upload file
    const uploadTask = fileRef.put(file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Update progress bar
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        progressBar.value = progress;
        status.innerText = `Status: Uploading ${Math.round(progress)}%`;
      },
      (error) => {
        // Handle errors here
        console.error(error);
        status.innerText = 'Status: Error Uploading';
      },
      () => {
        // Handle successful upload
        status.innerText = 'Status: Upload Complete';
      }
    );
  } else {
    alert('Please select a file to upload.');
  }
}


//var uploadForm = document.getElementById("upload-form");
//var fileInput = document.getElementById("file-input");

//uploadForm.addEventListener("submit", function (e) {
  //e.preventDefault();
  //var file = fileInput.files[0];
  //var storageRef = firebase.storage().ref().child("uploads/" + file.name);

  //storageRef.put(file).then(function (snapshot) {
    //console.log("File uploaded successfully!");
  //}).catch(function (error) {
   // console.error("File upload error:", error);
  //});
//});