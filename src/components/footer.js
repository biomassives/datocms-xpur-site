import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { pageMargins, color } from './styles/utils'

import {
  ThreeColumnGrid,
  GridLeft,
  GridRight,
  GridCenter
} from './styles/styles'

const FooterContainer = styled.footer`
  width: 100%;
  ${pageMargins};
  position: relative;
  height: 150px;
  padding-top: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${color.darkblue};
  color: white;
  ${ThreeColumnGrid} {
    width: 100%;
  }
  & a {
    margin-right: 20px;
    text-decoration: underline;
  }
`

const ImageContainer = styled.div`
  width: 100px;
  position: relative;
  margin-bottom: 20px;
`

export default function Footer () {
  return (
    <FooterContainer>
      <ThreeColumnGrid>
        <GridLeft>
          <ImageContainer>
            <StaticImage src='../images/logo-white.png' alt='expert graphic' />
          </ImageContainer>
          <Link to='/privacy-policy'>Privacy Policy</Link>
          <Link to='/register'>Register</Link>
        </GridLeft>
        <GridCenter />
        <GridRight>
          <a
            href='https://www.linkedin.com/company/expurtle/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              data-supported-dps='24x24'
              fill='white'
              className='mercado-match'
              width='24'
              height='24'
              focusable='false'
            >
              <path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' />
            </svg>
          </a>
        </GridRight>
      </ThreeColumnGrid>
    </FooterContainer>
  )
}
