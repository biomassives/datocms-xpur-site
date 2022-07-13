import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'
import { typography, color } from './styles/utils'
import SuccessModal from './modal'
import axios from 'axios'
import { Link } from 'gatsby'

const FormContainer = styled.div`
  position: relative;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 55px rgb(17 44 76 / 10%);
  padding: 40px;
`

const StyledForm = styled.form`
  width: 100%;
  padding-bottom: 1rem;
  & a {
    text-decoration: underline;
  }

  & input,
  textarea,
  select {
    width: 100%;
    padding: 5px;
    border-bottom: 1px solid ${color.darkblue};
    background: transparent;
    color: ${color.darkblue};
    font-family: ${typography.type.secondary};
    font-size: 18px;
    &::placeholder {
      opacity: 0.7;
      color: ${color.darkblue};
    }
  }

  label {
    visibility: hidden;
  }
  & input,
  select {
    height: 50px;
    font-size: 18px;
  }
  & .input_name {
    width: 40%;
    min-width: 25rem;
  }
  & .input_email {
    width: 50%;
    min-width: 25rem;
  }
  & .input_phone,
  .input_message {
    width: 60%;
    min-width: 25rem;
  }

  @media only screen and (max-width: 640px) {
    & .input_name,
    .input_email,
    .input_phone,
    .input_message {
      width: 100%;
      min-width: unset;
    }
  }
  & .privacy-input {
    display: flex;
    margin-top: 1.5rem;
    & p {
      font-size: 1rem;
    }
    input[type='checkbox'] {
      width: 1.5rem;
      height: 1.5rem;
      background-color: ${color.darkblue};
      border-bottom: 1px solid ${color.darkblue};
      margin-right: 1rem;
      &:after {
        background-color: ${color.darkblue};
        border: 1px solid ${color.darkblue};
      }
    }
  }

  .select_list {
    height: 50px;
    position: relative;
    margin-top: 1rem;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }

  .input_errors-privacy {
    & p {
      display: block;
    }
  }
  button[type='submit'] {
    margin-top: 2rem;
    background: ${color.aqua};
    width: 248px;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    color: white;
    font-size: 1.25rem;
    transition: all 0.2s ease;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      background: ${color.darkblue};
      color: white;
    }
    &[disabled] {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`

const RegisterForm = () => {
  const { handleSubmit, register, errors, formState, setValue } = useForm()
  const [modalOpen, setModalOpen] = useState(false)
  const [message, setMessage] = useState('')
  const formRef = useRef(null)

  const onSubmit = async e => {
    const { email, phone, firstname: name, lastname: last_name } = e

    try {
      const res = await axios(`/api/mailerlite`, {
        method: 'POST',
        data: {
          resubscribe: false,
          type: 'active',
          email,
          name,
          fields: {
            last_name,
            phone
          }
        }
      })
      setMessage('Thanks for registering!')
      setModalOpen(true)
    } catch (error) {
      setMessage('Sorry there was an issue with your submission')
      console.log('error:', error.response.data.error)
      setModalOpen(true)
    }
  }

  return (
    <FormContainer>
      <SuccessModal
        message={message}
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      />
      <StyledForm ref={formRef} method='POST' onSubmit={handleSubmit(onSubmit)}>
        <input type='hidden' name='form-name' value='contact' />
        <div className='form__name-email'>
          <div className='input__container input_name'>
            <label>First Name</label>
            <input
              type='text'
              name='firstName'
              data-id='name'
              onChange={e => setValue('name', setValue(e.target.value))}
              placeholder='First Name*'
              {...register('firstname', {
                required: true,
                minLength: 2
              })}
            />
            {errors?.firstName && <p>Your first name is required</p>}
          </div>
          <div className='input__container input_name'>
            <label>Last Name</label>
            <input
              data-id='last_name'
              type='text'
              name='lastName'
              onChange={e => setValue('last_name', setValue(e.target.value))}
              placeholder='Last Name*'
              {...register('lastname', {
                required: true
              })}
            />
            {errors?.lastName && <p>Your second name is required</p>}
          </div>
          <div className='input__container input_email'>
            <label>Email</label>
            <input
              type='email'
              name='email'
              data-id='email'
              onChange={e => setValue('email', setValue(e.target.value))}
              placeholder='Email*'
              {...register('email', {
                required: true,
                validate: input => isEmail(input)
              })}
            />
            {errors?.email && <p>Your email is required</p>}
          </div>
        </div>
        <div className='input__container input_phone'>
          <label>Phone</label>
          <input
            type='tel'
            name='phone'
            data-id='phone'
            onChange={e => setValue('phone', setValue(e.target.value))}
            placeholder='Phone Number'
            {...register('phone')}
          />
        </div>
        <div className='privacy-input'>
          <input
            type='checkbox'
            name='checkbox'
            {...register('checkbox', {
              required: true
            })}
          />
          <div className='input_errors-privacy'>
            <p>
              I accept the <Link to='/privacy-policy'>Privacy Policy</Link>
            </p>
            {errors?.checkbox && (
              <p>
                You need to accept our{' '}
                <Link to='/privacy-policy'>Privacy Policy</Link>
              </p>
            )}
          </div>
        </div>

        <button type='submit' disabled={formState.isSubmitting}>
          Submit
        </button>
      </StyledForm>
    </FormContainer>
  )
}

export default RegisterForm
