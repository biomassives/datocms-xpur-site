import styled, { css } from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { createGlobalStyle } from 'styled-components'
import { globalStyles } from './global'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200
}

export const GlobalStyle = createGlobalStyle`${globalStyles}`

export const Img = styled(GatsbyImage)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  margin: 0 auto;
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: 'left . right';
  width: 100%;
  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: 'left center right';
  grid-gap: 2rem;
  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
  ${({ center }) =>
    center
      ? css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `
      : ''}
`

export const GridCenter = styled.article`
  grid-area: center;
  ${({ center }) =>
    center
      ? css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `
      : ''}
`

export const GridRight = styled.div`
  grid-area: right;
  ${({ center }) =>
    center
      ? css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `
      : ''}
`
