import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import contract from './contract.png'
import overland from './overland.png'
import warehousing from './warehousing.png'
import consulting from './consulting.png'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

const Boxes = () => (
    <Container>
        <Box 
            icon = { contract }
            title = 'Contract logistics'
            paragraph = 'Cozy sphinx waves quart jug of bad milk. A very bad quack might sphinx waves quart jug of bad milk. A very bad quack might sphinx waves quart jug of bad milk. A very bad quack might'
        />
        <Box 
            icon = { overland }
            title = 'Overland, Ocean and Air Freight'
            paragraph = 'To an English person, it will seem like simplified English, as '
        />
        <Box             
            icon = { warehousing }
            title = 'Warehousing and Storage'
            paragraph = 'The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixen'
        />
        <Box 
            icon = { consulting }
            title = 'Consulting Srvices'
            paragraph = 'The Big Oxmox advised her not to do so, because there were thou'
        />
    </Container>
)

export default Boxes