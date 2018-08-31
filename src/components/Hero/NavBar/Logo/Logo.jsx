import React from 'react'
import styled from 'styled-components'
import logoImage from './logo.png'

const Container = styled.div`
    height: 100%;
    outline: 1px solid red;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 15px;
`

const Logo = () => (
    <Container>
        <img src={ logoImage } alt="Logo" />
    </Container>
)

export default Logo