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
    const solanaPriceElement = document.getElementById('solanaPrice');

    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=eur&include_24hr_change=true');
        const data = await response.json();

        bitcoinPriceElement.textContent = `€${data.bitcoin.eur}`;
        ethereumPriceElement.textContent = `€${data.ethereum.eur}`;
        solanaPriceElement.textContent = `€${data.solana.eur}`;
        if(data.bitcoin.eur_24h_change > 0){
            bitcoinPriceElement.style.color = "green";
        } else {
            bitcoinPriceElement.style.color = "red";
        }
        if(data.ethereum.eur_24h_change > 0){
            ethereumPriceElement.style.color = "green";
        } else {
            ethereumPriceElement.style.color = "red";
        }
        if(data.solana.eur_24h_change > 0){
            solanaPriceElement.style.color = "green";
        } else {
            solanaPriceElement.style.color = "red";
        }

    } catch (error) {
        console.error('Error fetching data:', error);
        bitcoinPriceElement.textContent = error;
        ethereumPriceElement.textContent = error;
        solanaPriceElement.textContent = error;
    }


}

// Fetch data initially and set an interval for continuous updates
fetchCryptoData();
setInterval(fetchCryptoData, 30000); // Update every 30 seconds