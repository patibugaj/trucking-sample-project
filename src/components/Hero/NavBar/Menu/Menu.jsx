import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const Container = styled.ul`
    height: 100%;
    flex-grow: 0;
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    font-size: 13px;
    line-height: 22px;
    font-weight: bold;
`

const Menu = () => (
    <Container>
        <Item title='Home' />
        <Item title='About Us' />
        <Item title='Services' />
        <Item title='News' />
        <Item title='Locations' />
        <Item title='Contact' />
    </Container>
)

export default Menu