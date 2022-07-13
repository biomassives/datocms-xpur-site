import React from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import { color } from './styles/utils'
import Close from './icons/Close'

const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 375px;
  margin: 0 auto;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  position: absolute;
  box-shadow: 0px 4px 55px rgb(17 44 76 / 10%);
  padding: 30px;
  background-color: ${color.darkblue};
  border-radius: 10px;
  & h2 {
    font-size: 22px;
    line-height: 2rem;
    margin-bottom: 0;
    text-align: center;
  }
  @media only screen and (max-width: 575px) {
    width: 80%;
  }
  &:focus {
    outline: none;
  }
  h2 {
    color: white;
  }
  & .close-modal {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    width: 1.5rem;
    height: 1.5rem;
    z-index: 10;
    cursor: pointer;
    * {
      fill: #fff;
    }
    &:focus {
      outline: none;
      cursor: pointer;
    }
  }
`

const SuccessModal = ({ isOpen, onRequestClose, message }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick
    >
      <h2>{message}</h2>
      <Close className='close-modal' onClick={onRequestClose} />
    </StyledModal>
  )
}

export default SuccessModal
