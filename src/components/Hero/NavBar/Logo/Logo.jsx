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
    padding-left: 23px;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 9px;
    height: 42px;
`

const Main = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    font-size: 25.92px;
    margin: 0;
    text-transform: uppercase;
`

const SubTitle = styled.h4`
    font-family: 'Raleway', sans-serif;
    font-size: 11.12px;
    margin:0;
    color: rgb(119, 119, 119);
`

const Logo = () => (
    <Container>
        <img src={logoImage} alt="Logo" />
        <Title>
            <Main>Trucking</Main>
            <SubTitle>Logistics & Transportation</SubTitle>
        </Title>
    </Container>
)

export default Logo