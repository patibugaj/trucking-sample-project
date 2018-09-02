import React from 'react'
import styled from 'styled-components'
import Width from '../Width'
import Boxes from './Boxes'

const Section = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 70px 0;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  color: #333;
`

const SubTitle = styled.h3`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 10px;
  color: #888;

    ::after {
      content: '';
      border: 2px solid #fdc300;
      width: 30px;
      display: block;
      margin: 15px auto 0;
    }
`

const Offer = (props) => (
  <Section>
    <Width>
      <Container>
        <Header>
          <Title>{props.title}</Title>
          <SubTitle>{props.subTitle}</SubTitle>
        </Header>
        <Boxes data={props.offerBoxes}/>
      </Container>
    </Width>
  </Section>
)

export default Offer
