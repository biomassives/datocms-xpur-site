import React from 'react'
import styled from 'styled-components'
import { pageMargins } from './styles/utils'

const StyledContainer = styled.section`
  ${pageMargins};
  position: relative;
`

export default function Container ({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
