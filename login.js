function validateLogin() {
    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform validation (you can replace this with your own logic)
    if (username === "A" && password === "B") {
        // Redirect to the different page
        window.location.href = "home.html"
    } else {
        alert("Invalid username or password!");
    }
}
