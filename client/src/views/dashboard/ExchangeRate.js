import React, { useState, useEffect } from 'react';

const ExchangeRate = ({ fromSymbol, toSymbol }) => {
  const [exchangeData, setExchangeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromSymbol}&to_currency=${toSymbol}&apikey=7BDXN4FUXGRK4LI1`);
        const data = await response.json();
        setExchangeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fromSymbol, toSymbol]);

  return (
    <div>
      {exchangeData && exchangeData['Realtime Currency Exchange Rate'] && (
        <div>
          
          <p><strong>From Currency:</strong> {exchangeData['Realtime Currency Exchange Rate']['2. From_Currency Name']}</p>
          <p><strong>To Currency:</strong> {exchangeData['Realtime Currency Exchange Rate']['4. To_Currency Name']}</p>
          <p><strong>Exchange Rate:</strong> {exchangeData['Realtime Currency Exchange Rate']['5. Exchange Rate']}</p>
          <p><strong>Last Refreshed:</strong> {exchangeData['Realtime Currency Exchange Rate']['6. Last Refreshed']}</p>
        </div>
      )}
    </div>
  );
};

export default ExchangeRate;
