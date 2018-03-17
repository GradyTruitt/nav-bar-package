import React, { Fragment } from 'react'
import styled from 'styled-components'



export default () => (
  <Fragment>
    <Heading>
      Welcome,
    </Heading>
    <Heading>
      Pick your favorite nav bar.
    </Heading>
    <Divider />
    <Heading2>
      Use it on your next site!
    </Heading2>
  </Fragment>
)

const Heading = styled.h1`
  margin-left: 12%;
  width: 75%;
  color: ${props => props.theme.headingColor};
  font-family: ${props => props.theme.fontFamily};
  font-size: 65pt;
  font-weight: ${props => props.theme.extraBold};
  letter-spacing: -1px;

  @media (max-width: ${props => props.theme.desktop}px) {
    font-size: 30pt;
    width: 85%;
    margin-left: 10%;
  }
`
const Divider = styled.div`
  width: 150px;
  height: 10px;
  background-color: ${props => props.theme.primaryColor};
  margin: 40px 0;
  margin-left: 12%;

  @media (max-width: ${props => props.theme.desktop}px) {
    margin: 20px 0;
    width: 80px
    height: 6px;
    margin-left: 10%;
  }
`
const Heading2 = styled.h1`
  margin-left: 12%;
  width: 75%;
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fontFamily};
  font-size: 65pt;
  font-weight: ${props => props.theme.extraBold};
  letter-spacing: -1px;

  @media (max-width: ${props => props.theme.desktop}px) {
    font-size: 30pt;
    width: 85%;
    margin-left: 10%;
  }
`
