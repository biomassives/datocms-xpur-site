import React from 'react'
import styled, { css } from 'styled-components'
import { pageMargins, color, typography } from './styles/utils'
import { StaticImage } from 'gatsby-plugin-image'
import { TwoColumnGrid, GridLeft, GridRight } from './styles/styles'

const Contents = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  margin: 0 auto;
  height: 340px;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
  ${pageMargins};
  & * {
    color: ${color.darkblue};
  }
  & h2 {
    font-size: ${typography.size.l2};
    background: rgb(18, 214, 219);
    height: 260px;
    width: 260px;
    text-align: center;
    line-height: 260px;
    border-radius: 50%;
    color: ${color.darkblue};
  }
  & p {
    font-size: 22px;
    font-weight: 200;
    line-height: 34px;
    padding: 0 50px;
    width: 70%;
  }
  & img {
    object-fit: contain;
    margin: 0 auto;
  }

  ${({ dark }) =>
    dark
      ? css`
          background: ${color.darkblue};
          & * {
            color: white;
          }
        `
      : ''}
`

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
`

const SecondSection = () => {
  return (
    <Container>
      <Contents dark>
        <TwoColumnGrid>
          <GridLeft center>
            <h2>15%</h2>
          </GridLeft>
          <GridRight center>
            <p>
              Of all retail investors began investing in 2020 with little or now
              experience of the stock market.
            </p>
          </GridRight>
        </TwoColumnGrid>
      </Contents>

      <Contents>
        <TwoColumnGrid>
          <GridLeft center>
            <p>
              Is it any wonder today why there are a record number of trading
              accounts{' '}
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                in the red.
              </span>
            </p>
          </GridLeft>
          <GridRight center>
            <StaticImage
              src='../images/prob-v-sol.jpg'
              alt='expert graphic'
              layout='fixed'
              width={400}
              height={300}
            />
          </GridRight>
        </TwoColumnGrid>
      </Contents>
    </Container>
  )
}

export default SecondSection
