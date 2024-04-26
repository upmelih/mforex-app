import React from 'react'
import classNames from 'classnames'
import { Route } from 'react-router-dom'

import _nav from '../../_nav'


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
  const [fromSymbol, setFromSymbol] = useState('')
  const [toSymbol, setToSymbol] = useState('')
  const[isDetail, setIsDetail]= useState(false)
  const handleButtonClick = () => {
    setIsDetail(true)
  }
  
  return (
    <>
      <CCard >
        <CCardHeader>Real Time Currency Excahange Rate</CCardHeader>

        <CCardBody>
          <CInputGroup className="mb-3">
            <CFormInput
              placeholder="USD/EUR"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={(e) => {
                const symbols = e.target.value.split('/')
                setFromSymbol(symbols[0])
                setToSymbol(symbols[1])
              }}
            />
          </CInputGroup>

          <CCardText>
            {fromSymbol && toSymbol ? (
              <ExchangeRate fromSymbol={fromSymbol} toSymbol={toSymbol} />
            ) : (
              <p>With supporting text below as a natural lead-in to additional content.</p>
            )}
          </CCardText>
          <CButton className='m-4' color="primary" onClick={() => handleButtonClick()}>
            Go somewhere
          </CButton>
          
        </CCardBody>
      </CCard>
      {isDetail?
  <ForexDataComponent fromSymbol={fromSymbol} toSymbol={toSymbol} />

 :<NewsSentiment />}
      
      
    </>
  )
}

export default Dashboard
