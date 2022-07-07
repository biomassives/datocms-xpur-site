import React from 'react'
import styled from 'styled-components'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Header from '../components/header'
import { GlobalStyle } from './styles/styles'
import Footer from './footer'

const StyledContainer = styled.section`
  position: relative;
`

export default function Layout ({ children, site, seo }) {
  return (
    <StyledContainer>
      <GlobalStyle />
      {/* <HelmetDatoCms seo={seo} favicon={site.favicon} /> */}
      <Header />
      {children}
      <Footer />
    </StyledContainer>
  )
}
