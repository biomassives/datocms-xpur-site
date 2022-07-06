import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { pageMargins } from './styles/utils'
import {
  ThreeColumnGrid,
  GridLeft,
  GridCenter,
  GridRight,
  TwoColumnGrid
} from './styles/styles'

const Container = styled.section`
  position: relative;
  ${pageMargins};
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  & ${GridLeft}, ${GridRight}, ${GridCenter} {
    display: flex;
    justify-content: center;
    text-align: left;
    flex-direction: column;
    & h3 {
      font-size: 24px;
      text-decoration: underline;
    }
  }
  & ${GridRight} {
    @media only screen and (min-width: 1024px) {
      align-items: center;
    }
  }
  & h2 {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
`

const TickContainer = styled.ul`
  position: relative;
  list-style: none;
  & li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
`

const ImageContainer = styled.div`
  width: 80px;
  position: relative;
  margin-right: 15px;
`

const ExpertiseSection = () => {
  return (
    <Container>
      <TwoColumnGrid>
        <GridLeft>
          <h2>Do you have investment expertise worth sharing?</h2>
          <h2>
            Are you interested in earning money for helping other investors?
          </h2>
        </GridLeft>
        <GridRight>
          <TickContainer>
            <li>
              <ImageContainer>
                <StaticImage src='../images/tick.png' alt='expert graphic' />
              </ImageContainer>
              <h3>Share Your Knowledge</h3>
            </li>
            <li>
              <ImageContainer>
                <StaticImage src='../images/tick.png' alt='expert graphic' />
              </ImageContainer>
              <h3>Build your networks</h3>
            </li>
            <li>
              <ImageContainer>
                <StaticImage src='../images/tick.png' alt='expert graphic' />
              </ImageContainer>
              <h3>Get paid</h3>
            </li>
          </TickContainer>
        </GridRight>
      </TwoColumnGrid>
    </Container>
  )
}

export default ExpertiseSection
