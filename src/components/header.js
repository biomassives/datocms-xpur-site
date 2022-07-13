import React from 'react'
import { Link } from 'gatsby'
import { color } from './styles/utils'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { pageMargins } from './styles/utils'

const HEADER_HEIGHT = '70px'

const StyledLinks = styled.div`
  line-height: ${HEADER_HEIGHT};
  float: right;
  display: flex;
  z-index: 1;
  position: relative;
  & p {
    font-size: 18px;
    font-family: avenir;
    padding-left: 20px;
    color: ${color.darkblue};
  }
`

const StyledHeader = styled.nav`
  width: 100%;
  position: absolute;
  height: ${HEADER_HEIGHT};
  ${pageMargins};
  background: white;
  z-index: 1;
  box-shadow: 0px 4px 55px rgba(17, 44, 76, 0.1);
`

const StyledLogo = styled.div`
  width: 137px;
  height: 70px;
  float: left;
  position: relative;
  margin-top: 17px;
`

export default function Header () {
  return (
    <StyledHeader>
      <StyledLogo className='hey'>
      <Link to="/">
        <StaticImage src='../images/logo.png' alt='expert graphic' />
        </Link>
      </StyledLogo>
      <StyledLinks>
        <Link to='/' className='hover:underline'>
          <p>Home</p>
        </Link>
        <Link to='/register' className='hover:underline'>
          <p>Register</p>
        </Link>
      </StyledLinks>
    </StyledHeader>
  )
}
