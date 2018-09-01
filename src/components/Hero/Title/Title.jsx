import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 154px 0;
`

const Header = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: bolder;
  font-size: 72px;
  text-transform: uppercase;
  color: #fff;
  display: table-caption;
  line-height: 60px;

  ::before {
    content: '';
    border: 2px solid rgb( 253, 195, 0);
    width: 66px;
    display: block;
    margin: 0 0 20px 5px;

  }
`

const Title = (props) => (
  <Container>
    <Header>{props.children}</Header>
  </Container>
)

export default Title
