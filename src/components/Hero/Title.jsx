import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 164px 0 162px 0;
`

const Header = styled.h1`
  font-weight: 800;
  font-size: 72px;
  text-transform: uppercase;
  color: #fff;
  display: table-caption;
  line-height: 0.85;
  margin: 0;

  ::before {
    content: '';
    border: 2px solid #fdc300;
    width: 66px;
    display: block;
    margin: 0 0 22px 5px;

  }
`

const Title = (props) => (
  <Container>
    <Header>{props.children}</Header>
  </Container>
)

export default Title
