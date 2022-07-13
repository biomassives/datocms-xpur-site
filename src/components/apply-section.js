import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { GridLeft, TwoColumnGrid, GridRight } from './styles/styles'
import StyledButton from './styles/StyledButton'
import { pageMargins, color, typography } from './styles/utils'

const Container = styled.section`
  width: 100%;
  position: relative;
  ${pageMargins};
  padding-top: 60px;
  padding-bottom: 60px;
  & h2 {
    font-size: 2rem;
    @media only screen and (max-width: 640px) {
        font-size: ${typography.size.m3};
    }
  }
  background: ${color.aqua};
  & a {
    @media only screen and (max-width: 1024px) {
          width: 100%;       
      }
  }

  & ${StyledButton} {
      width: 384px;
      @media only screen and (max-width: 1024px) {
          width: 100%;
          margin-top: 20px;
      }
  }
`

const ApplySection = () => {
  return (
    <Container>
      <TwoColumnGrid>
        <GridLeft center>
          <h2>Apply for our first intake of experts in late 2022</h2>
        </GridLeft>
        <GridRight center>
          <Link to='/register'>
            <StyledButton theme='dark'>Register</StyledButton>
          </Link>
        </GridRight>
      </TwoColumnGrid>
    </Container>
  )
}

export default ApplySection
