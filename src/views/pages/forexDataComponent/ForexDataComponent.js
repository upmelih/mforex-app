import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CButton,
  CFormInput,
  CInputGroup,
  CCol,
  CCard,
  CCardBody,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react';

const ForexDataComponent = ({ fromSymbol, toSymbol }) => {
  const [forexData, setForexData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${fromSymbol}&to_symbol=${toSymbol}&apikey=7BDXN4FUXGRK4LI1`
        );
        setForexData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fromSymbol, toSymbol]);

  return (
    <div>
      
      <h2>{`Forex Daily Prices (${fromSymbol} to ${toSymbol})`}</h2>

      <div>
        {forexData ? (
          <div>
            {Object.entries(forexData['Time Series FX (Daily)']).map(([date, values]) => {
              return (
                <div key={date}>
                  <h3>{date}</h3>
                  <CTable striped>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">Open</CTableHeaderCell>
                        <CTableHeaderCell scope="col">High</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Low</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Close</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableDataCell>{values['1. open']}</CTableDataCell>
                        <CTableDataCell>{values['2. high']}</CTableDataCell>
                        <CTableDataCell>{values['3. low']}</CTableDataCell>
                        <CTableDataCell>{values['4. close']}</CTableDataCell>
                      </CTableRow>
                    </CTableBody>
                  </CTable>
                </div>
              );
            })}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>

    </div>
  );
};

export default ForexDataComponent;
