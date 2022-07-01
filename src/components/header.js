import React from 'react'
import { Link } from 'gatsby'
import { color } from './styles/utils'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { pageMargins } from './styles/utils'

const StyledLinks = styled.div`
  padding: 30px 0;
  float: right;
  display: flex;
  & p {
    font-size: 18px;
    font-family: avenir;
    padding-left: 20px;
    color: ${color.darkblue};
  }
`

const StyledHeader = styled.nav`
  width: 100%;
  position: relative;
  height: 100px;
  overflow: hidden;
  ${pageMargins};
`

const StyledLogo = styled.div`
  width: 240px;
  height: 100px;
  float: left;
  position: relative;
  margin-top: 10px;
`

export default function Header () {
  return (
    <StyledHeader>
      <StyledLogo>
        <StaticImage src='../images/logo.png' alt='expert graphic' />
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
