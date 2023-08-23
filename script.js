document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");
    const loginForm = document.getElementById("login-form");
    const userInfo = document.getElementById("user-info");
    const usernameDisplay = document.getElementById("username-display");
    const avatar = document.getElementById("avatar");
    const logoutButton = document.getElementById("logout-button");

    loginButton.addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "ad" && password === "ad") {
            // Hide the login form
            loginForm.style.display = "none";

            // Display the username
            usernameDisplay.textContent = username;
            avatar.style.display = "flex";
            avatar.style.visibility = "visible";
            avatar.style.padding = "5px";
            
            userInfo.style.display = "flex";
            userInfo.style.padding = "3px";
            
            logoutButton.style.display = "flex";
            logoutButton.style.visibility = "visible";
            logoutButton.style.padding = "5px";

            logoutButton.addEventListener("click", function() {
                loginForm.style.display = "flex";
                
                username.value = "";
                password.value = "";

                usernameDisplay.textContent = "";
                userInfo.style.display = "none";
                avatar.style.display = "none";

                logoutButton.style.display = "none";

            });
        } else {
            alert("Login failed. Please check your username and password.");
        }
    });

});