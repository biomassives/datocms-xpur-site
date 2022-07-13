import React, { useRef } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'
import { typography, color } from './styles/utils'
import postToMailerLite from '../api/mailerlite'
import axios from 'axios'
const StyledForm = styled.form`
  width: 100%;
  padding-bottom: 5rem;
  padding-top: 10rem;

  & input,
  textarea,
  select {
    width: 100%;
    padding: 5px;
    border: 1px solid ${color.aqua};
    background: transparent;
    color: ${color.aqua};
    font-family: ${typography.type.secondary};
    font-size: 20px;
    &::placeholder {
      opacity: 1;
      color: ${color.aqua};
    }
  }

  label {
    visibility: hidden;
  }
  & input,
  select {
    height: 50px;
    font-size: 20px;
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
      background-color: ${color.aqua};
      border: 1px solid ${color.aqua};
      margin-right: 1rem;
      &:after {
        background-color: ${color.aqua};
        border: 1px solid ${color.aqua};
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
    border: ${color.aqua};
    cursor: pointer;
    &:hover {
      background: white;
      color: ${color.aqua};
    }
    &[disabled] {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`

const RegisterForm = () => {
  const { handleSubmit, register, errors, formState } = useForm()

  const formRef = useRef(null)

  const onSubmit = async () => {
    try {
      const res = await axios(`/api/mailerlite`, {
        method: 'POST',
        data: {
          email: 'ca@cm.com',
          resubscribe: false,
          type: 'active',
          name: 'Cameron Cameron',
          message: 'hey there'
        }
      })
      console.log('success', res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <StyledForm ref={formRef} method='POST' onSubmit={handleSubmit(onSubmit)}>
      <input type='hidden' name='form-name' value='contact' />
      <div className='form__name-email'>
        <div className='input__container input_name'>
          <label>First Name</label>
          <input
            type='text'
            name='firstName'
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
            type='text'
            name='lastName'
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
            placeholder='Email*'
            {...register('email', {
              required: true,
              validate: input => isEmail(input)
            })}
          />
          {errors?.email && <p>Your email is required</p>}
          {/* {errors?.multipleErrorInput?.type === 'validate' && (
            <p>Your email is incorrect</p>
          )} */}
        </div>
      </div>
      <div className='input__container input_phone'>
        <label>Phone</label>
        <input
          type='tel'
          name='phone'
          placeholder='Phone Number*'
          {...register('phone', {
            required: true
          })}
        />
        {errors?.phone && <p>You forgot your phone number</p>}
      </div>
      <div className='input__container input_message'>
        <label>Message</label>
        <textarea
          name='message'
          rows={10}
          placeholder='Comments*'
          {...register('message', {
            required: true
          })}
        />
        {errors?.message && <p>You forgot to leave a comment</p>}
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
          <p>I accept the Privacy Policy and Terms of Use*</p>
          {errors?.checkbox && (
            <p>You need to accept our privacy policy and terms of use</p>
          )}
        </div>
      </div>

      <button type='submit' disabled={formState.isSubmitting}>
        Submit
      </button>
    </StyledForm>
  )
}

export default RegisterForm
