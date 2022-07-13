import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { pageMargins } from '../components/styles/utils'
import RegisterForm from '../components/register-form'

const Container = styled.section`
  width: 100%;
  ${pageMargins};
  padding-top: 150px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(
    to bottom left,
    rgba(4, 201, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 80%
  );
  & h1 {
    font-size: 2.2rem;
    padding-bottom: 2rem;
  }
`

const Register = () => {
  return (
    <Layout>
      <Container>
        <h1>Register</h1>
        <RegisterForm />
      </Container>
    </Layout>
  )
}

export default Register
