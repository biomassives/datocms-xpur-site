import React from 'react'
import styled from 'styled-components'
import { pageMargins, typography, color } from './styles/utils'

const Container = styled.section`
  width: 100%;
  position: relative;
  ${pageMargins};
  min-height: 500px;
  padding-top: 80px;
  padding-bottom: 80px;
  background: linear-gradient(
    138deg,
    rgba(255, 255, 255, 1) 0%,
    ${color.aqua} 51%,
    ${color.darkblue} 94%
  );
  & h2 {
    font-family: avenir;
    font-size: ${typography.size.l1};
    font-weight: bold !important;
    color: ${color.darkblue};
    margin-bottom: 40px;
    @media only screen and (max-width: 640px) {
        font-size: ${typography.size.m3};
    }
  }
`

const VideoSection = () => {
  return (
    <Container>
      <h2>How it works</h2>
      <div style={{ padding: '55.85% 0 0 0', position: 'relative' }}>
        <iframe
          src='https://player.vimeo.com/video/727775677?h=94756a3d5d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          frameborder='0'
          allow='autoplay; fullscreen; picture-in-picture'
          allowfullscreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            boxShadow:
              '20px 20px 60px rgba(17,44,76,0.4), -20px -20px 60px rgb(255 255 255 / 40%)'
          }}
          title='LFW Schedule Page'
        />
      </div>
      <script src='https://player.vimeo.com/api/player.js' />
    </Container>
  )
}

export default VideoSection
