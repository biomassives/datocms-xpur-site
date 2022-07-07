import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { pageMargins } from '../components/styles/utils'

const Container = styled.section`
  width: 100%;
  ${pageMargins};
  padding-top: 100px;
  padding-bottom: 100px;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to bottom left,
    rgba(4, 201, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 80%
  );
  &
    #mlb2-838372
    > div
    > div
    > div.ml-form-embedBody.ml-form-embedBodyDefault.row-form
    > div
    > h4 {
    font-family: avenir !important;
    font-size: 2rem !important;
    padding-bottom: 1rem;
  }
`

const Register = () => {
  return (
    <Layout>
      <Helmet>
        <script>
          {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '69441');`}
        </script>
      </Helmet>
      <Container>
        <div className='ml-embedded' data-form='6PdgFJ' />
      </Container>
    </Layout>
  )
}

export default Register
