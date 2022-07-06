import styled, { css } from 'styled-components'

export const remCalc = size => {
  let remSize
  if (Number.isInteger(size)) {
    remSize = `${size / 16}rem`
  }
  if (Array.isArray(size)) {
    remSize = ''
    size.map(px => (remSize += `${px / 16}rem`))
  }

  return remSize
}

export const typography = {
  type: {
    primary: '"Avenir", serif',
    secondary: '"Avenir", serif'
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  size: {
    s1: '0.625rem',
    s2: '0.75rem',
    s3: '1rem',
    m1: '1.25rem',
    m2: '1.375rem',
    m3: '2.25rem',
    l1: '3.625rem',
    l2: '6.33rem',
    l3: '10.625rem'
  }
}

export const color = {
  aqua: 'rgba(4,201,255,1)',
  darkblue: 'rgba(17,44,76,1)',
  midblue: 'rgba(1,105,254,1)'
}

export const breakpoint = 600
export const pageMargin = '5.55555'

export const pageMargins = css`
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 640px) {
    padding-left: ${pageMargin * 1}%;
    padding-right: ${pageMargin * 1}%;
  }
  @media (min-width: 768px) {
    padding-left: ${pageMargin * 2}%;
    padding-right: ${pageMargin * 2}%;
  }
  @media (min-width: 1024px) {
    padding-left: ${pageMargin * 1.5}%;
    padding-right: ${pageMargin * 1.5}%;
  }
  @media (min-width: 1440px) {
    padding-left: ${pageMargin * 1.8}%;
    padding-right: ${pageMargin * 1.8}%;
  }
`
