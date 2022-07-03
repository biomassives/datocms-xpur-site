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
    rgba(17, 214, 219, 1) 51%,
    rgba(56, 136, 191, 1) 94%
  );
  & h2 {
    font-family: avenir;
    font-size: ${typography.size.l1};
    font-weight: bold !important;
    color: ${color.darkblue};
    margin-bottom: 40px;
  }
`

const VideoSection = () => {
  return (
    <Container>
      <h2>How it works</h2>
      <div style={{ padding: '50.21% 0 0 0', position: 'relative' }}>
        <iframe
          src='https://player.vimeo.com/video/433129383?h=bb6b748263&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          frameborder='0'
          allow='autoplay; fullscreen; picture-in-picture'
          allowfullscreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '12px'
          }}
          title='LFW Schedule Page'
        />
      </div>
      <script src='https://player.vimeo.com/api/player.js' />
    </Container>
  )
}

export default VideoSection
