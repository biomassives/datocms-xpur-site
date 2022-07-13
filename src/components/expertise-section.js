import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { pageMargins, typography } from './styles/utils'
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
  background: linear-gradient(
    to top right,
    rgba(4, 201, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 80%
  );
  & ${GridLeft}, ${GridRight}, ${GridCenter} {
    display: flex;
    justify-content: center;
    text-align: left;
    flex-direction: column;
    & h3 {
      font-size: 22px;
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
    @media only screen and (max-width: 640px) {
        font-size: ${typography.size.m3};
    }
  }
`

const TickContainer = styled.ul`
  position: relative;
  list-style: none;
  padding: 34px 41px 20px 41px;
  background: rgba(4, 201, 255, 0.2);
  border-radius: 20px;
  box-shadow: 20px 20px 60px rgba(17, 44, 76, 0.15),
    -20px -20px 60px rgb(255 255 255 / 15%);
  & li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
`

const ImageContainer = styled.div`
  width: 70px;
  position: relative;
  margin-right: 18px;
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
