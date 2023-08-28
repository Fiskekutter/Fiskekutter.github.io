// Function to fetch cryptocurrency data
async function fetchCryptoData() {
    const bitcoinPriceElement = document.getElementById('bitcoinPrice');
    const bitcoinPriceChange = document.getElementById('bitcoinChange');

    const ethereumPriceElement = document.getElementById('ethereumPrice');
    const ethereumPriceChange = document.getElementById('ethereumChange');

    const solanaPriceElement = document.getElementById('solanaPrice');
    const solanaPriceChange = document.getElementById('solanaChange');

    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=eur&include_24hr_change=true');
        const data = await response.json();

        bitcoinPriceElement.textContent = `€${data.bitcoin.eur}`;
        ethereumPriceElement.textContent = `€${data.ethereum.eur}`;
        solanaPriceElement.textContent = `€${data.solana.eur}`;

        
        if(data.bitcoin.eur_24h_change > 0){
            bitcoinPriceElement.style.color = "green";
            bitcoinPriceChange.style.color = "green";
            bitcoinPriceChange.textContent = `\u2191${data.bitcoin.eur_24h_change.toFixed(2)}`;
        } else {
            bitcoinPriceElement.style.color = "red";
            bitcoinPriceChange.style.color = "red";
            bitcoinPriceChange.textContent = `\u2193${data.bitcoin.eur_24h_change.toFixed(2)}`;
        }
        if(data.ethereum.eur_24h_change > 0){
            ethereumPriceElement.style.color = "green";
            ethereumPriceChange.style.color = "green";
            ethereumPriceChange.textContent = `\u2191${data.ethereum.eur_24h_change.toFixed(2)}`;
        } else {
            ethereumPriceElement.style.color = "red";
            ethereumPriceChange.style.color = "red";
            ethereumPriceChange.textContent = `\u2193${data.ethereum.eur_24h_change.toFixed(2)}`;
        }
        if(data.solana.eur_24h_change > 0){
            solanaPriceElement.style.color = "green";
            solanaPriceChange.style.color = "green";
            solanaPriceChange.textContent = `\u2191${data.solana.eur_24h_change.toFixed(2)}`;

        } else {
            solanaPriceElement.style.color = "red";
            solanaPriceChange.style.color = "red";
            solanaPriceChange.textContent = `\u2193${data.solana.eur_24h_change.toFixed(2)}`;

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