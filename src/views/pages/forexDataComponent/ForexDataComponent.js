import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ForexDataComponent = () => {
  const [forexData, setForexData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=CAD&to_symbol=USD&outputsize=full&apikey=XQE5VZDNWE004PRG');
        setForexData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Forex Daily Prices (CAD to USD)</h2>
      {forexData && (
        <ul>
          {Object.entries(forexData['Time Series FX (Daily)']).map(([date, prices]) => (
            <li key={date}>
              <strong>Date: {date}</strong>
              <ul>
                <li>Open: {prices['1. open']}</li>
                <li>High: {prices['2. high']}</li>
                <li>Low: {prices['3. low']}</li>
                <li>Close: {prices['4. close']}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ForexDataComponent;
