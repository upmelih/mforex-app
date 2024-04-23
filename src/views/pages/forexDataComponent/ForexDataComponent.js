import React, { useState, useEffect } from 'react'
import axios from 'axios'
import data from '../daily.json'
import { CButton, CFormInput, CInputGroup, CCol, CCard, CCardBody, CRow, CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow, } from '@coreui/react'



var today = new Date().toLocaleDateString()
var month = '0'+today[0]
var day = today.slice(2,4)
var year = today.slice(5)
var getToday = `'${year}-${month}-${day}'`

console.log(getToday);



const ForexDataComponent = () => {
  const [forexData, setForexData] = useState(null)
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=V899YLLQUPCZ251J',
  //       )
  //       setForexData(response.data)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   fetchData()
    
  // }, [])

  return (
    <div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4" >
            <CCardBody>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <CButton type="button" color="secondary" variant="outline" id="button-addon2">
                  Button
                </CButton>
              </CInputGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <h2>Forex Daily Prices (CAD to USD)</h2>
      
      <div>
  {data ? (
    <div>
      {Object.entries(data['Time Series (Digital Currency Daily)']).map(([date, values]) => {
        const keys = Object.keys(values);
        return (
          <div>
            <h3>{date}</h3>
            <CTable striped>
              <CTableHead>
                <CTableRow>
                  {keys.map((key) => (
                    <CTableHeaderCell scope="col" key={key}>
                      {key}
                    </CTableHeaderCell>
                  ))}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  {keys.map((key) => (
                    <CTableDataCell key={`${date}-${key}`}>
                      {values[key]}
                    </CTableDataCell>
                  ))}
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
 )
}

export default ForexDataComponent
