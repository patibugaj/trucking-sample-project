import React from 'react'
import NavBar from './Navbar'
import InfoBoxes from './InfoBoxes'
import DetailsButton from './DetailsButton'
import Title from './Title'

const Hero = () => (
  <div>
    <h1>Hero</h1>
    <ul>
      <li><NavBar /></li>
      <li><Title /></li>
      <li><InfoBoxes /></li>
      <li><DetailsButton /></li>
    </ul>
  </div>
)

export default Hero