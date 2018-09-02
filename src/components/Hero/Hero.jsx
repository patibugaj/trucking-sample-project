import React from 'react'
import styled from 'styled-components'
import Width from '../Width'
import NavBar from './NavBar'
import InfoBoxes from './InfoBoxes'
import DetailsButton from './DetailsButton'
import Title from './Title'

const Section = styled.section`
  background-color: #122636;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Hero = (props) => (
  <Section>
    <Width>
      <NavBar />
      <Title>{props.title}</Title>
      <InfoBoxes data={props.infoBoxes}/>
      <DetailsButton />
    </Width>
  </Section>
)

export default Hero
