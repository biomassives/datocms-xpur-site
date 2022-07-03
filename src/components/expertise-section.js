import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { pageMargins } from './styles/utils'
import {
  ThreeColumnGrid,
  GridLeft,
  GridCenter,
  GridRight
} from './styles/styles'

const Container = styled.section`
  position: relative;
  ${pageMargins};
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  & ${GridLeft}, ${GridRight}, ${GridCenter} {
    display: flex;
    align-items: center;
    justify-content: center;
    & h3 {
      font-size: 24px;
    }
  }
  & h2 {
    font-size: 2.5rem;
  }
`

const ImageContainer = styled.div`
  width: 80px;
  position: relative;
`

const ExpertiseSection = () => {
  return (
    <Container>
      <h2>Do you have investment expertise worth sharing?</h2>
      <h2>Are you interested in earning money for helping other investors?</h2>
      <ThreeColumnGrid>
        <GridLeft>
          <ImageContainer>
            <StaticImage src='../images/tick.png' alt='expert graphic' />
          </ImageContainer>
          <h3>Share Your Knowledge</h3>
        </GridLeft>
        <GridCenter>
          <ImageContainer>
            <StaticImage src='../images/tick.png' alt='expert graphic' />
          </ImageContainer>
          <h3>Build your networks</h3>
        </GridCenter>
        <GridRight>
          <ImageContainer>
            <StaticImage src='../images/tick.png' alt='expert graphic' />
          </ImageContainer>
          <h3>Get paid</h3>
        </GridRight>
      </ThreeColumnGrid>
    </Container>
  )
}

export default ExpertiseSection
