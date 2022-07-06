import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import StyledButton from './styles/StyledButton'
import { GridLeft, GridRight, TwoColumnGrid } from './styles/styles'
import { pageMargins, color } from './styles/utils'
import { StaticImage } from 'gatsby-plugin-image'

const Container = styled.div`
  width: 100%;
  position: relative;
  height: 70vh;
  min-height: 800px;
  display: flex;
  align-items: center;
  padding-top: 100px;

  ${pageMargins};
  ${TwoColumnGrid} {
    height: 100%;
  }
  ${GridLeft} {
    @media only screen and (min-width: 1024px) {
      align-items: flex-start;
    }
    & > p {
      line-height: 24px;
    }
  }
  ${GridRight} {
    @media only screen and (min-width: 1024px) {
      align-items: flex-end;
    }
  }
  background: linear-gradient(
    to bottom left,
    rgba(4, 201, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 80%
  );
`

const StyledButtonsContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`

const Title = styled.h1`
  color: ${color.darkblue};
  font-size: 5rem;
  font-weight: bold;
  font-family: avenir;
`

const ImageContainer = styled.div`
  max-width: 25rem;
  width: 100%;
  position: relative;
`

const TopSection = () => {
  return (
    <Container>
      <TwoColumnGrid>
        <GridLeft center>
          <Title>Expurtle</Title>
          <p style={{ color: '#243755' }} className='text-1xl pb-6 pt-2 w-80'>
            The Leading Digital Marketplace for Investment Experts
          </p>
          <StyledButtonsContainer>
            <Link to='/register'>
              <StyledButton theme='dark'>Register</StyledButton>
            </Link>
            <a
              href='mailto:adrian.d@expurtle.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StyledButton theme='blue'>Book an intro call</StyledButton>
            </a>
          </StyledButtonsContainer>
        </GridLeft>
        <GridRight center>
          <ImageContainer>
            <StaticImage src='../images/logo-large.png' alt='expert graphic' />
          </ImageContainer>
        </GridRight>
      </TwoColumnGrid>
    </Container>
  )
}

export default TopSection
