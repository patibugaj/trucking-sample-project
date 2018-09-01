import React from 'react'
import styled from 'styled-components'
import InfoBox from './InfoBox'

const Boxes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrpa: nowrap;
  justify-content: space-between;
  align-items: center;
  padding:0;
  margin: 0;
`

const InfoBoxes = () => (
  <Boxes>
    <InfoBox 
      title='Overland Network'
      paragraph='We have a wide experience in overland industry specific logistic solutions'
    />
    <InfoBox 
      title='Ocean Freight' 
      paragraph='We bring your goods safely to worldwide  destinations with our '/>
    <InfoBox 
      title='Air Freight'
      paragraph='We provide full supply chain management package including cost ' />
  </Boxes>
)

export default InfoBoxes