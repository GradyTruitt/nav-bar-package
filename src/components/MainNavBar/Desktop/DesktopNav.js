import React, { Component } from 'react'
import styled from 'styled-components'

import arrow from 'assets/SVG/arrow.svg'

export default class NavBar extends Component {

  render() {
    return (
      <Container>
        <Buttons>
          <Button
            value="One"
            >
            Menu 1
          </Button>
          <Button
            value="Two"
            >
            Menu 2
          </Button>
          <Button
            value="Three"
            >
            Menu 3
          </Button>
        </Buttons>
      </Container>
    )
  }
}

const Container = styled.div`
  padding: 0 15px;
  width: 100%;
  height: 70px;
  background-color: white;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Arrow = styled.img`
  width: 30px;
  transform-origin: center;
  transform: rotate(-90deg);
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const Button = styled.button`
  margin: 0 10px;
  padding: 20px 30px;
  height: 0;
  line-height: 0;
  font-size: 14pt;
  color: ${props => props.menu === props.value ? 'white' : props.theme.primaryColor};
  background: ${props => props.menu === props.value ? props.theme.primaryColor : 'transparent'};
  outline: none;
  border: 2px solid ${props => props.theme.primaryColor};
  border-radius: 30px;
  transition-duration: 0.6s;

  &:hover {
    background: ${props => props.theme.primaryColor};
    color: white;
    cursor: pointer;
  }

  @media (max-width: ${props => props.theme.desktop}px) {
    margin: 5px;
  }
`
