import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  background-color: #fdc300;
  color: #fff;
  font-family: 'Raleway',sans-serif;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 17px 63px 17px 63px;
  border-radius: 30px;
  border-style: none;
  margin: 51px 0;
`

const DetailsButton = () => (
  <Container>
    <Button>View Details</Button>
  </Container>
)

export default DetailsButton