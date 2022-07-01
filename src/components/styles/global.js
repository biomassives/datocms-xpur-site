import reset from './reset'
import { css } from 'styled-components'
import { color, typography } from './utils'

export const globalStyles = css`
  ${reset};

  body {
    font-family: avenir;
    color: ${color.darkblue};
  }

  h1,
  h2 {
    font-family: avenir;
    font-size: ${typography.size.l1};
    font-weight: bold !important;
    color: ${color.darkblue};
  }
`
