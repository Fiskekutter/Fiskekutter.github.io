document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");
    const loginForm = document.getElementById("login-form");
    const userInfo = document.getElementById("user-info");
    const usernameDisplay = document.getElementById("username-display");
    const avatar = document.getElementById("avatar");

    loginButton.addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "ad" && password === "ad") {
            // Hide the login form
            loginForm.style.display = "none";

            // Display the username
            usernameDisplay.textContent = username;
            avatar.style.display = "inline"; // Show the avatar
            userInfo.style.display = "flex";
        } else {
            alert("Login failed. Please check your username and password.");
        }
    });
});