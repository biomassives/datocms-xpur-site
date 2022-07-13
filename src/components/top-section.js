import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import StyledButton from './styles/StyledButton'
import { GridLeft, GridRight, TwoColumnGrid } from './styles/styles'
import { pageMargins, color, typography } from './styles/utils'
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
      align-items: flex-start;  
    & > p {
      line-height: 24px;
    }
  }
  @media only screen and (max-width: 640px) {
      h1 {
        font-size: ${typography.size.m3};
    margin-top: 1rem;
      }
   
  }
  ${GridRight} {
      align-items: flex-end;
      @media only screen and (max-width: 1024px) and (min-width: 640px) {
        align-items: flex-start;
        padding-top: 30px;
      }
      @media only screen and (max-width: 640px) {
        align-items: flex-start;
        position: absolute;
        bottom: 0;
        right: 0;
        padding-right: 16px;
        padding-bottom: 16px;
      }
     
  }
  background: linear-gradient(
    to bottom left,
    rgba(4, 201, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 80%
  );
  @media only screen and (max-width: 640px) {
      min-height: 730px;
  }
`

const StyledButtonsContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 640px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    grid-gap: 0; 
    margin-bottom: 2rem;
    width: 100%;
    & ${StyledButton} {
        width: 100%;
    }
  }
`

const Title = styled.h1`
  color: ${color.darkblue};
  font-size: 5rem;
  font-weight: bold;
  font-family: avenir;
  @media only screen and (max-width: 1024px) {
      font-size: 2.5rem;
  }
`

const ImageContainer = styled.div`
  max-width: 25rem;
  width: 100%;
  position: relative;
  @media only screen and (max-width: 640px) {
    max-width: 16rem;
    float: left;
  }
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
            <StaticImage src='../images/logo-large.png' alt='expert graphic' placeholder="none" />
          </ImageContainer>
        </GridRight>
      </TwoColumnGrid>
    </Container>
  )
}

export default TopSection
