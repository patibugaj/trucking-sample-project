import React from 'react'
import styled, {injectGlobal} from 'styled-components'
import Hero from '../components/Hero'
import Offer from '../components/Offer'

injectGlobal`
  body {
    font-family: 'Raleway', sans-serif;
    box-sizing: border-box;
    margin: 0;
  }
`

const Div = styled.div`
  margin: 0;
  width: 100%;
`

const IndexPage = (props) => (
  <Div>
    <Hero {...props.data.contentfulHero} />
    <Offer {...props.data.contentfulOffer} />
  </Div>
)

export default IndexPage


export const pageQuery = graphql`
  query sections {
    contentfulHero {
      id,
      title,
      infoBoxes{
        id,
        title,
        description{
          description
        }
      }
    }
    contentfulOffer {
      id,
      title,
      subTitle,
      offerBoxes {
        id,
        title,
        description {
          description
        },
        icon{
          file{
            url
          }
        },
        order
      }
    }
  }
`
