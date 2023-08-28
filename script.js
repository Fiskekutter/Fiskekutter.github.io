document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");
    const userInfo = document.getElementById("user-info");
    const usernameDisplay = document.getElementById("username-display");
    const avatar = document.getElementById("avatar");
    const logoutButton = document.getElementById("logout-button");

    const loginBoxButton = document.getElementById('login-logo');
    const loginBox = document.getElementById('login-popout');

    var box = false;

    loginBoxButton.addEventListener("click", function(){
        if(box === false){
            loginBox.style.display = "block";
            box = true;
        } else {
            loginBox.style.display = "none";
            box = false;
        }  
    });

    loginButton.addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "ad" && password === "ad") {

            loginBoxButton.style.display = "none";
            box = false;
            loginBox.style.display = "none";

            usernameDisplay.textContent = username;

            userInfo.style.display = "flex";
            usernameDisplay.style.display = "flex";
            avatar.style.display = "flex";
            avatar.style.visibility = "visible";
            logoutButton.style.display = "flex";
            
            
            logoutButton.addEventListener("click", function() {
                userInfo.style.display = "none";
                usernameDisplay.style.display = "none";
                avatar.style.display = "none";
                logoutButton.style.display = "none";

                loginBoxButton.style.display = "block";
            });
        } else {
            alert("Login failed. Please check your username and password.");
        }
    });
});