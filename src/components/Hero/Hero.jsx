import React from 'react'
import NavBar from './Navbar/NavBar.jsx'
import InfoBoxes from './InfoBoxes/InfoBoxes.jsx'
import DetailsButton from './DetailsButton/DetailsButton.jsx'
import Title from './Title/Title.jsx'

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