import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 184px;
  outline: 1px solid red;
  background-color: #fff
  padding: 29px 31px;
`

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: bolder;
  font-size: 18px;
  text-transform: uppercase;
  color: rgb(51, 51, 51);
  line-height: 40px;
  margin: 0;

  ::before {
    content: '';
    border: 2px solid rgb( 253, 195, 0);
    width: 30px;
    display: block;
  }
`

const Paragraph = styled.p`
  font-family: 'OpenSans', sans-serif;
  font-size: 13px;
  line-height: 20px;
  color: rgb(119, 119, 119);
  margin: 0;
`

const Bottom = (props) => (
    <Container>
        <Title>{props.title}</Title>
        <Paragraph>{props.paragraph}</Paragraph>
    </Container>
)

export default Bottom