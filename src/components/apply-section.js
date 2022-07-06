import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { GridLeft, TwoColumnGrid, GridRight } from './styles/styles'
import StyledButton from './styles/StyledButton'
import { pageMargins, color } from './styles/utils'

const Container = styled.section`
  width: 100%;
  position: relative;
  ${pageMargins};
  padding-top: 60px;
  padding-bottom: 60px;
  & h2 {
    font-size: 2.5rem;
    text-align: center;
  }
  background: ${color.aqua};
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
