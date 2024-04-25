import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CCardText } from '@coreui/react';
import axios from 'axios';

const NewsSentiment = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=7BDXN4FUXGRK4LI1');
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {newsData && newsData['Sentiment'] && (
        <CCard>
          <CCardHeader>{newsData['Sentiment']['title']}</CCardHeader>
          <CCardBody>
            <CCardText>{newsData['Sentiment']['summary']}</CCardText>
          </CCardBody>
        </CCard>
      )}
    </div>
  );
};

export default NewsSentiment;
