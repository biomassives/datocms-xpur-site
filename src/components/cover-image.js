import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'classnames'
import { Link } from 'gatsby'
import styled from 'styled-components'
import StyledButton from './styles/StyledButton'

const StyledCoverImage = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  margin-top: 40px;
  background: linear-gradient(
    138deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(17, 214, 219, 1) 51%,
    rgba(56, 136, 191, 1) 94%
  );
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  color: white;
  & h1 {
    font-size: 55px;
  }
  & h2 {
    font-size: 30px;

    width: 400px;
  }
  p {
    font-size: 18px;
    text-align: center;
  }
`

export default function CoverImage ({ title, fluid, slug }) {
  return (
    <div className='-mx-5 sm:mx-0'>
      <StyledCoverImage>
        <h1
          style={{ color: '#243755' }}
          className='text-8xl md:text-7xl font-bold tracking-tighter leading-tight'
        >
          Expurtle
        </h1>
        <p style={{ color: '#243755' }} className='text-1xl py-6 w-80'>
          The Leading Digital Marketplace for Investment Experts
        </p>
      </StyledCoverImage>
    </div>
  )
}
