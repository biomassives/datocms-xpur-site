import React from 'react'
import styled from 'styled-components'
import StyledButton from './styles/StyledButton'
import { GridLeft, GridRight, TwoColumnGrid } from './styles/styles'
import { pageMargins, color } from './styles/utils'
import { StaticImage } from 'gatsby-plugin-image'

const Container = styled.div`
  width: 100%;
  position: relative;
  height: 70vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  ${pageMargins};
  ${TwoColumnGrid} {
    height: 100%;
  }
  ${GridLeft} {
    align-items: flex-start;
  }
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

const TopSection = () => {
  return (
    <Container>
      <TwoColumnGrid>
        <GridLeft center>
          <Title>Expurtle</Title>
          <p style={{ color: '#243755' }} className='text-1xl py-6 w-80'>
            The Leading Digital Marketplace for Investment Experts
          </p>
          <StyledButtonsContainer>
            <StyledButton theme='dark'>Register</StyledButton>
            <StyledButton theme='blue'>Book an intro call</StyledButton>
          </StyledButtonsContainer>
        </GridLeft>
        <GridRight center>
          <StaticImage src='../images/logo-large.jpg' alt='expert graphic' />
        </GridRight>
      </TwoColumnGrid>
    </Container>
  )
}

export default TopSection
