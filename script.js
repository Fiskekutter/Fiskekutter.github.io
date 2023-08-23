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

// Function to fetch cryptocurrency data
async function fetchCryptoData() {
    const bitcoinPriceElement = document.getElementById('bitcoinPrice');
    const ethereumPriceElement = document.getElementById('ethereumPrice');

    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        const data = await response.json();

        bitcoinPriceElement.textContent = `$${data.bitcoin.usd}`;
        ethereumPriceElement.textContent = `$${data.ethereum.usd}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        bitcoinPriceElement.textContent = error;
        ethereumPriceElement.textContent = error;
    }
}

// Fetch data initially and set an interval for continuous updates
fetchCryptoData();
setInterval(fetchCryptoData, 30000); // Update every 30 seconds