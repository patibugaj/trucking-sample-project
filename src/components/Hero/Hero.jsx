import React from 'react'
import styled from 'styled-components'
import Width from '../Width'
import NavBar from './NavBar'
import InfoBoxes from './InfoBoxes'
import DetailsButton from './DetailsButton'
import Title from './Title'

const GRADIENT_SEPARATOR_START = '72.18%'
const GRADIENT_SEPARATOR_END = '72.26%'

const Section = styled.section`
  background-color: #122636; 
  background-image:
    linear-gradient(to bottom, transparent ${GRADIENT_SEPARATOR_END}, #1b2936 ${GRADIENT_SEPARATOR_END}),
    linear-gradient(to bottom, #122636 ${GRADIENT_SEPARATOR_START}, #223443 ${GRADIENT_SEPARATOR_START});
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
