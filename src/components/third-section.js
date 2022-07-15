import React from 'react'
import styled from 'styled-components'
import { pageMargins, typography } from './styles/utils'
import { TwoColumnGrid, GridLeft, GridRight } from './styles/styles'
import { StaticImage } from 'gatsby-plugin-image'

const Container = styled.section`
  position: relative;
  width: 100%;
  ${pageMargins};
  padding-bottom: 80px;
  ${GridRight} {
    align-items: flex-start;
    h2 {
      font-size: ${typography.size.m3};
      width: 60%;
      margin-bottom: 20px;
      line-height: 3rem;
    }
    p {
      font-size: 18px;
      line-height: 28px;
      width: 80%;
    }
    @media only screen and (max-width: 1024px) {
      
        align-items: center;
        text-align: center;
        margin-top: 2rem;
      
    }
  }

`

const ThirdSection = () => {
  return (
    <Container>
      <TwoColumnGrid center>
        <GridLeft>
          <StaticImage
            src='../images/expert-giving-advice.jpg'
            alt='expert graphic'
          />
        </GridLeft>
        <GridRight center>
          <h2>Become an investment mentor</h2>
          <p>
            Help others gain clarity and peace of mind by sharing your wisdom of
            the markets
          </p>
        </GridRight>
      </TwoColumnGrid>
    </Container>
  )
}

export default ThirdSection
