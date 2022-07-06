import styled, { css } from 'styled-components'
import { color } from './utils'

const darkTheme = css`
  background-color: ${color.darkblue};
  color: white;
`

const blueTheme = css`
  background: linear-gradient(138deg, ${color.aqua} 0%, ${color.midblue} 100%);
  color: white;
`

const lightTheme = css`
  color: ${color.midblue};
  background-color: white;
  border: 1px solid ${color.midblue};
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
