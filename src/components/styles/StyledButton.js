import styled from 'styled-components'

const StyledButton = styled.button`
  position: relative;
  width: 260px;
  height: 48px;
  background: #243755;
  line-height: 1;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 20px;
  & * {
    color: white;
  }
`

export default StyledButton
