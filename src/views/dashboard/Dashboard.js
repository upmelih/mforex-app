import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CInputGroup,
  CCardText,
  CFormInput,
} from '@coreui/react'

import ExchangeRate from './ExchangeRate'
import { symbol } from 'prop-types'
import { useState } from 'react'
import ForexDataComponent from '../pages/forexDataComponent/ForexDataComponent'
import NewsSentiment from './NewsSentiment'

const Dashboard = () => {
 
  const [fromSymbol, setFromSymbol] = useState('');
  const [toSymbol, setToSymbol] = useState('');

  // const handleButtonClick = () => {
  //   if (fromSymbol && toSymbol) {
  //     return <ForexDataComponent fromSymbol={fromSymbol.toUpperCase()} toSymbol={toSymbol.toUpperCase()} />;
      
  //   } else {
  //     alert('Please enter both From and To symbols.');
  //   }
  // };
  

  
  return (
    <>
      <CCard style={{width: '20rem'}}>
        <CCardHeader>Real Time Currency Excahange Rate</CCardHeader>

        <CCardBody>
        <CInputGroup className="mb-3">
        <CFormInput
          placeholder="USD/EUR"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => {
            const symbols = e.target.value.split('/');
            setFromSymbol(symbols[0]);
      setToSymbol(symbols[1]);
           
          }}
          
        />
        {/* <CButton type="button" color="secondary" variant="outline" id="button-addon2" onClick={() => handleButtonClick}>
          Get Exchange Rate
        </CButton> */}
      </CInputGroup>
          <CCardText>
          {fromSymbol && toSymbol && <ExchangeRate fromSymbol={fromSymbol} toSymbol={toSymbol} />}
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton color="primary" href="#" onClick={() => handleButtonClick}>
            Go somewhere
          </CButton>
        </CCardBody>
      </CCard>
      
    </>
  )
}

export default Dashboard
