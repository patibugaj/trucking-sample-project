import React from 'react'
import styled from 'styled-components'
import Top from './Top'
import Bottom from './Bottom'

const Box = styled.div`
    width: 360px;
    height: 400px;
    outline: 1px solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const InfoBox = (props) => (
    <Box>
        <Top />
        <Bottom 
            title={props.title}
            paragraph={props.paragraph} 
        />
    </Box>
)

export default InfoBox