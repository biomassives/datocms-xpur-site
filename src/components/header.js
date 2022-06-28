import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const StyledLogo = styled.div`
  width: 270px;
  padding: 30px 0;
  float: right;
`

export default function Header () {
  return (
    <StyledLogo>
      <Link to='/' className='hover:underline'>
        <StaticImage src='../images/logo.png' alt='expurtle logo' />
      </Link>
    </StyledLogo>
  )
}
