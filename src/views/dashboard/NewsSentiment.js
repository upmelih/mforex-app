import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CCardSubtitle, CCardText, CCardTitle,CRow,CCol } from '@coreui/react';
import axios from 'axios';

const NewsSentiment = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=7BDXN4FUXGRK4LI1');
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <CRow>
      {newsData && newsData['feed'] && (
        <>
          {newsData['feed'].slice(0, 7).map((item, index) => (
            <CCol sm={6}>
            <CCard key={index} className='mb-3 mt-3' >
              
              <CCardBody>
              <CCardTitle>{item['title']}</CCardTitle>
                <CCardText>{item['summary']}</CCardText>
              </CCardBody>
            </CCard>
            </CCol>

          ))}
        </>
      )}
    </CRow>
  );
};

export default NewsSentiment;

