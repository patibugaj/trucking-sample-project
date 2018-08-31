import React from 'react'
import styled from 'styled-components'
import Width from '../Width'
import NavBar from './NavBar'
import InfoBoxes from './InfoBoxes'
import DetailsButton from './DetailsButton'
import Title from './Title'

const Section = styled.section`
  background-color: rgb(18, 38, 54);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Hero = () => (
  <Section>
    <Width>
      <NavBar />
      <Title />
      <InfoBoxes />
      <DetailsButton />
    </Width>
  </Section>
)

export default Hero
