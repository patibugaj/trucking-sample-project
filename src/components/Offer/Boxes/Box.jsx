import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 182px;
    width: 555px;
    background-color: rgb(252, 252, 252);
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    wrap: nowrap;
`

const Icon = styled.div`
    width: 162px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Info = styled.div`
    width: calc( 100% - 162px);
`

const Title = styled.h1`
    font-size: 18px;
    color: rgb(51, 51, 51);
`

const Paragraph = styled.p` 
    font-family: 'OpenSans', sans-serif;
    font-size: 13px;
    line-height: 20px;
    color: rgb(119, 119, 119);
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