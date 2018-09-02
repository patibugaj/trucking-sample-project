import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 182px;
    width: 555px;
    background-color: #fcfcfc;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`

const Icon = styled.div`
    width: 162px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Info = styled.div`
    width: 393px;
`

const Title = styled.h1`
    font-size: 18px;
    color: #333;
    margin-top: 34px;
`

const Paragraph = styled.p` 
    font-family: 'OpenSans', sans-serif;
    font-size: 13px;
    line-height: 1.5;
    color: #777;
    margin: 0;
    width: 350px;
    hyphens: auto;
`

const Box = (props) => (
    <Container>
        <Icon>
            <img src={props.icon} alt="Icon" />
        </Icon>
        <Info>
            <Title>{props.title}</Title>
            <Paragraph>{props.paragraph}</Paragraph>
        </Info>
    </Container>
)

export default Box