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
  padding: 0;
  margin: 0;
`

const InfoBoxes = (props) =>  (
  <Boxes>
    {props.data.map((infoBox) => 
      <InfoBox 
        key={infoBox.id}
        title={infoBox.title}
        paragraph={infoBox.description.description}
      />
    )}
    
  </Boxes>
)

export default InfoBoxes