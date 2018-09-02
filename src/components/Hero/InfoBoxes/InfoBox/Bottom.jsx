import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 184px;
  background-color: #fff
  padding: 32px 29px;
  box-sizing: border-box;
`

const Title = styled.h1`
  font-weight: bolder;
  font-size: 18px;
  text-transform: uppercase;
  color: #333;
  line-height: 2.5;
  margin: 0;

  ::before {
    content: '';
    border: 2px solid #fdc300;
    width: 30px;
    display: block;
  }
`

const Paragraph = styled.p`
  font-family: 'OpenSans', sans-serif;
  font-size: 13px;
  line-height: 1.5;
  color: #777;
  margin: 0;
  hyphens: auto;
`

const Bottom = (props) => (
    <Container>
        <Title>{props.title}</Title>
        <Paragraph>{props.paragraph}</Paragraph>
    </Container>
)

export default Bottom