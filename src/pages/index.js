import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Offer from '../components/Offer'

const Div = styled.div`
  margin: 0;
  width: 100%;
`

const IndexPage = () => (
  <Div>
    <Hero />
    <Offer />
  </Div>
)

export default IndexPage
