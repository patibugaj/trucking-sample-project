import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'

const Container = styled.div`
  height: 81px;
  width: 100%;
  margin-top: 42px;
  background-color: #fff;
  border-radius: 3px;
  outline: 1px solid black;
  box-shadow: 0px -8px 0px rgb(65, 81, 94);
  display: flex;
  flex-direction: row;
  wrap: no-wrap;
  justify-content: flex-end;
`

const NavBar = () => (
  <Container>
    <Logo />
    <Menu />
    <Search />
  </Container>
)

export default NavBar