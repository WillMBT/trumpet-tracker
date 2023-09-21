document.addEventListener("DOMContentLoaded", event =>{

const app = firebase.app();
console.log(app)

});


const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const googlebtn = document.getElementById('whenSignedIn');
const SignOutButton = document.getElementById('whenSignedOut');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogeAuthProvider();

googlebtn.onclick = () => auth.signInWithPopup(provider);

btnLogin.addEventListener("click", loginEmailPassword)

SignOutButton.onclick = () => auth.signOut();
