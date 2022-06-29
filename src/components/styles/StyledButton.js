import styled, { css } from 'styled-components'
import { color } from './utils'

const darkTheme = css`
  background-color: ${color.darkblue};
  color: white;
`

const blueTheme = css`
  background-color: ${color.aqua};
  color: ${color.darkblue};
`

const lightTheme = css`
  color: ${color.darkblue};
  background-color: white;
  border: 1px solid ${color.darkblue};
`

const themes = {
  dark: darkTheme,
  blue: blueTheme,
  light: lightTheme
}

const StyledButton = styled.button`
  position: relative;
  width: 260px;
  height: 48px;
  line-height: 1;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 20px;
  ${({ theme }) => themes[theme]};
  & * {
    color: white;
  }
`

export default StyledButton
