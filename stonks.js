document.getElementById('fetchBtn').addEventListener('click', async () => {
    const symbol = document.getElementById('symbol').value;
    const apiKey = '1FXBH7G3ZOKC251E';
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      const price = data['Global Quote']['05. price'];
      const displayElement = document.getElementById('priceDisplay');
      displayElement.textContent = `Current Price: $${price}`;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
